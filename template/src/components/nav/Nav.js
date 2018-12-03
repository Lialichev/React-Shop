import './nav.scss';

const Nav = ({ list }) => (
  <nav className="nav">
    {
      list.map((name, indedx) => <a href={`/${name.toLowerCase()}`} key={indedx} className="nav__item">{name}</a>)
    }
  </nav>
);


export default Nav;
