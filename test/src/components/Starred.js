//@flow
import React, { Component } from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { getInfluencers, getSortOrder, getStarredList } from '../selectors/selectors';
import { toggleStarred, sortStarred, influencerFetchRequested } from '../actions';
import '../index.css';

class StarredInfluencer extends Component {

    render(): * {

        const { toggleStarred, influencer, starredList } = this.props;
        const onClick = (id: string) => {
            toggleStarred(id);
        };

        const { instagram_profile_image, name, instagram_username, engagement, followers, id } = influencer;
        const instaHandle = (instagram_username) ? `@${instagram_username}` : '';
        return (starredList[influencer.id]) ? (
            <div>
                <img
                    src={instagram_profile_image}
                    alt="profile_pic"
                    className="instaIcon" />
                <h2 className="suggestedInfName">{name}</h2>
                <div className="instaHandle">
                    {instaHandle}
                </div>
                <div>{followers} Followers</div>
                <div>{engagement}% Engagement</div>
                <button className="removeButton" onClick={ (): void => onClick(id)}>X</button>
            </div>
        ) : '';
    }
}

const mapStateToProps = (state: Object = {}): Object => ({
    influencers: getInfluencers(state),
    sortOrder: getSortOrder(state),
    starredList: getStarredList(state)
});

const mapDispatchToProps = {
    toggleStarred,
    sortStarred,
    influencerFetchRequested,
};

class Starred extends Component {

    componentWillMount() {
        this.props.influencerFetchRequested();
    }

    render(): * {
        const { toggleStarred, influencers, sortStarred, sortOrder, starredList } = this.props;
        
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
        return (
            <div className="starred">
                <h1 className="starredHeader">Starred Influencers</h1>
                <select className="sortFilters" onChange={onChange}>
                    <option value='engagement,hilo'>Engagement (High - Low)</option>
                    <option value='engagement,lohi'>Engagement (Low - High)</option>
                    <option value='followers,hilo'>Followers (High - Low)</option>
                    <option value='followers,lohi'>Followers (Low - High)</option>
                    <option value='name'>Name (A-Z)</option>
                    <option value='instagram_username'>Instagram Username (A-Z)</option>
                </select>
                <div className="starredList">
                    {sortStarredInfluencers(influencers).map((influencer: Object, index: number): Object => <StarredInfluencer key={index} influencer={influencer} toggleStarred={toggleStarred} starredList={starredList} />)}
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Starred);
