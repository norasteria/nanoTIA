import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom"

import FrontPage from "./pages/front-page";
import ArticlePage from "./pages/article"

export default class RouterConfig extends Component {
 render() {
  return (
    <Router>
      <Route path="/" exact component={FrontPage}/>
      <Route path="/:slug" component={ArticlePage}/>
    </Router>
  )
 }
}
