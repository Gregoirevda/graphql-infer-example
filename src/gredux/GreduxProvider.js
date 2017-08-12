

/*
*
* NOT USED ANY MORE. DONT USE THE CONTEXT
*
* */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {makeProxy} from './utils';

export class GreduxProvider extends Component {

  static childContextTypes = {
    query: PropTypes.object
  };

  getChildContext() {
    let context = {}, query = {};
    let queryProxy = makeProxy(query);
    context = { query: queryProxy};
    return context;
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}