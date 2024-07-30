import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useState } from 'react';

const mutationCheckOut = loader('./gql/useMutationCheckOut.graphql');

export const useCheckOut = () => {
  const [_checkOut, {data, loading, error }] = useMutation(mutationCheckOut)
  const [errors, setErrors] = useState<string>('');

  const checkOut = (checkOutId: string) => {
    (async () => {
      try {
        await _checkOut({
          variables: {
            checkOutId
          }
        })
      } catch (error: any) {
        setErrors(error.message);
      }
    })()
  };

  return { checkOut, customer: data?.checkOut?.customer, loading, error, errors }
}
