import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from 'store/products';
import SmallProduct from 'components/smallProduct';

import './products.scss';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      productsSearch: []
    };
  }

  componentDidMount() {
    this.props.dispatch(getProducts());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.setState({ productsSearch: this.props.products })
    }
  }

  onSearch({ target }) {
    const value = target.value.toLowerCase();
    const { products } = this.props;

    const searchProducts = products.filter(({title}) => title.toLowerCase().includes(value));

    this.setState({
      searchValue: target.value,
      productsSearch: searchProducts
    });
  }

  render() {
    const { searchValue, productsSearch } = this.state;

    return (
      <div className="products">
        <h1>Products</h1>
        <div className="products__search">
          <input
            type="text"
            value={searchValue}
            placeholder="Search.."
            onChange={(e) => this.onSearch(e)}
          />
        </div>
        <div className="products__wrap">
          {
            productsSearch.length !== 0
              ? productsSearch.map(data => <SmallProduct key={data.id} product={data}/>)
              : <p>Products not found :(</p>
          }
        </div>
        <div className="products__add">
          <Link to="/products/new">Add New</Link>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  products: state.products
});

export default connect(mapState)(Products);
