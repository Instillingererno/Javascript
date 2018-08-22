import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

export default class extends Component {

    render() {
        const rows = this.props.children.map((item) => {
            return (
                <Row>
                    { item }
                </Row>
            )
        });

        return (
            <Container>
                { rows }
            </Container> 
        );
    }
}