import React,  { Component } from 'react';
import Auth from "../auth"
import InputData from "./InputData/InputData"

export default class LandingPage extends Component {
    state = {
        name: null,
        email: null,
        uid: null
    }
    componentDidMount () {
        this.storeAuthStatus()
    }
    storeAuthStatus = async () => {
        const data = await Auth.onAuthStateChanged();
        this.setState({
            name: data.displayName,
            email: data.email,
            uid: data.uid
        })
    }

    render() {
        return(
            <div>
                <h1>Welcome {this.state.name}</h1>
                <h3>{this.state.email}</h3>
                <InputData />
            </div>
        );
    }
}