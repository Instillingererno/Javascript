import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <h1>
                { this.props.text }
            </h1>
        )
    }

    toString() {
        return "Header";
    }
}

export default Header;