//@flow

import sortStarred from './sortStarred';
import toggleStarred from './toggleStarred';

/**
 * Map of actions to reducers
 */
const mapActionsToReducers = {
    'TOGGLE_STARRED': toggleStarred,
    'SORT_STARRED': sortStarred
};

/**
 * Influencers reducer - calls the matching subreducer
 * 
 * @param {Array}   state   The application state
 * @param {Object}  action  The passed action
 * @return {Array}          The new state or unmodified if no matching reducer
 */
const influencers = (state: Array = [], action) =>
  (mapActionsToReducers[action.type]) ? mapActionsToReducers[action.type](state, action) : state;

export default influencers;
