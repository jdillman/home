import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeView from '../views/HomeView';
import BlogView from '../views/BlogView';

export default function Router() {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Route path="/" component={HomeView} />
          <Route path="/blog" component={BlogView} />
        </Switch>
      </Route>
    </BrowserRouter>
  );
}
