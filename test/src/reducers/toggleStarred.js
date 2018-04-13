//@flow

/**
 * toggleStarred - description
 *
 * @param  {type} id description
 * @return {type}    description
 */
const toggleStarred = (state: boolean = false, action) => {
    if (action.type = 'TOGGLE_STARRED') {
        return !(state);  
    }
    return state;
};
