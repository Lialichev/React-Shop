import RenameText from '../renameText';
import './products.scss';

class Products extends Component {
  render() {
    return (
      <div className="products">
        <div className="products__title">
          Title: <RenameText text="Kinder" />
        </div>
        <div className="products__price">
          $ <RenameText text="32" />
        </div>
        <div className="products__description">
          <RenameText
            textarea
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum"
          />
        </div>
        <button type="submit">Send</button>
      </div>
    );
  }
}

export default Products;
