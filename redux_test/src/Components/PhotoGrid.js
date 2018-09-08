import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        display: 'grid',
    }
};

class PhotoGrid extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withStyles(styles)(PhotoGrid);