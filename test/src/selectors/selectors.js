//@flow

import { createSelector } from 'reselect'

export const getInfluencers = (state) => state.influencers;

const getInfluencer = (state, props) =>
  state.influencers.find((influencer) => influencer.influencer_id === props.id)

export const getInfluencerByIdSelector = () => createSelector(
  getInfluencer,
  (influencerById) => ({influencerById})
)
