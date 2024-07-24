import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const queryAvailablePets = loader('./gql/useQueryAvailablePets.graphql');

export const useQueryAvailablePets = () => useQuery(queryAvailablePets);
