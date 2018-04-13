//@flow
import sortStarred from './sortStarred';
import toggleStarred from './toggleStarred';

const reducerMap = {
  'TOGGLE_STARRED': toggleStarred,
  'SORT_STARRED': sortStarred
}

const influencers = (state: Array = [], action: Object) =>
  (reducerMap[action.type])? reducerMap[action.type](state, action) : state;

export default influencers;
