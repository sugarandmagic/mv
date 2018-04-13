//@flow

import { combineReducers } from 'redux';
<<<<<<< HEAD
import influencers from './influencers';

export default combineReducers({
    influencers
=======
import toggleStarred from './toggleStarred';
import sortStarred from './sortStarred';

export default combineReducers({
    toggleStarred,
    sortStarred,
>>>>>>> a bunch more boilerplate
});
