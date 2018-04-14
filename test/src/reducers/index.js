//@flow

import { combineReducers } from 'redux';
import influencers from './influencers';
import sortOrder from './sortOrder';

export default combineReducers({
    influencers,
    sortOrder,
});
