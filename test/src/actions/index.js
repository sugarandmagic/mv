//@flow
//types
import type { ToggleStarredActionType, SortStarredActionType, InfluencerFetchSuccessActionType, InfluencerFetchRequestedActionType, InfluencersType } from '../flowtypes/flowtypes';

/**
* toggleStarred - action to toggle the starred status
* @param  {string} id ID of the influencer
* @return {Object}    Redux action
*/
export const toggleStarred = (id: number): ToggleStarredActionType => ({
    type: 'TOGGLE_STARRED',
    id,
});

/**
* sortStarred - action to sort the list of starred influencers on a given property
* @param  {string} id       ID of the influencer
* @param  {string} sortKey  Key on which to sort the influencers
* @return {ActionType}      Redux action
*/
export const sortStarred = (sortKey: string): SortStarredActionType => ({
    type: 'SORT_STARRED',
    sortKey
});

/**
* influencerFetchRequested - action to trigger the data fetch
* @return {ActionType} Redux action
*/
export const influencerFetchRequested = (): InfluencerFetchRequestedActionType => ({
    type: 'INFLUENCER_FETCH_REQUESTED',
});

/**
* influencerFetchSuccess - action dispatched when fetch succeeds
* @param  {InfluencersType} influencers Influencers payload
* @return {ActionType}                  Redux action    
*/
export const influencerFetchSuccess = (influencers: InfluencersType): InfluencerFetchSuccessActionType => ({
    type: 'INFLUENCER_FETCH_SUCCEEDED',
    influencers,
});
