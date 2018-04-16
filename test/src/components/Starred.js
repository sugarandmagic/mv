//@flow
import React, { Component } from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { Dropdown, Menu } from 'semantic-ui-react'
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
        const instaHandle = (instagram_username) ? `${instagram_username}` : '';
        return (starredList[influencer.id]) ? (
            <div className="wrapper">
                <div className="starredInfluencer">
                    <img
                        src={instagram_profile_image}
                        alt="profile_pic"
                        className="instaProfilePic" />
                    <div className="rightInfo">
                        <h1 className="suggestedInfName">{name}</h1>
                        <div className="instaHandle">
                            <i src="https://www.shareicon.net/data/128x128/2016/07/09/118293_instagram_512x512.png" className="instaIcon"/>{instaHandle}
                        </div>
                    </div>
                    <div className="stats">
                        <div className="followers"><div className="stat">{followers.toLocaleString()}</div><div className="statLabel">Followers</div></div>
                        <div className="engagement"><div className="stat">{engagement}%</div><div className="statLabel">Engagement</div></div>
                    </div>
                </div>
                <div className="removeWrapper"><button className="removeButton" onClick={ (): void => onClick(id)}>✕</button></div>
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

        const options = [
            {key: 1, value: 'engagement,hilo', text: 'Engagement (High - Low)'},
            {key: 2, value: 'engagement,lohi', text: 'Engagement (Low - High)'},
            {key: 3, value: 'followers,hilo', text: 'Followers (High - Low)'},
            {key: 4, value: 'followers,lohi', text: 'Followers (Low - High)'},
            {key: 5, value: 'name', text: 'Name (A-Z)'},
            {key: 6, value: 'nstagram_username', text: 'Instagram Username (A-Z)'}
        ]
        return (
            <div className="starred">
                <div className="starredHeader">
                    <h1 className="starredTitle">Starred Influencers</h1>
                    <div className="sorter">
                        <div className="sorterLabel">Sort By:</div>
                        <Menu compact>
                            <Dropdown text='Dropdown' className="sortFilters" onChange={onChange} options={options} simple item/>
                        </Menu>
                    </div>
                </div>
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
