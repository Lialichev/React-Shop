class Button extends Component {
  state = {
    isActive: true
  };

  handleClick () {
    this.setState({isActive: !this.state.isActive});
  };

  render() {
    const {isActive} = this.state;

    return (
      <button className={isActive ? 'active' : ''} onClick={(e) => this.handleClick(e)}>Кнопка</button>
    )
  }
}

export default Button;
