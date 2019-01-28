import './controlItems.scss';
import RenameText from 'components/renameText';

class ControlItems extends Component {
  render () {
    const {
      leftItems,
      rightItems,
      onChangeLeftItem,
    } = this.props;

    return (
      <div className="control-items">
        <ul>
          {
            leftItems.map(({ title, id }) => {
              return (
                <li key={id}>
                  <RenameText onOut={title => onChangeLeftItem(title, id)}>
                    {title}
                  </RenameText>
                </li>
              );
            })
          }
        </ul>

        <ul>
          {
            rightItems.map(({ title, id }) => {
              return <li key={id}>{title}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default ControlItems;
