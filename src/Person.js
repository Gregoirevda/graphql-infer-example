import React from 'react';

import './App.css';
import {graphqlInfer} from './graphql-infer';

const Person = ({person, result}) => <div className="poc">
  <h3>I'm {person.name}</h3>
  <h4>I'm {person.age} years old.</h4>
</div>;

export default graphqlInfer({ query: 'person'})(Person);


/**
 Here we're telling graphqlInfer to query person on Query type.

 Our schema

 type Query {
    person: Person
 }

 type Person {
   name: String
   age: Number
 }

 */