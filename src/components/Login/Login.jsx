import { Component } from "react";
import { FcGoogle } from "react-icons/fc"

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
                }><FcGoogle/> Login with Google</button>
            </div>
        );
    }
}
export default Login