//@flow
import React, { Component } from 'react';

class StarredInfluencer extends Component {
  render() {
    return (
      <div>
        <img></img>
        <h2 className="suggestedInfName">Hannah Ross</h2>
        <div className="instaHandle"><img className="instaIcon"></img>hross1234</div>
        <div>12345 Followers</div>
        <div>6.24% Engagement</div>
        <button className="removeButton" onClick={() => {}}>X</button>
      </div>
    )
  }
}

class Starred extends Component {
    render() {
        return (
          <div className="suggested">
              <h1 className="suggestedHeader">Starred Influencers</h1>
              <select className="sortFilters">
                <option value="engagement hilo">Engagement (High - Low)</option>
                <option value="engagement lohi">Engagement (Low - High)</option>
                <option value="followers hilo">Followers (High - Low)</option>
                <option value="followers lohi">Followers (Low - High)</option>
                <option value="name hilo">Name (A-Z)</option>
                <option value="name lohi">Instagram Username (A-Z)</option>
              </select>
              <div className="suggestedList">
                <StarredInfluencer/>
              </div>
          </div>
        );
    }
}

export default Starred;
