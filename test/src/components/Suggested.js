//@flow
// external imports
import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
// internal imports
import { getInfluencers } from '../selectors/selectors';
import { toggleStarred } from '../actions';
//types 
import type { ToggleStarredActionType, StateType, SuggestedPropsType, SuggestedStatePropsType, InfluencerType, SuggestedInfluencerPropsType } from '../flowtypes/flowtypes';

class SuggestedInfluencer extends Component<SuggestedInfluencerPropsType, StateType> {

    render(): * {
        const { toggleStarred, influencer, starredList } = this.props;
        const { instagram_profile_image, name, instagram_username, id } = influencer;
        const instaHandle = (instagram_username) ? `${instagram_username}` : '';

        return (!starredList[influencer.id]) ? (
            <div className="suggested_influencer">
                <img
                    src={instagram_profile_image}
                    alt='profile_pic'
                    className="insta_profile_pic"
                />
                <div className="basic_info">
                    <h1 className="suggested_infname">{name}</h1>
                    <div className="insta_handle">
                        <i className="fab fa-instagram"></i>{instaHandle}
                    </div>
                </div>
                <div className="remove_wrapper"><button className="toggle_button" onClick={ (): ToggleStarredActionType => toggleStarred(id)}>＋</button></div>
            </div>
        ) : '';
    }
}

const mapStateToProps = (state: StateType): SuggestedStatePropsType => ({
    influencers: getInfluencers(state),
    starredList: state.starredList
});

const mapDispatchToProps = {
    toggleStarred,
};

class Suggested extends Component<SuggestedPropsType, StateType> {

    render(): * {
        const { toggleStarred, influencers, starredList } = this.props;
        return (
            <div className="suggested">
                <h1 className="suggested_title">Suggested Influencers</h1>
                <div className="suggested_list">
                    {influencers.map((influencer: InfluencerType, index: number): React$Element<*> =>
                        <SuggestedInfluencer
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
)(Suggested);
