import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/react-hooks';
import '../assets/sass/main.scss'

export default function App({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URI_DEV,
    cache: new InMemoryCache(),
  });

  return (
  <ApolloProvider client={client}>
   <Component {...pageProps} />
   </ApolloProvider>
  )
}
