//@flow

import { createSelector } from 'reselect';

export const getInfluencers = (state: Array): Array => state.influencers;

const getInfluencer = (state: Array, props: Object): Object =>
    state.influencers.find((influencer: Object): Object => influencer.id === props.id);

export const getInfluencerByIdSelector = (): Object => createSelector(
    getInfluencer,
    (influencerById: Object): Object => ({influencerById})
);

export const getSortOrder = (state: Array): Array => state.sortOrder;

export const getStarredList = (state: Array): Array => state.starredList;

export const getSuggestedInfluencersSelector = createSelector(
    getInfluencers,
    (suggestedInfluencers: Array): Array => suggestedInfluencers.filter((influencer: Object): Array => !influencer.starred)
);

export const getStarredInfluencersSelector = createSelector(
    getInfluencers,
    (starredInfluencers: Array): Array => starredInfluencers.filter((influencer: Object): Array => influencer.starred)
);
