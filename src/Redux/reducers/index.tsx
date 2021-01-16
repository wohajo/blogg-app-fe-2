import {combineReducers} from 'redux';
import setPagePostsSpinnerReducer from './setPagePostsSpinnerReducer';
import setPostsReducer from './setPostsReducer';
import setSessionUserReducer from './setSessionUserReducer';

const allReducers = combineReducers({
    posts: setPostsReducer,
    postsSpinner: setPagePostsSpinnerReducer,
    sessionUSer: setSessionUserReducer
})

export default allReducers