import React from 'react'
import './App.css';
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./components/HomePage/HomePage"
import LandingPage from "./components/LandingPage/LandingPage"
import Login from "./components/Login/Login"
import PrivateRoute from "./components/Private/PrivateRoute"
import PublicRoute from "./components/Private/PublicRoute"
import NotFoundPage from "./components/404Page/404Page"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PrivateRoute component={LandingPage} path="/main" exact/>
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <Route exact path="/" component={HomePage}/>
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <ul style={{marginBottom: 0, padding: 0}}>
          <li><h4>The below area is for experimenting. This wont be included in production</h4></li>
          <li><NavLink to="/main">/main</NavLink></li>
          <li><NavLink to="/">/</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
