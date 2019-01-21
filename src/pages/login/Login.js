import { login } from '../../services';

const Login = ({ onLogin }) => {
  const onSubmit = (e) => {
    const { elements } = e.target;
    const data = {
      email: elements.email.value,
      password: elements.password.value,
    };

    login(data).then(onLogin);

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
          defaultValue="admin@a.com"
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Enter password"
          required
          name="password"
          defaultValue="admin"
        />
      </div>
      <div className="input-group">
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};


export default Login;
