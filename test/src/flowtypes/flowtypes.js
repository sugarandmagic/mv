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

export type InfulencersType = Array<InfluencerType>;

export type ActionType = {
  +type: string
};

export type StarredListType = {
    +id: string,
    starred: boolean
};

export type StateType = {
    influencers: InfulencersType,
    starredList: StarredListType,
    sortOrder: Array<string>
};

export type StarredPropsType = {
    toggleStarred: ActionType,
    influencers: InfluencersType,
    sortStarred: ActionType,
    sortOrder: Array<string>,
    starredList: StarredListType
};

export type SuggestedPropsType = {
    influencers: InfluencersType,
    starredList: StarredListType
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