import React, { Component } from 'react';

class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: this.props.notifications || []
        }
    }

    render() {

    }

    addNotification(notification) {
        this.setState({notifications: this.state.notifications.push(notification)});
    }
}