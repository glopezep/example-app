import React, { Component } from 'react';
import LoginForm from './auth/LoginForm'

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});

const client = new ApolloClient({ networkInterface })

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <LoginForm />
        </div>
      </ApolloProvider>
    );
  }
}


export default App;
