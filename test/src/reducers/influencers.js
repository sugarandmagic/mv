//@flow

import toggleStarred from './toggleStarred';

/**
 * Map of actions to reducers
 */
const mapActionsToReducers = {
    'TOGGLE_STARRED': toggleStarred,
};

/**
 * Influencers reducer - calls the matching subreducer
 *
 * @param {Array}   state   The application state
 * @param {Object}  action  The passed action
 * @return {Array}          The new state or unmodified if no matching reducer
 */
const influencers = (state: Array = [], action: Object): Object =>
    (mapActionsToReducers[action.type]) ? mapActionsToReducers[action.type](state, action) : state;

export default influencers;
