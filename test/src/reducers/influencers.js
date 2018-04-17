//@flow
// internal modules
import toggleStarred from './toggleStarred';
//types
import type { InfluencersType, InfluencerFetchSuccessActionType } from '../flowtypes/flowtypes';

/**
 * Map of actions to reducers
 */
const mapActionsToReducers = {
    'TOGGLE_STARRED': toggleStarred,
    'INFLUENCER_FETCH_SUCCEEDED': (action: InfluencerFetchSuccessActionType): InfluencersType => action.influencers,
};

/**
 * Influencers reducer - calls the matching subreducer
 *
 * @param {Array}   state   The application state
 * @param {Object}  action  The passed action
 * @return {Array}          The new state or unmodified if no matching reducer
 */
const influencers = (state: InfluencersType = [], action: {[key: string]: *}): InfluencersType =>
    (mapActionsToReducers[action.type]) ? mapActionsToReducers[action.type](state, action) : state;

export default influencers;