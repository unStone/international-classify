import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import { pageLoadable } from '../util/loadable'

const Home = pageLoadable('../pages/Home');
const Analy = pageLoadable('../pages/Analy');

const App = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/Analy" component={Analy}/>
    </Switch>
  </Router>
);

export default App
