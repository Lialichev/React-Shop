import { login } from "store/user";
import { connect } from 'react-redux';

const Login = ({ dispatch }) => {
  const onSubmit = (e) => {
    const { elements } = e.target;
    const data = {
      email: elements.email.value,
      password: elements.password.value,
    };

    dispatch(login(data));

    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Login</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter email"
          required
          name="email"
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Enter password"
          required
          name="password"
        />
      </div>
      <div className="input-group">
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};


export default connect()(Login);
