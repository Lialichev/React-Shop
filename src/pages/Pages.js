import { Route, Switch } from 'react-router-dom';
import Login from './login';
import CreateUser from './createUser';

export const Pages = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => <h1>Hello</h1>}
      />
      <Route
        path="/login"
        component={Login}
      />
      <Route
        path="/user"
        component={CreateUser}
      />
      <Route
        render={({ location }) => <h1>Code: 404! Page not found <em>{location.pathname}</em></h1>}
      />
    </Switch>
  )
};
