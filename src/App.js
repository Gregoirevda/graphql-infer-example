import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
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
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div className="App-intro">
            <Person/>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
