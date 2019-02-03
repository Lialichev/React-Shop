import { connect } from 'react-redux';
import { getProduct } from "store/product";
import RenameText from 'components/renameText';

import './product.scss';

class Product extends Component {
  componentDidMount() {
    const { match } = this.props;

    this.props.dispatch(getProduct(match.params.id));
  }

  render() {
    const { product } = this.props;

    return (
      <div className="product">
        <div className="product__title">
          Title:
          {product && <RenameText>{product.title}</RenameText>}
        </div>
        <div className="product__price">
          $
          {product && <RenameText>{product.price}</RenameText>}
        </div>
        <div className="product__description">
          {product && <RenameText textarea>{product.description}</RenameText>}
        </div>
        <button type="submit">Send</button>
      </div>
    );
  }
}

const mapState = state => ({
  product: state.product
});

export default connect(mapState)(Product);
