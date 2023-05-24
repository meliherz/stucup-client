import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { createApolloClient } from '../apollo-client';
import '../assets/sass/main.scss'

export default function App({ Component, pageProps }) {

  const client = createApolloClient();

  return (
  <ApolloProvider client={client}>
   <Component {...pageProps} />
   </ApolloProvider>
  )
  }
