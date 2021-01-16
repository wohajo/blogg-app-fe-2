const setSessionUserReducer = (state = null, action: any) => {
    switch(action.type) {
        case 'SET_USER':
            return action.payload;
        case 'RESET_USER':
            return state;
        default:
            return state;
    }
};

export default setSessionUserReducer