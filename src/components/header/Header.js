import Nav from '../nav';
import { NavLink, Link } from 'react-router-dom';
import { logout } from 'services';
import './header.scss';

const Header = ({ user, info, onLogout }) => {
  const onLogoutHandler = (e) => {
    e.preventDefault();

    onLogout();
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src="/images/images.png" alt="" />
      </Link>
      <Nav list={['Home', 'Products']} />
      <div className="user-box">
        {
          user
            ? <>
                {user.firstName}
                {info && `(${info.categories}/${info.products})`}
                <a href="#" className="user-box__logout" onClick={onLogoutHandler}>Logout</a>
              </>
            : (
              <>
                <NavLink to="/login" activeClassName="active">Sing in</NavLink>
                <span className="user-box__space">/</span>
                <NavLink to="/user" activeClassName="active">Sing up</NavLink>
              </>
            )
        }
      </div>
    </header>
  );
}

export default Header;
