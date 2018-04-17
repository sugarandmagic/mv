//@flow

export type InfluencerType = {
        id: number,
        name: string,
        instagram_username: string,
        instagram_profile_image: string,
        followers?: number,
        engagement?: string,
        starred: boolean
};

export type InfluencersType = Array<InfluencerType>;

export type StarredListActionType = {
  +type: string,
  id: string | typeof undefined
};

export type StarredListType = {
    id: string,
    starred: boolean
};

export type SortStarredActionType = {
    +type: string,
    sortKey: string | typeof undefined
};

export type ToggleStarredActionType = {
    +type: string,
    id: number | typeof undefined
};

export type InfluencerFetchSuccessActionType = {
    +type: string,
    influencers: InfluencersType
};

export type InfluencerFetchRequestedActionType = {
    +type: string
};

export type StateType = {
    influencers: InfluencersType,
    starredList: StarredListType,
    sortOrder: Array<string>
};

export type StarredDispatchPropsType = {
    toggleStarred: (id: number) => ToggleStarredActionType,
    sortStarred: (sortKey: string) => SortStarredActionType,
    influencerFetchRequested: () => InfluencerFetchRequestedActionType
};

export type StarredStatePropsType = {
    influencers: InfluencersType,
    sortOrder: Array<string>,
    starredList: StarredListType
};

export type StarredPropsType = StarredStatePropsType & StarredDispatchPropsType;

export type StarredInfluencerStatePropsType = {
    influencer: InfluencerType,
    starredList: StarredListType
};

export type StarredInfluencerDispatchPropsType = {
    toggleStarred: (id: number) => ToggleStarredActionType
};

export type SuggestedInfluencerStatePropsType = {
    influencer: InfluencerType,
    starredList: StarredListType
};

export type SuggestedInfluencerDispatchPropsType = {
    toggleStarred: (id: number) => ToggleStarredActionType
};

export type StarredInfluencerPropsType = StarredInfluencerStatePropsType & StarredInfluencerDispatchPropsType;

export type SuggestedInfluencerPropsType = SuggestedInfluencerStatePropsType & SuggestedInfluencerDispatchPropsType;

export type SuggestedPropsType = SuggestedStatePropsType & SuggestedDispatchPropsType;

export type SuggestedStatePropsType = {
    influencers: InfluencersType,
    starredList: StarredListType
};

export type SuggestedDispatchPropsType = {
    toggleStarred: (id: number) => ToggleStarredActionType
};

type StatsType = {
    followers: number,
    engagement: string
};

export type RawInfluencerType = {
    influencer_id: number,
    influencer_full_name: string,
    influencer_instagram_username: string,
    influencer_instagram_profile_image: string,
    statistics?: StatsType
};