import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  concat,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useContext, useMemo, useRef } from 'react';
import { UserContext } from './src/contexts';

interface ApolloAuthProviderProps {
  children: JSX.Element[];
}
// The name here doesn't really matters.
export const ApolloAuthProvider = ({ children }: ApolloAuthProviderProps) => {
  const { token } = useContext(UserContext);
  const tokenRef = useRef('');

  // Whenever the token changes, the component re-renders, thus updating the ref.
  tokenRef.current = token;

  // Ensure that the client is only created once.

  const client = useMemo(() => {
    const httpLink = new HttpLink({ uri: `${process.env.GQL_BASE_URL}` });

    const authMiddleware = new ApolloLink((operation, forward) => {
      // add the authorization to the headers
      operation.setContext(({ headers = {} }) => ({
        headers: {
          ...headers,
          authorization: tokenRef.current ? `Bearer ${tokenRef.current}` : '',
        }
      }));
      return forward(operation);
    })

    return new ApolloClient({
      cache: new InMemoryCache({
        addTypename: false
      }),
      link: concat(authMiddleware, httpLink),
    });
  }, [])

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}