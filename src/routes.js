import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Listview from './components/listview';
import New from './components/new';
import Show from './components/show';
import RequireAuth from './components/require-auth';
import SignIn from './components/signin';
import SignUp from './components/signup';
import UserList from './components/userlist';

// import Welcome from './components/welcome';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Listview} />
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
    <Route path="posts/new" component={RequireAuth(New)} />
    <Route path="posts/:id" component={Show} />
    <Route path="users" component={UserList} />
  </Route>
);
