import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../init/client';
import {Pet} from './bus';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Pet/>
    </ApolloProvider>
  );
};
