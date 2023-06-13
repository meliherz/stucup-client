import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

export const createApolloClient = () => {
  const link = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URI_DEV,
    credentials: 'include'
  });

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
  
  return client;
};