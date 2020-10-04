import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactTemplate from '../pages/ReactTemplate';
import Main from '../pages/Main';
import MapDemo from '../pages/MapDemo';
import ThreeJSTest from '../pages/ThreeJSTest';
import Dashboard from '../pages/Dashboard';
import ReactThreeFiber from '../pages/ReactThreeFiber';
import VRDemo from '../pages/VRDemo';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/threejstest">
          <ThreeJSTest />
        </Route>
        <Route path="/reactthreefiber">
          <ReactThreeFiber />
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
