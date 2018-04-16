//@flow
import { call, put, takeLatest } from 'redux-saga/effects'
import fetch from 'node-fetch';

function* fetchInfluencers(action: Object): Iterator<*> {
    try {
        const influencersStarred = yield call(fetchInfluencersData('starred'));
        const influencersSuggested = yield call(fetchInfluencersData('suggested'));
        const influencers = transformInfluencersData(influencersStarred, influencersSuggested);
        yield put({type: 'INFLUENCER_FETCH_SUCEEDED', influencers: influencers});
    } catch (e) {
        yield put({type: 'INFLUENCER_FETCH_FAILED', message: e.message});
    }
}

const transformInfluencersData = (starred: Array, suggested: Array): Array => {
    return console.log(starred.concat(suggested))
}

const fetchInfluencersData = (type: string) => {
    if (type === 'starred') {
        fetch('https://api.github.com/users/github')
            .then(res => res.json())
            .then(json => console.log(json));
    }
    else {
        fetch('https://api.github.com/users/github')
            .then(res => res.json())
            .then(json => console.log(json))
    }
}

function* fetchInfluencersSaga() {
    yield takeLatest('INFLUENCER_FETCH_REQUESTED', fetchInfluencers);
}

export default fetchInfluencersSaga;