import React from "react";
import { Switch, Route } from "react-router-dom";

import ListingPage from "../pages/ListingPage";
import SingleViewPage from "../pages/SingleViewPage";

const Routes = React.memo(() => (
  <Switch>
    <Route exact path="/" component={ListingPage}></Route>
    <Route path="/:slug" component={SingleViewPage}></Route>
  </Switch>
));

export default Routes;
