//@flow
//types
import { ActionType, InfluencersType } from '../flowtypes/flowtypes';

/**
* toggleStarred - action to toggle the starred status
* @param  {string} id ID of the influencer
* @return {Object}    Redux action
*/
export const toggleStarred = (id: string): ActionType => ({
    type: 'TOGGLE_STARRED',
    id,
});

/**
* sortStarred - action to sort the list of starred influencers on a given property
* @param  {string} id       ID of the influencer
* @param  {string} sortKey  Key on which to sort the influencers
* @return {ActionType}      Redux action
*/
export const sortStarred = (sortKey: string): ActionType => ({
    type: 'SORT_STARRED',
    sortKey
});

/**
* influencerFetchRequested - action to trigger the data fetch
* @return {ActionType} Redux action
*/
export const influencerFetchRequested = (): ActionType => ({
    type: 'INFLUENCER_FETCH_REQUESTED',
});

/**
* influencerFetchSuccess - action dispatched when fetch succeeds
* @param  {InfluencersType} influencers Influencers payload
* @return {ActionType}                  Redux action    
*/
export const influencerFetchSuccess = (influencers: InfluencersType): ActionType => ({
    type: 'INFLUENCER_FETCH_SUCCEEDED',
    influencers,
});
