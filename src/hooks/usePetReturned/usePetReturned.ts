import { useSubscription } from '@apollo/client';
import { loader } from 'graphql.macro';

const subscriptionPetReturned = loader('./gql/useSubscriptionPetReturned.graphql');

export const usePetReturned = () => {
  const {data, loading, error } = useSubscription(subscriptionPetReturned)

  return { petReturned: data?.petReturned?.pet, loading, error }
}
