import React, { Component, Fragment } from 'react';

import { AppBar, Typography, Toolbar, IconButton, Card, CardContent } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import GridWrapper from './GridWrapper';
import DrawerWrapper from './DrawerWrapper';
import ItemWrapper from './ItemWrapper';


class App extends Component {

    startURL = 'https://opentdb.com/api.php?amount=10';

    i = 0;

    constructor(props) {
        super(props);
        this.state = {
            url: this.startURL,
            open: false,
            questions: [],
        }
    }

    getQuestions(url) {
        console.log('Getting questions with url: ' + url);
        let api = url || this.state.url;

        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", api, false);
        xmlHttp.send(null);

        let questionJSON = JSON.parse(xmlHttp.responseText);

        return questionJSON;
    }

    youtubeTest() {
        let api = 'https://www.youtube.com/watch?v=FaHHWdsIYQg';
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', api, false);
        console.log('Youtube response');
        console.log(xmlHttp.response);
    }

    componentDidMount() {
        //this.youtubeTest();
        console.log('Component mounted');
        let newQuestions = this.getQuestions(this.startURL).results;
        this.setState({questions: newQuestions});
    }

    handleDrawerOpen = () => {
        console.log('Opening drawer');
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        console.log('Closing drawer');
        this.setState({ open: false });
    };

    handleGenerateButton = (newURL) => {
        console.log("Knappen ble trykket");
        let newQuestions = this.getQuestions(newURL).results;
        this.setState({open: false, url: newURL, questions: []});
        this.setState({open: false, url: newURL, questions: newQuestions});
    }

    fetchMoreQuestions = () => {
        console.log('Fetching more questions');
        let newQuestions = this.getQuestions(this.state.url).results;
        console.log(newQuestions);
        this.setState({ questions: this.state.questions.concat(newQuestions) });
    }

    render() {

        const questions = this.state.questions ? this.state.questions.map((item) => {
            this.i++;
            return <ItemWrapper item={ item } key={ this.i } />
        }) : <Card><CardContent><Typography variant='title'>No questions loaded</Typography></CardContent></Card>;


        return (
            <Fragment>
                <AppBar>
                    <Toolbar>
                        <IconButton color='inherit' aria-label='Menu'>
                            <MenuIcon onClick={ this.handleDrawerOpen }/>
                        </IconButton>
                        <Typography variant='title' color='inherit'>
                            Quiz
                        </Typography>
                    </Toolbar>
                </AppBar>

                <DrawerWrapper open={ this.state.open } handleGenerateButton={ this.handleGenerateButton } handleDrawerClose={ this.handleDrawerClose } />

                <GridWrapper handleButtonClick={ this.fetchMoreQuestions }>
                    { questions }
                </GridWrapper>

            </Fragment>
        );
    }
}

export default App;
