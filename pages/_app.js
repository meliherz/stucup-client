import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { createApolloClient } from '../apollo-client';
import { AuthProvider } from '../libs/auth/useAuth'
import { SSRProvider } from 'react-bootstrap';
import '../assets/sass/main.scss'

export default function App({ Component, pageProps }) {

  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <SSRProvider>
      <AuthProvider value={''}>
        <Component {...pageProps} />
        </AuthProvider>
      </SSRProvider>
    </ApolloProvider>
  )
}
