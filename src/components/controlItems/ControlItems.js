import './controlItems.scss';
import RenameText from 'components/renameText';
import Modal from 'components/modal';

class ControlItems extends Component {
  state = {
    itemId: '',
    editId: ''
  };

  onEdit = (editId) => {
    this.setState({editId});
  };

  onInputOut = (title, id) => {
    this.props.onChangeLeftItem(title, id);
    this.setState({ isEdit: '' });
  };

  onDelete = (itemId) => {
    this.setState({itemId});
  };

  onClose = () => {
    this.setState({itemId: ''});
  };

  onOk = () => {
    this.props.removeItem(this.state.itemId);
  };

  render() {
    const {
      leftItems,
      rightItems,
      onChangeLeftItem,
      addItem,
    } = this.props;

    const {itemId, editId} = this.state;

    return (
      <div className="control-items">
        <ul>
          {
            leftItems.map(({title, id}) => {
              return (
                <li key={id}>
                  <RenameText
                    onOut={title => this.onInputOut(title, id)}
                    active={id === editId}
                  >
                    {title}
                  </RenameText>
                  <span
                    style={{marginLeft: '10px', color: 'red', cursor: 'pointer'}}
                    onClick={() => this.onDelete(id)}
                  >
                    X
                  </span>
                  <span
                    style={{marginLeft: '5px', color: 'blue', cursor: 'pointer'}}
                    onClick={() => this.onEdit(id)}
                  >
                    Edit
                  </span>
                </li>
              );
            })
          }
        </ul>
        <ul>
          {
            rightItems.map(({title, id}) => (
              <li key={id} onDoubleClick={() => addItem(id)} style={{cursor: 'pointer'}}>{title}</li>
            ))
          }
        </ul>
        <Modal
          isOpen={Boolean(itemId)}
          close={this.onClose}
          success={this.onOk}
          text="You are going to unpublish category."
        />
      </div>
    );
  }
}

export default ControlItems;
