import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Main from './main/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path='/' component={Main}>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
