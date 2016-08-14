import { combineReducers } from 'redux';

import PostsReducer from './post-reducer';
import AuthsReducer from './auth-reducer';
import UsersReducer from './users-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthsReducer,
  users: UsersReducer,
});

export default rootReducer;
