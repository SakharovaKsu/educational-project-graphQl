import { useLazyQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const queryProfile = loader('./gql/useQueryProfile.graphql');

export const useQueryProfile = () => {
  const [getProfile, { loading, error, data }] = useLazyQuery(queryProfile);

  return { getProfile, loading, error, profile: data?.petById }
};
