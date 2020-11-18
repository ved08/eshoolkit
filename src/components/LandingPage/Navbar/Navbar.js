import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <div>
                <img src="./eschoolkit-circled(light).jpg" />
            </div>
            <div>
                <ul>
                    <li>Features</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar