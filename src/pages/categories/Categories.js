import { connect } from 'react-redux';
import ControlCategory from 'components/controlCategory';
import { getCategories } from 'store/categories'

class Categories extends Component {

  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  render() {
    const { categories } = this.props;

    return <ControlCategory leftItems={categories}/>
  }
}

const mapState = state => ({
  categories: state.categories
});

export default connect(mapState)(Categories);
