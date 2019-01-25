import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import CreateUser from './createUser';
import UserInfo from './userInfo';
import Product from './product';
import Products from './products';
import Categories from './categories';

export const Pages = ({ user, info }) => (
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
            component={Login}
            key="login"
          />,
          <Route
            path="/user"
            component={CreateUser}
            key="createUser"
          />,
          <Route
            path="/success"
            render={() => <h1>Success registration</h1>}
            key="success"
          />
        ] :
        [
          <Route
            path={["/", "/home"]}
            exact
            render={() => <UserInfo user={user} info={info} />}
            // home переделать на connect
            key="userInfo"
          />,
          <Route
            path="/products"
            component={Products}
            key="productsPage"
          />,
          <Route
            path="/categories"
            component={Categories}
            key="categories"
          />,
          <Redirect from="/login" to="/" key="loginTo" />
        ]
    }
    <Route
      render={({ location }) => <h1>Code: 404! Page not found <em>{location.pathname}</em></h1>}
    />
  </Switch>
);
