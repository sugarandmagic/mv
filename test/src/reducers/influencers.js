//@flow

import sortStarred from './sortStarred';
import toggleStarred from './toggleStarred';

// const reducerMap = {
//     'TOGGLE_STARRED': toggleStarred,
//     'SORT_STARRED': sortStarred
// };

// const influencers = (state: Array = [], action) =>
//   (reducerMap[action.type])? reducerMap[action.type](state, action) : state;

const influencers = (state: Array = [], action: Object): Array => {
    if (action.type === 'TOGGLE_STARRED') {
        return toggleStarred(state, action);
    }
    if (action.type === 'SORT_STARRED') {
        return sortStarred(state, action);
    }
    return state;
};



export default influencers;
