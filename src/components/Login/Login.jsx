import React, { Component } from "react";
import { FcGoogle } from "react-icons/fc"
import { VscGithub } from "react-icons/vsc"
import "./Login.css"

import Auth from "../../auth"

class Login extends Component {
    state = {
        auth: false,
        authUID: null 
    }

    render() {
        return(
            <div className="Login">
                <h1>Login</h1>
                <div className="Third-Party-Auth">
                <div style={{
                    paddingTop: "40px"
                }}>
                    <button style={{
                        color: "#757575",
                        backgroundColor: "white",
                        padding: 10,
                        fontSize: "17px",
                        border: "none",
                        boxShadow: "0.5px 0.5px 10px 0px grey"
                    }} onClick={() => {
                        Auth.loginWithGoogle(() => {
                            this.props.history.push('/main')
                        })
                    }
                    }><FcGoogle style={{fontSize: 24.5}}/><span style={{marginLeft: "20px"}}/> Login with Google</button>
                </div>
                <div style={{
                    marginTop: 20,
                    marginBottom: 20
                }}>
                    <button style={{
                        backgroundColor: "#24292E",
                        padding: 10,
                        fontSize: "17px",
                        color: "white",
                        border: "none",
                        boxShadow: "0.5px 0.5px 10px 0px grey"
                    }} onClick={() => {
                        Auth.loginWithGithub(() => {
                            this.props.history.push('/main')
                        })
                    }
                    }><VscGithub style={{color: "white", fontSize: 25}}/><span style={{marginLeft: "20px"}}/> Login with Github</button>
                </div>
                </div>
                <form onSubmit={e => e.preventDefault()} className="Login-With-Password">
                    <div className="email container">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="email"/>
                    </div>
                    <div className="password container">
                        <label for="password">Password</label>
                        <input type="password" id="email" placeholder="password"/>
                    </div>
                    <input type="submit" value="Login"/>
                </form>
                <p>Don't have a account, <a href="/signup">signup</a></p>
            </div>
        );
    }
}
export default Login