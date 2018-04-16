import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import App from './components/App';
import rootReducer from './reducers';
import fetchInfluencersSaga from './saga/fetchInfluencers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const mockState = [
    {
        'id': 987,
        'name': 'Anna Griffin',
        'instagram_username': 'anna_griffin_123',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/6.jpg',
        'followers': 21231,
        'engagement': '6.84',
        'starred': true
    },
    {
        'id': 876,
        'name': 'Melissa Peterson',
        'instagram_username': 'melissa_peterson',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/84.jpg',
        'followers': 5122,
        'engagement': '5.23',
        'starred': true
    },
    {
        'id': 765,
        'name': 'Kathryn Smith',
        'instagram_username': 'kat_smith',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/71.jpg',
        'followers': 7161,
        'engagement': '2.36',
        'starred': true
    },
    {
        'id': 654,
        'name': 'Patricia Rios',
        'instagram_username': 'patricia_rios_1993',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/49.jpg',
        'followers': 91100,
        'engagement': '1.61',
        'starred': false
    },
    {
        'id': 543,
        'name': 'Joan Robertson',
        'instagram_username': 'j_robertson_lol',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/26.jpg',
        'followers': 16013,
        'engagement': '6.28',
        'starred': false
    },
    {
        'id': 432,
        'name': 'Sharon Hopkins',
        'instagram_username': 'sharon_hopkins234',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/44.jpg',
        'followers': 37300,
        'engagement': '4.73',
        'starred': false
    }
];

const initialState = ({
    influencers: mockState,
    starredList: mockState.reduce((acc, element) => Object.assign({}, acc, {[element.id]: element.starred}), {})
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(
        sagaMiddleware,
    )),
);

sagaMiddleware.run(fetchInfluencersSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
