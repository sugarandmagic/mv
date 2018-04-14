//@flow

/**
 * toggleStarred - toggles the 'starred' field on the selected influencer
 *
 * @param  {Array}  state   The application state
 * @param  {Object} action  The redux action dispatched
 * @return {Array}          The new or unmodified state
 */
const toggleStarred = (state: Array = [], action: Object): Object => {
    if (action.type === 'TOGGLE_STARRED') {
        const influencerIndex = state.findIndex((influencer: Object): number => influencer.influencer_id === action.id);
        if (influencerIndex > -1) {
            Object.assign(state[influencerIndex], {starred: !(state[influencerIndex].starred)});
        }
        return state;
    }
    return state;
};

export default toggleStarred;
