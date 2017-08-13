import React, { Component } from 'react';

import Person from './Person';
import {ApolloProvider, ApolloClient, createNetworkInterface} from 'react-apollo';

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3010/graphql',
  }),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Person/>
      </ApolloProvider>
    );
  }
}

export default App;
