import React,  { Component } from 'react';
import Auth from "../auth";
import InputData from "./InputData/InputData";
import axios from "axios";

export default class LandingPage extends Component {
    state = {
        name: null,
        email: null,
        uid: null,
        base64Data: null,
        loading: true
    }
    async componentDidMount () {
        await this.storeAuthStatus()
        axios.post('http://localhost:3001/data', {
            uid: this.state.uid
        })
        .then(res => {
            const data = res.data.filter(base64 => base64)
            const format = "data:image/jpg;base64,"
            const base64Data = data.map(encoded => format + encoded)
            this.setState({ base64Data, loading: false })
        })
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
        const images = this.state.loading ? "Wait a sec...Loading" : this.state.base64Data.map((uri, i) => <img src={uri} key={i}/>)
        return(
            <div>
                <h1>Welcome {this.state.name}</h1>
                <h3>{this.state.email}</h3>
                <InputData />
                {images}
            </div>
        );
    }
}