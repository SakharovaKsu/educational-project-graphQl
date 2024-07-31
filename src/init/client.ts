import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

// GraphQl server
const uri = 'https://funded-pet-library.moonhighway.com/'
const httpLink = createHttpLink({ uri })

// WebSocket link for subscriptions
const wsLink = new WebSocketLink({
  uri: `wss://funded-pet-library.moonhighway.com/graphql`, // Используйте wss для WebSocket
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem('token'), // Если требуется авторизация
    },
  },
});

const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create Apollo Client
export const client = new ApolloClient({
  // Объедините authLink и link
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

// cache для кэширования
