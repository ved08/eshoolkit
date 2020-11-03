import { Component } from "react";

import Auth from "../../auth"

class Login extends Component {
    state = {
        auth: false,
        authUID: null 
    }

    render() {
        return(
            <div>
                <button onClick={() => {
                    Auth.login(() => {
                        this.props.history.push('/main')
                    })
                }
                }>Log In with Google</button>
            </div>
        );
    }
}
export default Login