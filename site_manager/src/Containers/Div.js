import React, { Component } from 'react';
import NativeMenu from 'native-menu';
import Header from '../Endpoints/Header';

class Div extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            children: [],
            hierarki: "Div"
        }
        console.log(this);
    }
    
    render() {
        return (
            <NativeMenu items={[
                {
                  primary: 'Print hierarki to console',
                  onClick: () => this.toString(),
                },
                {
                  primary: 'Add header',
                  onClick: () => this.addComponent('header'),
                },
              ]}>
                <div id='page-wrapper'>
                    { this.state.children }
                </div>
            </NativeMenu>
        )
    }

    toString() {
        console.log(this.state.hierarki);
    }

    addComponent(componentName) {
        switch(componentName) {
            case 'header': this.setState({children: this.state.children.push(<Header key={this.state.children.length} text="Dette er en Header"/>), hierarki: this.state.hierarki + "\n\tHeader"})
            console.log(this.state.children)
            break;
        }
    }
}

export default Div