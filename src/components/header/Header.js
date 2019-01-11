import Nav from '../nav';
import { NavLink } from 'react-router-dom';
import { logout } from 'services';
import './header.scss';

const Header = ({ user, info, onLogout, history }) => {
  const onLogoutHandler = (e) => {
    e.preventDefault();

    logout().then(() => {
      onLogout();
      history.push('/');
    });
  };

  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src="images/images.png" alt=""/>
      </a>
      <Nav list={['Home', 'Products', 'Contacts']}/>
      <div className="user-box">
        {
          user
            ? <span>
              {user.firstName}
              {info && `(${info.categories}/${info.products})`}
              <a href="#" onClick={onLogoutHandler}>Logout</a>
            </span>
            : (
              <span>
              <NavLink to="/login" activeClassName="active">Sing in</NavLink> /
              <NavLink to="/user" activeClassName="active">Sing up</NavLink>
            </span>
            )
        }
      </div>
    </header>
  );
}

export default Header;
