class Counter extends Component {
  state = {
    counter: 0
  };

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    // this.setState((state, props) => {
    //   console.log(state, props);
    //
    //   return {counter: state.counter + 1}
    // });
  };

  render() {
    const {counter} = this.state;

    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
        <br/>
        <span>{counter}</span>
      </div>
    );
  }
}

export default Counter;
