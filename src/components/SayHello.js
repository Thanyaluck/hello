import React, { Component } from 'react';

class SayHello extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div><h1>สวัสดี, {this.props.name}</h1>
            <h2>อายุ, {this.props.age} </h2></div>
        );
    }
}

export default SayHello;