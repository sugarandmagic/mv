//@flow
import React, { Component } from 'react';

class SuggestedInfluencer extends Component {
    render(): * {
        const { toggleStarred, influencer } = this.props;
        return (
            <div>
                <img
                    src={influencer.influencer_instagram_profile_image}
                    alt='profile_pic'
                    className="instaIcon"
                />
                <h2 className="suggestedInfName">{influencer.influencer_full_name}</h2>
                <div className="instaHandle">{influencer.influencer_instagram_username}</div>
                <button className="addButton" onClick={toggleStarred(influencer.influencer_id, true)}>+</button>
            </div>
        );
    }
}

class Suggested extends Component {
    render(): * {
        const { influencers } = this.props;
        const suggestedInfluencers = influencers.map((influencer: Object, index: number): Object => <SuggestedInfluencer key={index} influencer={influencer}/>);
        return (
            <div className="suggested">
                <h1 className="suggestedHeader">Suggested Influencers</h1>
                <div className="suggestedList">
                    {suggestedInfluencers}
                </div>
            </div>
        );
    }
}

export default Suggested;
