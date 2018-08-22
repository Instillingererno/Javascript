import React, { Component, Fragment } from 'react';
import { Col } from 'reactstrap';

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Col sm='0' lg='2' />
                <Col>
                    {this.props.children}
                </Col>
                <Col sm='0' lg='2' />
            </Fragment>
        );
    }
}