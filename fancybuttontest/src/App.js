import React, { Component } from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';


const styles = {
    connected: {
        backgroundColor: 'green',
        color: 'white',
        fontSize: 20,
        position: 'absolute',
        left: 0,
        zIndex: 2,
        width: 200,
        lineHeight: '20px',
    },
    removeVP: {
        backgroundColor: 'red',
        color: 'white',
        fontSize: 20,
        position: 'absolute',
        left: 0,
        zIndex: 1,
        width: 200,
        lineHeight: '20px',
    },
    icon: {
        backgroundColor: 'red',
        color: 'white',
        fontSize: 20,
        position: 'absolute',
        left: 200
    }
};

class App extends Component {
  render() {
      const { classes } = this.props;
        return (
            <Button>
                <div className={classes.connected}>
                    <p>{"Tilknyttet"}</p>
                </div>
                <div className={classes.removeVP}>
                    <p>{"Fjerne VP?"}</p>
                </div>
                <div className={classes.icon}>
                    <ClearIcon />
                </div>
            </Button>
        );
  }
}

export default withStyles(styles)(App);
