import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading,
});

const Analy = Loadable({
  loader: () => import('../pages/Analy'),
  loading: Loading,
});

const App = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/analy" component={Analy}/>
    </Switch>
  </Router>
);

export default App
