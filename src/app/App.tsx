import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../init/client';
import { Pet, Registration, Login, CheckinPet, CheckOutPet } from '../pages';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      {/*<Pet/>*/}
      <Registration/>
      <Login/>
      <CheckinPet/>
      <div style={{display: 'block', padding: '20px 0'}}>______________________</div>
      <CheckOutPet/>
    </ApolloProvider>
  );
};
