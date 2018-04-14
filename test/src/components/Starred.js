//@flow
import React, { Component } from 'react';

class StarredInfluencer extends Component {
    render(): * {
        const { toggleStarred, influencer } = this.props;
        return (
            <div>
                <img
                    src={influencer.influencer_instagram_profile_image}
                    alt="profile_pic"
                    className="instaIcon" />
                <h2 className="suggestedInfName">{influencer.influencer_full_name}</h2>
                <div className="instaHandle">
                    {influencer.influencer_instagram_username}
                </div>
                <div>{influencer.statistics.followers} Followers</div>
                <div>{influencer.statistics.engagement}% Engagement</div>
            <button className="removeButton" onClick={ () => toggleStarred(influencer.influencer_id, false)}>X</button>
            </div>
        );
    }
}


class Starred extends Component {
    render(): * {
        const { toggleStarred, influencers } = this.props;
        const starredInfluencers = influencers.map((influencer: Object, index: number): Object => <StarredInfluencer key={index} influencer={influencer} toggleStarred={toggleStarred}/>);
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
                <div className="starredList">
                    {starredInfluencers}
                </div>
            </div>
        );
    }
}

export default Starred;
