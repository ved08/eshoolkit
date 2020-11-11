import './App.css';
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./components/HomePage"
import LandingPage from "./components/LandingPage"
import Login from "./components/Login/Login"
import PrivateRoute from "./components/Private/PrivateRoute"
import NotFoundPage from "./components/404Page/404Page"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PrivateRoute component={LandingPage} path="/main" exact/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={Login} />
        <Route path="*" component={NotFoundPage}/>
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
