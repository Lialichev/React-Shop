import { connect } from 'react-redux';
import ControlItems from 'components/controlItems';
import { getCategories, updateCategories } from 'store/categories';

const isPublished = category => category.published;
const notPublished = category => !category.published;

class Categories extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  updateCategories = (title, id) => {
    const category = this.props.categories.find(category => category.id === id);
    category.title = title;

    this.props.dispatch(updateCategories(category));
  };

  unPublishCategory = (id) => {
    const category = this.props.categories.find(category => category.id === id);
    category.published = false;

    this.props.dispatch(updateCategories(category));
  };

  publishCategory = (id) => {
    const category = this.props.categories.find(category => category.id === id);
    category.published = true;

    this.props.dispatch(updateCategories(category));
  };

  render() {
    const { categories } = this.props;

    return (
      <section>
        <h1>Categories</h1>
        <ControlItems
          leftItems={categories.filter(isPublished)}
          rightItems={categories.filter(notPublished)}
          onChangeLeftItem={this.updateCategories}
          removeItem={this.unPublishCategory}
          addItem={this.publishCategory}
        />
      </section>
    );
  }
}

const mapState = state => ({
  categories: state.categories
});

export default connect(mapState)(Categories);
