//@flow
import React, { Component } from 'react';
import Suggested from './Suggested';
import Starred from './Starred';

class App extends Component {
    render(): * {
        return (
            <div className="App">
                <Suggested influencers={this.props.influencers} toggleStarred={this.props.toggleStarred} />
                <Starred influencers={this.props.influencers} toggleStarred={this.props.toggleStarred} />
            </div>
        );
    }
}

export default App;
