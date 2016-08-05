import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Listview from './components/listview';
import New from './components/new.js';
import Show from './components/show.js';

// import Welcome from './components/welcome';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Listview} />
    <Route path="posts/new" component={New} />
    <Route path="posts/:id" component={Show} />
  </Route>
);
