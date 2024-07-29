import { useMutation } from '@apollo/client';
import { useForm } from '../useForm/useForm';
import { loader } from 'graphql.macro';

const mutationLogIn = loader('./gql/useMutationLogIn.graphql');

export const useCustomerAuth = () => {
  const [_logIn, {loading, error, data}] = useMutation(mutationLogIn)
  const {form, handleChange} = useForm({username: '', password: ''})

  const authorizedCustomer = data?.logIn;
  const token = authorizedCustomer && authorizedCustomer.token;

  if (token) {
    localStorage.setItem('token', token);
  }

  const logIn = () => {
    _logIn({variables: form})
  }

  return {handleChange, logIn, authorizedCustomer}
}
