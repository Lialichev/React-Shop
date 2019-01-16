import './nav.scss';
import { Link } from 'react-router-dom';

const Nav = ({ list }) => (
  <nav className="nav">
    {
      list.map((name, index) => <Link to={`/${name.toLowerCase()}`} key={index} className="nav__item">{name}</Link>)
    }
  </nav>
);


export default Nav;
