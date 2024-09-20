import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {createRoot} from "react-dom/client";
import App from "./App.tsx";

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache()
});

createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>)


