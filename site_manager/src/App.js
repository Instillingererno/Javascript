import React, { Component } from 'react';
import NativeMenu from 'native-menu';
import './App.css';
import Div from './Containers/Div';

class App extends Component {

    render() {
        return (
            <NativeMenu items={[
                {
                    primary: 'Legg til element',
                    onClick: () => this.addElement(this.selectElement()),
                },
                {
                    primary: 'Vis hierarki',
                    onClick: () => alert('Legg til element ble valgt')
                },
            ]}>
                <Div></Div>
            </NativeMenu>
        );
    }

}

export default App;
