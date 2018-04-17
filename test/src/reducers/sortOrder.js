//@flow
//types
import { ActionType } from '../flowtypes/flowtypes';

/**
 * sortStarred reducer - a key for sorting the starred influencers
 *
 * @param  {Array}  state    The application state
 * @param  {Object} action   The redux action dispatched
 * @return {Array}           The new or unmodified state
 */
const sortStarred = (state: Array<string> = [], action: ActionType): Array<string> => {
    if (action.type === 'SORT_STARRED') {
        return (action.sortKey) ? action.sortKey.split(',') : [];
    }
    return state;
};

export default sortStarred;
