import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const queryAvailablePets = loader('./gql/useQueryAvailablePets.graphql');

export const useQueryAvailablePets = () => {
  const { loading, error, data } = useQuery(queryAvailablePets);

  return { loading, error, availablePets: data?.availablePets }
};
