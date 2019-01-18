import RenameText from 'components/renameText';
import { getProducts } from 'services';

import './product.scss';

class Product extends Component {
  state={
    data: null
  };

  componentDidMount() {
    const { match } = this.props;

    getProducts(match.params.id)
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="product">
        <div className="product__title">
          Title:
          {data && <RenameText>{data.title}</RenameText>}
        </div>
        <div className="product__price">
          $
          {data && <RenameText>{data.price}</RenameText>}
        </div>
        <div className="product__description">
          {data && <RenameText textarea>{data.description}</RenameText>}
        </div>
        <button type="submit">Send</button>
      </div>
    );
  }
}

export default Product;
