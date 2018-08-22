import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// =========================================================================================================

class GridWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    gridElements: Array(12).fill()
                }
            ]
        }
    }
    render() {
        return (
            <div className="gridWrapper">
                {this.state.history.lastElement().gridElements}
            </div>
        )
    };
}

class GridElement extends React.Component {
    constructor(props, w, h) {
        super(props);
        this.state = {
            width: w,
            height: h,
        }
    }

    render() {
        let style = "grid-column: span "+this.state.width +
                    ", grid-row: span "+this.state.height;

        return (
            <div className="gridElement" style={style}>
            </div>
        )
    }
}


// =========================================================================================================

Array.prototype.lastElement = function() {
    return this[this.length-1];
};

// =========================================================================================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

