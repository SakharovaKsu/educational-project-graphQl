import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import {useForm} from '../useForm/useForm';

const mutationCreateAccount = loader('./gql/useMutationCreateAccount.graphql');

export const useCreateAccount = () => {
  const [addUser, {loading, error, data}] = useMutation(mutationCreateAccount)
  const {handleChange, form} = useForm({name: '', username: '', password: ''})

  const save = () => {
    addUser({ variables: { account: form } })
  }

  return {form, handleChange, save, loading, error, createAccount: data?.createAccount }
}
