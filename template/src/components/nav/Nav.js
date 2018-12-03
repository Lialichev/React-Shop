import './nav.scss';

const Nav = ({ list }) => (
  <nav className="nav">
    {
      list.map((name, index) => <a href={`/${name.toLowerCase()}`} key={index} className="nav__item">{name}</a>)
    }
  </nav>
);


export default Nav;
