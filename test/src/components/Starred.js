//@flow
import React, { Component } from 'react';
import _ from 'underscore';

class StarredInfluencer extends Component {
    render(): * {
        const { toggleStarred, influencer } = this.props;
        const { instagram_profile_image, name, instagram_username, engagement, followers, id } = influencer;
        return (
            <div>
                <img
                    src={instagram_profile_image}
                    alt="profile_pic"
                    className="instaIcon" />
                <h2 className="suggestedInfName">{name}</h2>
                <div className="instaHandle">
                    {instagram_username}
                </div>
                <div>{followers} Followers</div>
                <div>{engagement}% Engagement</div>
                <button className="removeButton" onClick={ (): void => toggleStarred(id)}>X</button>
            </div>
        );
    }
}



class Starred extends Component {
    render(): * {
        const { toggleStarred, influencers, sortStarred, sortOrder } = this.props;
        const onChange = (e: Event) => {
            sortStarred(e.target.value);
        };
        const sortStarredInfluencers = (starred: Array): Array => {
            if (sortOrder[1] === 'hilo' || undefined) {
                return _.sortBy(starred, sortOrder[0]).reverse();
            } else {
                return _.sortBy(starred, sortOrder[0]);
            }
        };
        const starred = influencers.filter((influencer: Object): Array => { return influencer.starred;});
        const starredInfluencers = sortStarredInfluencers(starred).map((influencer: Object, index: number): Object => <StarredInfluencer key={index} influencer={influencer} toggleStarred={toggleStarred}/>);
        return (
            <div className="suggested">
                <h1 className="suggestedHeader">Starred Influencers</h1>
                <select className="sortFilters" onChange={onChange}>
                    <option value='engagement,hilo'>Engagement (High - Low)</option>
                    <option value='engagement,lohi'>Engagement (Low - High)</option>
                    <option value='followers,hilo'>Followers (High - Low)</option>
                    <option value='followers,lohi'>Followers (Low - High)</option>
                    <option value='name'>Name (A-Z)</option>
                    <option value='instagram_username'>Instagram Username (A-Z)</option>
                </select>
                <div className="starredList">
                    {starredInfluencers}
                </div>
            </div>
        );
    }
}

export default Starred;
