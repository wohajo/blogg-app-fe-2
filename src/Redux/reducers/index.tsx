import {combineReducers} from 'redux';
import setBestUsersReducer from './setBestUsersReducer';
import setPagePostsSpinnerReducer from './setPagePostsSpinnerReducer';
import setPasswordReducer from './setPasswordReducer';
import setPostsReducer from './setPostsReducer';
import setSessionUserReducer from './setSessionUserReducer';

const allReducers = combineReducers({
    posts: setPostsReducer,
    postsSpinner: setPagePostsSpinnerReducer,
    sessionUser: setSessionUserReducer,
    password: setPasswordReducer,
    bestUsers: setBestUsersReducer
})

export default allReducers