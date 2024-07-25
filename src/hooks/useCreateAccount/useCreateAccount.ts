import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Account } from '../../types/types';

const mutationCreateAccount = loader('./gql/useMutationCreateAccount.graphql');

export const useCreateAccount = () => {
  const [addUser, {loading, error, data}] = useMutation(mutationCreateAccount)
  const [value, setValue] = useState<Account>({
    account: {
      name: '',
      username: '',
      password: '',
      }
    }
  )

  const handleChange = (e: any) => {
    e.persist()
    setValue((prevState) => {
      return {...prevState,
        account: {...prevState.account, [e.target.name]: e.target.value}
      }
    })
  }

  const save = () => {
    const {account} = value
    addUser({variables: { account}})
  }

  return {value, handleChange, save, loading, error, createAccount: data?.createAccount }
}
