class RenameText extends Component {
  state = {
    isEdit: false,
    text: 'Some text'
  };

  handleClick = () => {
    this.setState({ isEdit: true });
  };

  handlerBlur = (e) => {
    const testFun = this.props.testValue;

    this.setState({ isEdit: false });
    if (testFun) testFun(e.target.value);
  };

  handlerChange = ({ target }) => {
    this.setState({ text: target.value });
  };

  render() {
    const { isEdit, text } = this.state;

    return (
      <>
        {
          isEdit ? <input type="text" value={text} onChange={this.handlerChange} onBlur={this.handlerBlur}/> :
            <span onClick={this.handleClick}>{text}</span>
        }
      </>
    );
  }
}

export default RenameText;
