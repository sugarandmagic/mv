//@flow

import { createSelector } from 'reselect';

export const getInfluencers = (state: Array): Array => state.influencers;

const getInfluencer = (state: Array, props: Object): Object =>
    state.influencers.find((influencer: Object): Object => influencer.influencer_id === props.id);

export const getInfluencerByIdSelector = (): Object => createSelector(
    getInfluencer,
    (influencerById: Object): Object => ({influencerById})
);

export const getSortOrder = (state: Array): Array => state.sortOrder;
