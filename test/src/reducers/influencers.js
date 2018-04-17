//@flow
// internal modules
import toggleStarred from './toggleStarred';
//types
import type { InfluencersType, ActionType } from '../flowtypes/flowtypes';

/**
 * Map of actions to reducers
 */
const mapActionsToReducers = {
    'TOGGLE_STARRED': toggleStarred,
    'INFLUENCER_FETCH_SUCCEEDED': (action: ActionType): InfluencersType => action.influencers,
};

/**
 * Influencers reducer - calls the matching subreducer
 *
 * @param {Array}   state   The application state
 * @param {Object}  action  The passed action
 * @return {Array}          The new state or unmodified if no matching reducer
 */
const influencers = (state: InfluencersType = [], action: ActionType): InfluencersType =>
    (mapActionsToReducers[action.type]) ? mapActionsToReducers[action.type](state: InfluencersType, action: ActionType) : state;

export default influencers;