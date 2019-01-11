import { getProdust } from 'services';

class Product extends Component {
  state={
    data: null
  };

  componentDidMount() {
    getProdust(this.props.match.params.id)
      .then(data => this.setState({ data }));
  }

  render() {
    const { match } = this.props;

    return (
      <>
        <h1>Product {match.params.id}</h1>
        <div>{this.state.data && this.state.data.title}</div>
      </>
    );
  }
}

export default Product;
