class Form extends Component {
  static getDerivedStateFromProps({ data }, currentState) {
    if (!data) return null;

    const props = Object.entries(data);
    const isStateEmpty = props.every(([key]) => !currentState[key].value);

    if (isStateEmpty) {
      const state = {};

      props.forEach(([key, value]) => state[key] = { value, error: '' });

      return state;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.fields = [
      {label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/, place: 'Enter your email'},
      {label: 'firstname', reg: /^[^ ]{3,20}$/, place: 'Enter your name'},
      {label: 'lastname', reg: /^[^ ]{3,20}$/, place: 'Enter your surname'},
      {label: 'password', reg: /^[^ ]{6,20}$/, secure: true, place: 'Enter your password'},
      {label: 'repeatPassword', reg: /^[^ ]{6,20}$/, secure: true, place: 'Enter your repeat password'},
    ];

    this.state = {};

    this.fields.forEach(({ label }) => this.state[label] = ({
      value: '',
      error: ''
    }));
  }

  onChange = ({ target }) => {
    const field = this.state[target.name];

    if (/checkbox|radio/i.test(target.type)) {
      this.setState({ [target.name]: { ...field, value: target.checked } });
    } else {
      this.setState({ [target.name]: { ...field, value: target.value } });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = {};

    Object.entries(this.state)
      .map(([key, { value }]) => data[key] = value);

    if (this.props.onSave) this.props.onSave(data);
  };

  isButtonDisabled() {
    return Object.entries(this.state)
      .some(([key, { error, value }]) => error || !value);
  }

  validate = ({ target }) => {
    const field = this.fields.find(item => item.label === target.name);
    const stateField = this.state[target.name];
    let error = '';

    if (!target.value || !field.reg.test(target.value)) {
      error = 'is not valid';
    } else {
      error = '';
    }

    if (target.name === 'repeatPassword' && this.state.password.value !== target.value) {
      error = 'Passwords are not equled';
    }

    this.setState({ [target.name]: { ...stateField, error } });
  };

  render() {
    const { state } = this;

    return (
      <form onSubmit={this.onSubmit}>
        <ul>
          {
            this.fields.map((field, index) => (
              <div className="input-group" key={index}>
                <li>
                  <input
                    type={field.secure ? 'password' : 'text'}
                    name={field.label}
                    value={state[field.label].value}
                    placeholder={field.place}
                    onChange={this.onChange}
                    onBlur={this.validate}
                  />
                  {
                    state[field.label].error && (
                      <mark style={{ color: 'red' }}>
                        {state[field.label].error}
                      </mark>
                    )
                  }
                </li>
              </div>
            ))
          }
        </ul>
        <div className="input-group">
          <input
            type="submit"
            value="Отправить"
            disabled={this.isButtonDisabled()}
          />
        </div>
      </form>
    );
  }
}

export default Form;
