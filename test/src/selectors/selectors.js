//@flow
//types
import { StarredListType, StateType } from '../flowtypes/flowtypes';

/**
 * Select the Influencers state leaf
 */
export const getInfluencers = (state: StateType): InfluencersType => state.influencers;

/**
 * Select the sortOrder state leaf
 */
export const getSortOrder = (state: StateType): Array<string> => state.sortOrder;

/**
 * Select the starredList state leaf
 */
export const getStarredList = (state: StateType): StarredListType => state.starredList;
