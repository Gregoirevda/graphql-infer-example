import React, {Component} from 'react';
import {makeProxy} from './utils';

/*
HoC
*/
export const gredux = config => WrappedComponent => {
  return class extends Component {

    constructor(props) {
      super(props);
      let query = {};
      let queryProxy = makeProxy(query);

      this.state = {
        [config.query] : queryProxy,
        query: null
      };
    }

    componentDidMount = async() => {
      const queryObj = this.state[config.query];
      const query = `
          query ${config.query} {
            ${config.query} {
              ${Object.keys(queryObj)}
            }
          }
        `;
      this.setState({result: query});
    };

    render() {
      return <WrappedComponent
        {...this.state}
        {...this.props}
      />
    }
  };
};