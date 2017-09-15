import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo'
import Page from './pages/Page'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});
const client = new ApolloClient({ networkInterface })
const container = document.getElementById('root')

render(
  <ApolloProvider client={client}>
    <Page />
  </ApolloProvider>,
  container
);

registerServiceWorker();
