//@flow
import { put } from 'redux-saga/effects'

const flattenResponse = () => {
    //this will be a function to flatten out the data into the model demonstrated in the initialState
}

/**
 * 
 */
function* fetchInfluencers(action: Object): Iterator<*> {
    const starredResponse = yield fetch('path-to-starred-influencers');
    const starredJson = flattenResponse(yield starredResponse.json());
    const suggestedResponse = yield fetch('path-to-suggested-influencers');
    const suggestedJson = flattenResponse(yield suggestedResponse.json());
    yield put('INFLUENCER_FETCH_SUCEEDED');
}

export default fetchInfluencers;
