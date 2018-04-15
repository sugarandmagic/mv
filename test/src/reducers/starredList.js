//@flow

/**
 * toggleStarred - toggles the 'starred' field on the selected influencer
 *
 * @param  {Array}  state   The application state
 * @param  {Object} action  The redux action dispatched
 * @return {Array}          The new or unmodified state
 */
const starredList = (state: Array = {}, action: Object): Object => {
    if (action.type === 'TOGGLE_STARRED') {
        return Object.assign({}, state, { [action.id]: !state[action.id]});
    }
    return state;
};

export default starredList;
