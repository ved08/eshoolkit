import React from "react"
import "./Navbar.css"
import logo from "../../eschoolkit-circled(light).jpg"
import Auth from "../../auth"
const Navbar = (props) => {
   
       return (
          <div className="Navbar">
              <div className="Navbar-Image-Container">
                  <img src={logo} alt="Logo" />
              </div>
              <div className="Navbar-Container">
                    <h4>Features</h4>
                    {props.pf ? <img className="Profile-Pic" src={props.pf}/> : "Login"}
              </div>
          </div>
      )
   
}

export default Navbar