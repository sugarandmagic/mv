//@flow
// external imports
import React, { Component } from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';
// internal imports
import { getInfluencers, getSortOrder, getStarredList } from '../selectors/selectors';
import { toggleStarred, sortStarred, influencerFetchRequested } from '../actions';

class StarredInfluencer extends Component {

    render(): * {
        const { toggleStarred, influencer, starredList } = this.props;

        const onClick = (id: string) => {
            toggleStarred(id);
        };

        const { instagram_profile_image, name, instagram_username, engagement, followers, id } = influencer;
        const instaHandle = (instagram_username) ? `${instagram_username}` : '';
        const followerCount = (followers) ? `${followers.toLocaleString()}` : 0;
        const engagementLevel = (engagement) ? `${engagement}` : 0;
        return (starredList[influencer.id]) ? (
            <div className="starred_wrapper">
                <div className="starred_influencer">
                    <img
                        src={instagram_profile_image}
                        alt="profile_pic"
                        className="insta_profile_pic" />
                    <div className="basic_info">
                        <h1 className="suggested_infname">{name}</h1>
                        <div className="insta_handle">
                            <i className="fab fa-instagram"></i>{instaHandle}
                        </div>
                    </div>
                    <div className="stats">
                        <div className="followers"><div className="stat">{followerCount}</div><div className="statLabel">Followers</div></div>
                        <div className="engagement"><div className="stat">{engagementLevel}%</div><div className="statLabel">Engagement</div></div>
                    </div>
                </div>
                <div className="remove_wrapper"><button className="toggle_button" onClick={ (): void => onClick(id)}>✕</button></div>
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

        const onChange = (eventKey: string) => {
            sortStarred(eventKey);
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
                <div className="starred_header">
                    <h1 className="starred_title">Starred Influencers</h1>
                    <div className="sorter">
                        <div className="sorter_label">Sort By:</div>
                        <div className="sorter_wrapper">
                            <DropdownButton id="select" title="Select Filter" onSelect={onChange}>
                                <MenuItem id="1" eventKey="engagement,hilo">Engagement (High - Low)</MenuItem>
                                <MenuItem id="2" eventKey="engagement,lohi">Engagement (Low - High)</MenuItem>
                                <MenuItem id="3" eventKey="followers,hilo">Followers (High - Low)</MenuItem>
                                <MenuItem id="4" eventKey="followers,lohi">Followers (Low - High)</MenuItem>
                                <MenuItem id="5" eventKey="name">Name (A-Z)</MenuItem>
                                <MenuItem id="6" eventKey="instagram_username">Instagram Username (A-Z)</MenuItem>
                            </DropdownButton>
                        </div>
                    </div>
                </div>
                <div className="starred_list">
                    {sortStarredInfluencers(influencers).map((influencer: Object, index: number): Object =>
                        <StarredInfluencer
                            key={index}
                            influencer={influencer}
                            toggleStarred={toggleStarred}
                            starredList={starredList}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Starred);
