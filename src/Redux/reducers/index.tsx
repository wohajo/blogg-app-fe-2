import {combineReducers} from 'redux';
import setPagePostsSpinnerReducer from './setPagePostsSpinnerReducer';
import setPostsReducer from './setPostsReducer';

const allReducers = combineReducers({
    posts: setPostsReducer,
    postsSpinner: setPagePostsSpinnerReducer,
})

export default allReducers