import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { JavascriptYellow } from 'components';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return <JavascriptYellow />;
  }
}

export default hot(App);
