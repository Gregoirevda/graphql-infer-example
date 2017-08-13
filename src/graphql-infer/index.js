import React, {Component} from 'react';
import {makeProxy} from './utils';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

/*
HoC
*/
export const graphqlInfer = config => WrappedComponent => {
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

    componentDidMount() {
      const queryObj = this.state[config.query];
      const query = `
          query ${config.query} {
            ${config.query} {
              ${Object.keys(queryObj)}
            }
          }
        `;
      this.setState({query});
    };

    render() {
      if(this.state.query) {
        console.log(this.state.query);
        const GraphQLComponent = graphql(gql`${this.state.query}`, {
          props: ({ownProps, data}) => {
            if(data && !data.loading) {
              let newProps = {};
              for(let prop in this.state[config.query]) {
                newProps[prop] = data[config.query][prop];
              }
              return {
                ...ownProps,
                [config.query] : newProps
              }
            }
            return {
              ...ownProps,
              ...this.state
            }
          }
        })(WrappedComponent)
        return <GraphQLComponent/>
      }
      return <WrappedComponent
        {...this.state}
        {...this.props}
      />
    }
  };
};