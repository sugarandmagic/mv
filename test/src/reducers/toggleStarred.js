//@flow
//types
import type { ToggleStarredActionType, InfluencersType, InfluencerType } from '../flowtypes/flowtypes';

/**
* toggleStarred - toggles the 'starred' field on the selected influencer
*
* @param  {Array}  state   The application state
* @param  {Object} action  The redux action dispatched
* @return {Array}          The new or unmodified state
*/
const toggleStarred = (state: InfluencersType = [], action: ToggleStarredActionType): InfluencersType => {
    const influencerIndex = state.findIndex((influencer: InfluencerType): boolean => influencer.id === action.id);
    if (influencerIndex > -1) {
        Object.assign(state[influencerIndex], {starred: !(state[influencerIndex].starred)});
    }
    return state;
};

export default toggleStarred;
