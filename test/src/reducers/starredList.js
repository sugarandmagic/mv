//@flow
//types
import type { StarredListActionType, StarredListType } from '../flowtypes/flowtypes';

/**
 * toggleStarred - toggles the 'starred' field on the selected influencer
 *
 * @param  {Array}  state   The application state
 * @param  {Object} action  The redux action dispatched
 * @return {Array}          The new or unmodified state
 */
const starredList = (state: StarredListType, action: StarredListActionType): StarredListType => {
    if (action.type === 'TOGGLE_STARRED' && typeof action.id === 'number') {
        return Object.assign({}, state, { [action.id]: !state[action.id]});
    }
    return state;
};

export default starredList;
