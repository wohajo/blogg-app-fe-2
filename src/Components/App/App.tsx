import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from '../Pages/ErrorPage';
import LandingPage from '../Pages/LandingPage';
import PostsPage from '../Pages/PostsPage';
import './App.css';
import PostsByUserPage from '../Pages/PostsByUserPage';
import SearchPage from '../Pages/SearchPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/Posts" component={PostsPage} exact/>
        <Route path="/Search" component={SearchPage} exact/>
        <Route path="/Posts/User/:userId" component={PostsByUserPage} exact/>
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
