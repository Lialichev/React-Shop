import './controlCategory.scss'

class ControlCategory extends Component {

  render() {
    const { leftItems } = this.props;

    return (
      <div className="control-category">
          <ul>
            {
              leftItems.map(({ title, id }) => <li key={id}>{title}</li>)
            }
          </ul>
      </div>
    );
  }
}

export default ControlCategory;
