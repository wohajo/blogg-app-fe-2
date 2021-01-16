const setPasswordReducer = (state = null, action: any) => {
    switch(action.type) {
        case 'SET_PSWRD':
            return action.payload;
        case 'RESET_PSWRD':
            return null;
        default:
            return state;
    }
};

export default setPasswordReducer