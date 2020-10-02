import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactTemplate from '../pages/ReactTemplate';
import Main from '../pages/Main';
import MapDemo from '../pages/MapDemo';
import VRDemo from '../pages/VRDemo';
import Dashboard from '../pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/vrdemo">
          <VRDemo />
        </Route>
        <Route path="/mapdemo">
          <MapDemo />
        </Route>
        <Route path="/template">
          <ReactTemplate />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
