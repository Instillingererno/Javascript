import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = {
    root: {
        display: 'grid',
        gridGap: '10px',
        width: '600px',
        marginTop: '70px',
        marginLeft: 'auto',
        marginRight: 'auto',
        gridTemplateColumns: '600px',
        
        '@media only screen and (max-width: 600px)': {
            gridTemplateColumns: '1fr',
            width: '100%',
        },
    }
}

class GridWrapper extends Component {

    render() {
        let i = 0;
        let children = (this.props.children instanceof Array) ? this.props.children.map((item) => {
            i++;
            return <div key={i}>{ item }</div>
        }) : <div>{ this.props.children }</div>;

        return (
            <div className={ this.props.classes.root }>
                { children }
                <Button variant="contained" onClick={ this.props.handleButtonClick } color="primary">
                    Fetch more questions
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(GridWrapper);