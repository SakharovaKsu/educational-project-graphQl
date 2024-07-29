import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../init/client';
import { Pet, Registration, Login } from '../pages';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      {/*<Pet/>*/}
      <Registration/>
      <Login/>
    </ApolloProvider>
  );
};
