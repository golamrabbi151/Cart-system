import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import FourOFour from "../pages/fourOFour/FourOFour";
function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <FourOFour />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
