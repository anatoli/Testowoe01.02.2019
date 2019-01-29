import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Widget from './containers/Widget';
import SearchInput from './containers/SearchInput';
import NotFound from './containers/NotFound';

export const LandingRouters = () => (
  <Switch>
    <Route exact path='/' component={SearchInput} />
    <Route exact path='/widget' component={Widget} />
    {/*<Route exact path='/about' component={About} />*/}
    {/*<Route exact path={routes.emailConfirmation} component={EmailConfirmation} />*/}
    {/*<Route exact path={routes.restorePasswordEmail} component={RestorePasswordEmail} />*/}
    {/*<PrivateRoute exact path={routes.redirectAic} component={RedirectAic} props={props} />*/}
    {/*<PrivateRoute exact path={routes.icoProfile} component={IcoProfilePage} props={props} />*/}
    {/*<PrivateRoute exact path={`${routes.icoProfile}/${routes.settings}`} component={IcoProfileSettings} props={props} />*/}
    {/*<PrivateRoute exact path={`${routes.icoProfile}/${routes.transactionHistory}`}*/}
                  {/*component={IcoProfileTransactions} props={props} />*/}
    <Route component={NotFound} />
  </Switch>
);
