import React, { Component, Fragment } from 'react';
import { Card, CardContent, Typography, Divider, Button, List, ListItem, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = {
    green: {
        backgroundColor: '#a5ffbf',
    }
}

class ItemWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            revealed: false,
            alternatives: this.shuffleArray(this.props.item.incorrect_answers.concat(this.props.item.correct_answer)),
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
        }
        return array;
    }

    alternatives(item) {
        let i = 0;

        const alternatives = this.state.alternatives.map((alt) => {
            const classes = alt === item.correct_answer ? (this.state.revealed ? this.props.classes.green : '') : '';
            i++
            return (
                <ListItem key={i} divider className={classes}>
                    <ListItemText primary={ alt } />
                </ListItem>
            )
        })
        return alternatives;
    }

    truefalse() {
        let classes = this.state.revealed ? this.props.classes.green : '';
        return this.props.item.correct_answer === 'True' ? (
            <Fragment>
                <Divider />
                <ListItem className={ classes }>
                    <ListItemText primary='True' />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary='False' />
                </ListItem>
                <Divider />
            </Fragment>
        ) : (
            <Fragment>
                <Divider />
                <ListItem>
                    <ListItemText primary='True' />
                </ListItem>
                <Divider />
                <ListItem className={ classes }>
                    <ListItemText primary='False' />
                </ListItem>
                <Divider />
            </Fragment>
        ) 
    }

    handleReveal() {
        console.log('Revealing answer: ' + this.props.item.correct_answer);
        this.setState({ revealed: true });
    }

    render() {
        const item = this.props.item;

        const alternatives = this.props.item.type === 'multiple' ? this.alternatives(this.props.item) : this.truefalse();

        return (
            <Card>
                <CardContent>
                    <Typography color='textSecondary' variant='title' style={{ fontSize:'14px' }}>
                        { item.category }
                    </Typography>
                    <Typography color='textSecondary' variant='title' style={{ fontSize:'14px' }}>
                        { item.difficulty }
                    </Typography>
                    <Typography variant="headline" component="h2" dangerouslySetInnerHTML={{__html: item.question}}>
                    </Typography>
                    <List style={{ marginTop:'10px' }}>
                        <Divider />
                        { alternatives }
                    </List>
                    <Button variant='outlined' color='primary' style={{ width:'100%' }} onClick={ this.handleReveal.bind(this) }>
                        Reveal answer
                    </Button>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(ItemWrapper);