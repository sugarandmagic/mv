//@flow
import { call, put, takeLatest } from 'redux-saga/effects'
import starredData from '../exampleData/starred_influencers.json';
import suggestedData from '../exampleData/suggested_influencers.json';


function* fetchInfluencers(action: Object): Iterator<*> {
    try {
        const influencersStarred = yield call(fetchInfluencersData, 'starred');
        const influencersSuggested = yield call(fetchInfluencersData, 'suggested');
        const influencers = transformInfluencersData(influencersStarred, influencersSuggested);
        yield put({type: 'INFLUENCER_FETCH_SUCCEEDED', influencers: influencers});
    } catch (e) {
        yield put({type: 'INFLUENCER_FETCH_FAILED', message: e.message});
    }
}

const transformInfluencersData = (starred: Array, suggested: Array): Array => {
    // Ideally I wanted to transform the data here to shorten object keys,
    // flatten the 'statistics' object and to add the 'starred' flag.
    // Normally I would have used Immutable for this whole project and transformed the data into Records,
    // but because of time constraints I have manually edited the data at source and faked the fetch.
    return starred.concat(suggested);
};

const fakeFetch = async (data) => await data.data;


const fetchInfluencersData = async (type: string) => (type === 'starred') ?
    await fakeFetch(starredData) : await fakeFetch(suggestedData);


function* fetchInfluencersSaga() {
    yield takeLatest('INFLUENCER_FETCH_REQUESTED', fetchInfluencers);
}

export default fetchInfluencersSaga;