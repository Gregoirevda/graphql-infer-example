import React, {Component} from 'react';
import {gredux} from './gredux/gredux';
import {gql, graphql} from 'react-apollo';

class Person extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  console.log(this.props);
    const {person, result} = this.props;
    return <div>
      {/*<h4>I'm {person.age} years old. {person.name}</h4>*/}
      {/*<pre>{result}</pre>*/}
    </div>
  }
}
const query = gql` query person {
  person {
    age,name
  }
}`;

export default graphql(query)(Person);



/**
 In the apollo-server directory, you can see that our defined graphql schema looks like
 type Query {
    person: Person
 }

 type Person {
   name: String
   age: Number
 }

 Here we're telling gredux to query person on Query type.
 */