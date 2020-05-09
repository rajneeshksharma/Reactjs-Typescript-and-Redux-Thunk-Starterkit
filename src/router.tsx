import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import pageNotFound from "./containers/Page-not-found/page-not-found";
import dashboard from "./containers/Dashboard/dashboard";
// import Home from './defaultContainer/homePage';
// import User from './defaultContainer/user';
// import NotFound from './defaultContainer/notFound/notfound';
const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect
          to={{
            pathname: "/home",
          }}
        />
      </Route>
      <Route exact path="/home" component={dashboard} />
      {/* <Route exact path="/user/:slug" component={User} /> */}
      <Route path="*" exact={true} component={pageNotFound} />
    </Switch>
  );
};

const wrappedRoutes = () => (
  <div>
    <Route path="/" component={Pages} />
  </div>
);

const Router = () => (
  <main>
    <Switch>
      <Route path="/" component={wrappedRoutes} />
      <Route path="*" exact={true} component={pageNotFound} />
    </Switch>
  </main>
);

export default Router;
