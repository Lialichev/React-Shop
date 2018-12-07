import Nav from '../nav';

import './header.scss';

const Header = () => (
  <header className="header">
    <a href="/" className="header__logo">LOGO</a>
    <Nav list={['Home', 'Products', 'Contacts']} />
  </header>
);

export default Header;
