class RenameText extends Component {
  state = {
    isEdit: false,
    text: this.props.text || 'Some text',
    inFocus: false
  };

  handleClick = () => {
    this.setState({
      isEdit: true,
      inFocus: true
    });
  };

  handlerBlur = () => {
    this.setState({
      isEdit: false,
      inFocus: false
    });
  };

  handlerChange = ({ target }) => {
    this.setState({
      text: target.value,
      inFocus: false
    });
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

  componentDidUpdate() {
    if (this.state.inFocus) this.fieldElement.focus();
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
