class Form extends Component {
  state = {
    // firstName: '',
    // lastName: '',
    // role: 'Guest',
    // flag: false
  };

  constructor(props) {
    super(props);

    this.fields = [
      {label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/, place: 'Enter your email'},
      {label: 'name', reg: /^[^ ]{3,20}$/, place: 'Enter your name'},
      {label: 'surname', reg: /^[^ ]{3,20}$/, place: 'Enter your surname'},
      {label: 'password', reg: /^[^ ]{6,20}$/, secure: true, place: 'Enter your password'},
      {label: 'repeatPassword', reg: /^[^ ]{6,20}$/, secure: true, place: 'Enter your repeat password'},
    ];

    this.state = {};

    this.fields.forEach(({label}) => this.state[label] = '')
  }

  // roles = ['Admin', 'Guest', 'Superuser'];
  //
  // onChange = ({target}) => {
  //   if (/checkbox|radio/i.test(target.type)) {
  //     this.setState({[target.name]: target.checked});
  //   } else {
  //     this.setState({[target.name]: target.value});
  //   }
  // };

  onChange = ({target}) => {
    if (/checkbox|radio/i.test(target.type)) {
      this.setState({[target.name]: target.checked});
    } else {
      this.setState({[target.name]: target.value});
    }
  };

  render() {
    // const {firstName, lastName, role, flag} = this.state;
    const { state } = this;

    return (
      <form>
        {/*<input*/}
        {/*type="text"*/}
        {/*value={firstName}*/}
        {/*name="firstName"*/}
        {/*onChange={this.onChange}*/}
        {/*/>*/}
        {/*<input*/}
        {/*type="text"*/}
        {/*value={lastName}*/}
        {/*name="lastName"*/}
        {/*onChange={this.onChange}*/}
        {/*/>*/}
        {/*<select*/}
        {/*value={role}*/}
        {/*name="role"*/}
        {/*onChange={this.onChange}*/}
        {/*>*/}
        {/*{*/}
        {/*this.roles.map(val => <option value={val}>{val}</option>)*/}
        {/*}*/}
        {/*</select>*/}
        {/*<input*/}
        {/*type="checkbox"*/}
        {/*name="flag"*/}
        {/*onChange={this.onChange}*/}
        {/*checked={flag}*/}
        {/*/>*/}
        <ul>
          {
            this.fields.map((field =>
              <li>
                <input
                  type={field.secure ? 'password' : 'text'}
                  name={field.label}
                  value={state[field.label]}
                  placeholder={field.place}
                  onChange={this.onChange}
                />
              </li>
            ))
          }
        </ul>
      </form>
    );
  }
}

export default Form;
