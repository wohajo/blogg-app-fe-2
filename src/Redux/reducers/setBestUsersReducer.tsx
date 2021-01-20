const setBestUsersReducer = (state = null, action: any) => {
    switch(action.type) {
        case 'SET_BEST_USERS':
            return action.payload;
        case 'RESET_BEST_USERS':
            return null;
        default:
            return state;
    }
};

export default setBestUsersReducer