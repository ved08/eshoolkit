import React from "react"
import "./Navbar.css"
import logo from "../../eschoolkit-circled(light).jpg"
const Navbar = (props) => {
   
       return (
          <div className="Navbar">
              <div className="Navbar-Image-Container">
                  <img src={logo} alt="Logo" />
              </div>
              <div className="Navbar-Container">
                    <h4>Features</h4>
                    {props.pf ?
                        <img className="Profile-Pic" src={props.pf}/> : 
                        <h4><a href="/login">Login</a></h4>
                    }
              </div>
          </div>
      )
   
}

export default Navbar