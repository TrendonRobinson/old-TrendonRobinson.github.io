import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Projects from './Pages/Projects'
import Home from './Pages/Home'

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "projects", element: <Projects /> }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;