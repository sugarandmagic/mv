//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInfluencers } from '../selectors/selectors';
import { toggleStarred } from '../actions';

class SuggestedInfluencer extends Component {

    render(): * {
        const { toggleStarred, influencer, starredList } = this.props;
        const { instagram_profile_image, name, instagram_username, id } = influencer;
        const instaHandle = (instagram_username) ? `@${instagram_username}` : '';
        return (!starredList[influencer.id]) ? (
            <div>
                <img
                    src={instagram_profile_image}
                    alt='profile_pic'
                    className="instaProfilePic"
                />
                <h2 className="suggestedInfName">{name}</h2>
                <div className="instaHandle">{instaHandle}</div>
                <button className="addButton" onClick={(): void => toggleStarred(id)}>+</button>
            </div>
        ) : '';
    }
}

const mapStateToProps = (state: Object = {}): Object => ({
    influencers: getInfluencers(state),
    starredList: state.starredList
});

const mapDispatchToProps = {
    toggleStarred,
};

class Suggested extends Component {

    render(): * {
        const { toggleStarred, influencers, starredList } = this.props;
        return (
            <div className="suggested">
                <h1 className="suggestedHeader">Suggested Influencers</h1>
                <div className="suggestedList">
                    {influencers.map((influencer: Object, index: number): Object => <SuggestedInfluencer key={index} influencer={influencer} toggleStarred={toggleStarred} starredList={starredList} />)}
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Suggested);
