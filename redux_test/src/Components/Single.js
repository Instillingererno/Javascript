import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {

    }
};

class Single extends Component {


    render() {
        return (
            <div>
                I'm the single!
            </div>
        )
    }
}


export default withStyles(styles)(Single);