import React from "react";
import { Switch, Route } from "react-router-dom";

import ListingPage from "./pages/ListingPage";
import SingleViewPage from "./pages/SingleViewPage";

const Routes = React.memo(() => (
  <Switch>
    <Route exact path="/" component={ListingPage} />
    <Route path="/:slug" component={SingleViewPage} />
  </Switch>
));

export default Routes;
