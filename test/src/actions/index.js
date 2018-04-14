//@flow

/**
* toggleStarred - action to toggle the starred status
* @param  {string} id ID of the influencer
* @return {Object}    Redux action
*/
export const toggleStarred = (id: string): Object => {
    console.log('toggle starred!', id);
    return {
        type: 'TOGGLE_STARRED',
        id,
    };
};


/**
* sortStarred - action to sort the list of starred influencers on a given property
* @param  {string} id       ID of the influencer
* @param  {string} sortKey  Key on which to sort the influencers
* @return {Object}          Redux action
*/
export const sortStarred = (id: string, sortKey: string): Object => ({
    type: 'SORT_STARRED',
    id,
    sortKey
});
