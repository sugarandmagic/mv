//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInfluencers } from '../selectors/selectors';
import { toggleStarred } from '../actions';

class SuggestedInfluencer extends Component {

    render(): * {
        const { toggleStarred, influencer, starredList } = this.props;
        const { instagram_profile_image, name, instagram_username, id } = influencer;
        const instaHandle = (instagram_username) ? `${instagram_username}` : '';

        return (!starredList[influencer.id]) ? (
            <div className="suggestedInfluencer">
                <img
                    src={instagram_profile_image}
                    alt='profile_pic'
                    className="instaProfilePic"
                />
                <div className="basicInfo">
                    <h1 className="suggestedInfName">{name}</h1>
                    <div className="instaHandle">
                        <i className="fab fa-instagram"></i>{instaHandle}
                    </div>
                </div>
                <div className="removeWrapper"><button className="toggleButton" onClick={ (): void => toggleStarred(id)}>＋</button></div>
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
                <h1 className="suggestedTitle">Suggested Influencers</h1>
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
