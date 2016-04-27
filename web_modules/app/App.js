import React, { Component } from 'react';

import Counter from 'Counter';

export default class App extends Component {
  render() {
    return (
      <div>
      Hello React !
      <Counter name="One"/>
      <Counter name="Two"/>
      <Counter />
      <Counter />
      </div>
    );
  }
}
