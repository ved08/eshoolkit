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
                <p className="Login-Page-Title">Login</p>
                <form onSubmit={e => e.preventDefault()} className="Login-With-Password">
                    <div>
                        <h5><label for="email">Email</label></h5>
                        <input type="email" id="email"/>
                    </div>
                    <div>
                        <h5><label for="password">Password</label></h5>
                        <input type="password" id="email"/>
                    </div>
                    <input type="submit" value="Continue"/>
                </form>
                <p>Don't have a account, <a href="/signup">signup</a></p>
                <h6><span>Or</span></h6>
                <div className="Third-Party-Auth">
                <div style={{
                    paddingTop: 45
                }}>
                    <button style={{
                        color: "#757575",
                        backgroundColor: "white",                                                                                                
                    }} onClick={() => {
                        Auth.loginWithGoogle(() => {
                            this.props.history.push('/main')
                        })
                    }
                    }><FcGoogle style={{fontSize: 24.5}}/><span/> Login with Google</button>
                </div>
                {/* <div style={{
                    marginTop: 20,
                    marginBottom: 20
                }}>
                    <button style={{
                        backgroundColor: "#24292E",                                                
                        color: "white",
                        marginTop: 25
                    }} onClick={() => {
                        Auth.loginWithGithub(() => {
                            this.props.history.push('/main')
                        })
                    }
                    }><VscGithub style={{color: "white", fontSize: 25}}/><span/> Login with Github</button>
                </div> */}
                </div>
            </div>
        );
    }
}
export default Login