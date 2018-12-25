class RenameText extends Component {
  state = {
    isEdit: false,
    text: this.props.text || 'Some text'
  };

  handleClick = () => {
    this.setState({ isEdit: true });
  };

  handlerBlur = () => {
    this.setState({ isEdit: false });
  };

  handlerChange = ({ target }) => {
    this.setState({ text: target.value });
  };

  field() {
    const { textarea } = this.props;
    const { text } = this.state;

    return (
      textarea
        ? <textarea
          value={text}
          onChange={this.handlerChange}
          onBlur={this.handlerBlur}
          ref={el => this.fieldElement = el}
        >
        </textarea>
        : <input
          type="text"
          value={text}
          onChange={this.handlerChange}
          onBlur={this.handlerBlur}
          ref={el => this.fieldElement = el}
        />
    );
  }

  render() {
    const { isEdit, text } = this.state;
    return (
      <>
        {
          isEdit
            ? this.field()
            : <span onClick={this.handleClick}>{text}</span>
        }
      </>
    );
  }
}

export default RenameText;
