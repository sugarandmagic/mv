import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Container from './Container/Container';
import rootReducer from './reducers';

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
        'starred': true
    },
    {
        'id': 543,
        'name': 'Joan Robertson',
        'instagram_username': 'j_robertson_lol',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/26.jpg',
        'followers': 16013,
        'engagement': '6.28',
        'starred': true
    },
    {
        'id': 432,
        'name': 'Sharon Hopkins',
        'instagram_username': 'sharon_hopkins234',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/44.jpg',
        'followers': 37300,
        'engagement': '4.73',
        'starred': true
    },
    {
        'id': 123,
        'name': 'Hannah Ross',
        'instagram_username': 'hross64346',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/62.jpg',
        'starred': false
    },
    {
        'id': 234,
        'name': 'Emily White',
        'instagram_username': 'emwhite',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/14.jpg',
        'starred': false
    },
    {
        'id': 345,
        'name': 'Olivia Wagner',
        'instagram_username': 'olivia_wagner_official',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/29.jpg'
    }
];

const initialState = ({
    influencers: mockState,
    starredList: mockState.reduce((acc, element) => Object.assign({}, acc, {[element.id]: element.starred}), {}),
});

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('root')
);
