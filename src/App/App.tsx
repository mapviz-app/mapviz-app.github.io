import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactTemplate from '../pages/ReactTemplate';
import DevMenu from '../pages/DevMenu';
import MapDemo from '../pages/MapDemo';
import ThreeJSTest from '../pages/ThreeJSTest';
import Dashboard from '../pages/Dashboard';
import ReactThreeFiber from '../pages/ReactThreeFiber';
import VRDemo from '../pages/VRDemo';
import InspectLocation from '../pages/InspectLocation';
import Main from '../pages/Main';

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
        <Route path="/location">
          <InspectLocation />
        </Route>
        <Route path="/template">
          <ReactTemplate />
        </Route>
        <Route path="/dev">
          <DevMenu />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
