import Nav from '../nav';
import './header.scss';

const Header = ({user, info}) => (
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
            </span>
          : (
            <span>
              <a href="/singin">Sing in</a> /
              <a href="/singup">Sing up</a>
            </span>
          )
      }
    </div>
  </header>
);

export default Header;
