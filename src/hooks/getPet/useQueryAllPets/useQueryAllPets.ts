import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const queryAllPets = loader('./gql/useQueryAllPets.graphql');

export const useQueryAllPets = () => {
  const { loading, error, data } = useQuery(queryAllPets)

  return { loading, error, pets: data?.allPets }
}
