import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import { Provider } from 'mobx-react';
import stores from './stores/stores';
import App from './App'
import BookPage from './components/BookPage/BookPage'
import NotFound from './components/NotFound/NotFound'

export default (
  <Provider {...stores}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/:id" component={BookPage} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
)