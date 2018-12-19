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
      <input
        type="text"
        placeholder="Enter email"
        required
        name="email"
        defaultValue="admin@a.com"
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        required
        name="password"
        defaultValue="admin"
      />
      <br/>

      <input type="submit" value="Login" />
    </form>
  );
};


export default Login;
