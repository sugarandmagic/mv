//@flow
import React, { Component } from 'react';
import Suggested from './Suggested';
import Starred from './Starred';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Suggested />
                <Starred />
            </div>
        );
    }
}

export default App;
