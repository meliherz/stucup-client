import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = () => {
    const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URI_DEV,
    cache: new InMemoryCache(),
    fetchOptions: {
      credentials: 'include',
    },
  });
  
  return client;
};