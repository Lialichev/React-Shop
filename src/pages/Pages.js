import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import CreateUser from './createUser';
import UserInfo from './userInfo';
import Product from './product';
import Products from './products';

export const Pages = ({ user, onLogin, info }) => (
  <Switch>
    <Route
      path="/products/:id"
      component={Product}
    />
    {
      !user ?
        [
          <Route
            path={["/", "/home"]}
            exact
            render={() => <h1>Home</h1>}
            key="start"
          />,
          <Route
            path="/login"
            render={() => <Login onLogin={onLogin} />}
            key="login"
          />,
          <Route
            path="/user"
            component={CreateUser}
            key="createUser"
          />
        ] :
        [
          <Route
            path={["/", "/home"]}
            exact
            render={() => <UserInfo user={user} info={info} />}
            key="userInfo"
          />,
          <Route
            path="/products"
            component={Products}
            key="productsPage"
          />,
          <Redirect from="/login" to="/" key="loginTo" />
        ]
    }
    <Route
      render={({ location }) => <h1>Code: 404! Page not found <em>{location.pathname}</em></h1>}
    />
  </Switch>
);
