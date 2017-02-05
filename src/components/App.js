import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Main from './main/index';
import Swipe from './swipe/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path='/'>
            <Route path='swipe' component={Swipe}/>
            <IndexRoute component={Main}/>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
