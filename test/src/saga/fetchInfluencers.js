//@flow
//external modules
import { call, put, takeLatest } from 'redux-saga/effects';
//internal modules
import starredData from '../exampleData/starred_influencers.json';
import suggestedData from '../exampleData/suggested_influencers.json';
//types
import { InfluencersType, RawInfluencerType } from '../flowtypes/flowtypes';

/**
* fetchInfluencers - saga to handle the external fetch of influencers data from two endpoints
* @param  {ActionType} action Redux action to listen for
* @return {void}
*/
function* fetchInfluencers(): Iterator<*> {
    try {
        const influencersStarred = yield call(fetchInfluencersData, 'starred');
        const influencersSuggested = yield call(fetchInfluencersData, 'suggested');
        const influencers = transformInfluencersData(influencersStarred, influencersSuggested);
        yield put({type: 'INFLUENCER_FETCH_SUCCEEDED', influencers: influencers});
    } catch (e) {
        yield put({type: 'INFLUENCER_FETCH_FAILED', message: e.message});
    }
}

/**
* transformInfluencersData - saga to handle the external fetch of influencers data from two endpoints
* @param  {Array} starred Fetched data from the Starred endpoint
* @param  {Array} suggested Fetched data from the Suggested endpoint
* @return {InfluencersType} Flattened and transformed data ready to be consumed by the application
*/
const transformInfluencersData = (starred: Array<RawInfluencerType>, suggested: Array<RawInfluencerType>): InfluencersType => {
    // Ideally I wanted to transform the data here to shorten object keys,
    // flatten the 'statistics' object and to add the 'starred' flag.
    // Normally I would have used Immutable for this whole project and transformed the data into Records,
    // but because of time constraints I have manually edited the data at source and faked the fetch.
    return starred.concat(suggested);
};


const fakeFetch = async (data: *): Array<RawInfluencerType> => await data.data;

/**
* fetchInfluencersData - async function to get data from either endpoint
* @param  {string} type Whether Starred or Suggested data
* @return {Promise<Array>} Response from fetch
*/
const fetchInfluencersData = async (type: string): InfluencersType => (type === 'starred') ?
    await fakeFetch(starredData) : await fakeFetch(suggestedData);

/**
 * Watch function for saga
 */
function* fetchInfluencersSaga(): void {
    yield takeLatest('INFLUENCER_FETCH_REQUESTED', fetchInfluencers);
}

export default fetchInfluencersSaga;