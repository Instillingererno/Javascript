import React, { Component } from 'react';

import { Drawer, IconButton, FormControl, FormHelperText, NativeSelect, Button } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';


export default class DrawerWrapper extends Component {

    categories = [
        'Any Category', //Ikke i requesten
        'General Knowledge', //Category=9
        'Entertainment: Books',
        'Entertainment: Film',
        'Entertainment: Music',
        'Entertainment: Musicals & Theatres',
        'Entertainment: Television',
        'Entertainment: Video Games',
        'Entertainment: Board Games',
        'Science & Nature',
        'Science: Computers',
        'Science: Mathematics',
        'Mythology',
        'Sports',
        'Geography',
        'History',
        'Politics',
        'Art',
        'Celebrities',
        'Animals',
        'Vehicles',
        'Entertainment: Comics',
        'Science: Gadgets'
    ]
    difficulty = [
        'Any Difficulty',
        'Easy',
        'Medium',
        'Hard'
    ]
    type = [
        'Any Type',
        'Multiple choice',
        'True / False'
    ]

    selection = {
        cat: 0,
        dif: 0,
        type: 0
    }

    handleChange = name => (event) => {
        this.selection[name] = event.target.value;
    };

    generateRequestURL(catIndex, diffIndex, typeIndex) {
        let url = 'https://opentdb.com/api.php?amount=10';
        if(catIndex) url += '&category=' + (parseInt(catIndex, 10) + 8);
        if(diffIndex) url += '&difficulty=' + this.difficulty[diffIndex].toLowerCase();
        if(typeIndex) url += '&type=' + (typeIndex === 1 ? 'multiple' : 'boolean');
        return url;
    }

    handleGenerateButton = () => {
        let newURL = this.generateRequestURL(this.selection.cat, this.selection.dif, this.selection.type);

        this.props.handleGenerateButton(newURL);
    }

    render() {
        let catOptions = [];
        for(let i = 0; i < this.categories.length; i++) {
            catOptions.push(<option key={i} value={i}>{this.categories[i]}</option>);
        }

        return (
            <Drawer variant='persistent' anchor='left' open={ this.props.open }>
                <IconButton onClick={ this.props.handleDrawerClose }>
                    <ChevronLeft />
                </IconButton>
                <FormControl style={{marginTop:'20px', padding: '10px'}}>
                    <FormHelperText>Category</FormHelperText>
                    <NativeSelect name='cat' onChange={this.handleChange('cat')}>
                        {catOptions}
                    </NativeSelect>
                </FormControl>
                <FormControl style={{marginTop:'20px', padding: '10px'}}>
                    <FormHelperText>Difficulty</FormHelperText>
                    <NativeSelect name='dif' onChange={this.handleChange('dif')}>
                        <option value={0}>Any Difficulty</option>
                        <option value={1}>Easy</option>
                        <option value={2}>Medium</option>
                        <option value={3}>Hard</option>
                    </NativeSelect>
                </FormControl>
                <FormControl style={{marginTop:'20px', padding: '10px'}}>
                    <FormHelperText>Type</FormHelperText>
                    <NativeSelect name='type' onChange={this.handleChange('type')}>
                        <option value={0}>Any Type</option>
                        <option value={1}>Multiple Choice</option>
                        <option value={1}>True / False</option>
                    </NativeSelect>
                </FormControl>
                <Button variant="contained" onClick={ this.handleGenerateButton } color="primary" style={{marginTop:'20px', marginLeft: '10px', marginRight: '10px'}}>
                    Generate Questions
                </Button>
            </Drawer>
        );
    }
}