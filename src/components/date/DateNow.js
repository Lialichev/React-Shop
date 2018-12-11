class DateNow extends Component {
  state = {
    date: '',
    time: ''
  };

  constructor(props) {
    super(props);

    this.dateNow = setInterval(() => {
      this.date = new Date();
      this.setState({
        date: `${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}`,
        time: `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.dateNow);
  }

  render() {
    const {date, time} = this.state;

    return (
      <div className="date">
        {date}<br/>{time}
      </div>
    )
  }
}

export default DateNow;
