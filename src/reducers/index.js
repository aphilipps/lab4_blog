import { combineReducers } from 'redux';

import PostsReducer from './post-reducer';
import AuthsReducer from './auth-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthsReducer,
});

export default rootReducer;
