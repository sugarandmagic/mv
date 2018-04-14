//@flow
import React, { Component } from 'react';

class SuggestedInfluencer extends Component {
  render() {
    return (
      <div>
        <img></img>
        <h2 className="suggestedInfName">Hannah Ross</h2>
        <span className="instaHandle"><img className="instaIcon"></img>hross1234</span>
        <button className="addButton" onClick={() => {}}>+</button>
      </div>
    )
  }
}

class Suggested extends Component {
    render() {
        return (
            <div className="suggested">
                <h1 className="suggestedHeader">Suggested Influencers</h1>
                <div className="suggestedList">
                  <SuggestedInfluencer/>
                </div>
            </div>
        );
    }
}

export default Suggested;
