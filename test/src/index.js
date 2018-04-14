import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const initialState = ({
    influencers: [
        // {
        //     influencer_id: 123,
        //     influencer_full_name: 'Hannah Ross',
        //     influencer_instagram_username: 'hross64346',
        //     influencer_instagram_profile_image:
        // 'https://randomuser.me/api/portraits/women/62.jpg',
        //     statistics: {
        //         followers: 102523,
        //         engagement: '3.14'
        //     },
        //     starred: true,
        //     sortOrder: 0,
        // },
    ]
});

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
