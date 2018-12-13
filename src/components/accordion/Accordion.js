import './accordion.scss';

class Accordion extends Component {
  state = {
    isActive: true
  };

  handleClick = () => {
    this.setState({isActive: !this.state.isActive});
  };

  render() {
    const {isActive} = this.state;

    return (
      <>
        <button onClick={this.handleClick}>{isActive ? 'Hide' : 'Show'}</button>
        <small className={isActive ? 'active' : ''}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis delectus dignissimos doloribus eos
          et, eveniet expedita harum illum in minima necessitatibus omnis perferendis, praesentium tempora ullam vero,
          voluptates voluptatibus!
        </small>
      </>
    );
  }
}

export default Accordion;
