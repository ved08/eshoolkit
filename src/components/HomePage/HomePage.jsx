import React, { Component } from "react";
import Auth from "../../auth";
import Navbar from "../Navbar/Navbar";
import "./Homepage.css"
export default class HomePage extends Component {
    state = {
        pf: null
    }
    componentDidMount () {
        this.storeAuthStatus()
    }
    storeAuthStatus = async () => {
        const data = await Auth.onAuthStateChanged();
        this.setState({
            pf: data.pf 
        })
    }
    render() {
        return(
            <div className="HomePage">
                <Navbar pf={this.state.pf}/>
                <div className="HomePage-container">
                    <div className="HomePage-title">
                        <div className="HomePage-main-title">
                            <h1>Eschoolkit</h1>
                            <h3>A storage bucket for students and teachers</h3>
                            <img src="https://cliply.co/wp-content/uploads/2019/08/371908200_SCHOOL_BUS_400px.gif" alt="A Gif"/>
                        </div>
                        <div className="HomePage-content">
                            <h2><q>Quote Here</q></h2>
                            <div className="HomePage-text">
                                <h2>How It Works</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quaerat at porro aliquid esse voluptas modi nobis quod cupiditate. Officia sequi saepe ullam rem corrupti voluptate nulla totam nostrum fugit?</p>
                            </div>
                        </div>
                    </div>
                    <div className="HomePage-hiw">
                    </div>
                </div>
            </div>
        );
    };
}