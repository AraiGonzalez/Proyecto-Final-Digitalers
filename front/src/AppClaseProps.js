import React, { Component } from "react";


export default class AppClaseProps extends Component {


    render() {
        return (
        <>
            <h4>{this.props.title}</h4>
            <h6>{this.props.body}</h6>

        </>
        );
    }
}