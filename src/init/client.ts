import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

// GraphQl server
const uri = 'https://funded-pet-library.moonhighway.com/'
const link = createHttpLink({ uri })

export const client = new ApolloClient({ link, cache: new InMemoryCache(), })

// cache для кэширования
