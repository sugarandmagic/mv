//@flow

import { combineReducers } from 'redux';
import influencers from './influencers';
import sortOrder from './sortOrder';
import starredList from './starredList';

export default combineReducers({
    influencers,
    sortOrder,
    starredList
});
