//@flow

/**
 * toggleStarred - action to toggle the starred status
 *
 * @param  {string}   id        influencerId
 * @param  {boolean}  starred   starred status
 * @return {type}               description
 */
const toggleStarred = (id: string, starred: boolean): Object => ({
  type: 'TOGGLE_STARRED',
  id,
  starred
})

/**
 * sortStarred - action to sort the list of starred influencers on a given property
 *
 * @param  {string} id influencerId
 * @return {Object}    description
 */
const sortStarred = (id: string, sortKey: string): Object => ({
  type: 'SORT_STARRED',
  id,
  sortKey
})

export {
  toggleStarred,
  sortStarred
}
