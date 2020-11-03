import './App.css';
import { BrowserRouter, NavLink, Route } from "react-router-dom"

import HomePage from "./components/HomePage"
import LandingPage from "./components/LandingPage"
import Login from "./components/Login/Login"
import PrivateRoute from "./components/Private/PrivateRoute"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PrivateRoute component={LandingPage} path="/main" exact/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={Login} />
        <Route path="*" render={() => "404 Not Found"}/>
        <ul>
          <li><NavLink to="/main">/main</NavLink></li>
          <li><NavLink to="/">/</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </BrowserRouter>
    </div>
  );
}

export default App;
