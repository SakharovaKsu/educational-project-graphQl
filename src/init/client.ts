import {ApolloClient, InMemoryCache} from '@apollo/client';

// GraphQl server
const uri = 'https://funded-pet-library.moonhighway.com/'

export const client = new ApolloClient({  uri, cache: new InMemoryCache(), })
