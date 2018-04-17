//@flow
import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import Suggested from './Suggested';
import Starred from './Starred';
import '../index.css';

class App extends Component {
    render(): * {
        return (
            <div className="App">
                <div className="suggestedWrapper"><Suggested /></div>
                <div className="starredWrapper"><Starred /></div>
            </div>
        );
    }
}

export default App;
