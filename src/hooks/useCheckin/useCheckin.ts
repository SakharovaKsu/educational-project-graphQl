import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useState } from 'react';

const mutationCheckin = loader('./gql/useMutationCheckin.graphql');

export const useCheckin = () => {
  const [_checkIn, {data, loading, error }] = useMutation(mutationCheckin)
  const [errors, setErrors] = useState<string>('');

  const checkIn = (checkInId: string) => {
    (async () => {
      try {
        await _checkIn({
          variables: {
            checkInId
          }
        })
      } catch (error: any) {
        setErrors(error.message);
      }
    })()
  };

  return { checkIn, pet: data?.checkIn?.pet, loading, error, errors }
}
