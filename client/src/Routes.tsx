import * as Pages from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Pages.Home />
      </Route>
      <Route path="/products">
        <Pages.Products />
      </Route>
      <Route path="/checkout">
        <Pages.Checkout />
      </Route>
      <Route path="/overview">
        <Pages.Overview />
      </Route>
      <Route path="/order">
        <Pages.Order />
      </Route>
      <Route path="*">
        <Pages.NotFound />
      </Route>
    </Switch>
  </Router>
);
