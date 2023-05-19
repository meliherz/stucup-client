import { ApolloProvider } from '@apollo/react-hooks';
import '../assets/sass/main.scss'

export default function App({ Component, pageProps }) {
  const client = createApolloClient();
  return (
  <ApolloProvider client={client}>
   <Component {...pageProps} />
   </ApolloProvider>
  )
}
