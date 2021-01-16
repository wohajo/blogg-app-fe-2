import {combineReducers} from 'redux';
import setPagePostsSpinnerReducer from './setPagePostsSpinnerReducer';
import setPasswordReducer from './setPasswordReducer';
import setPostsReducer from './setPostsReducer';
import setSessionUserReducer from './setSessionUserReducer';

const allReducers = combineReducers({
    posts: setPostsReducer,
    postsSpinner: setPagePostsSpinnerReducer,
    sessionUSer: setSessionUserReducer,
    password: setPasswordReducer
})

export default allReducers