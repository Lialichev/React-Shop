import { Redirect, Link } from 'react-router-dom';
import Form from 'components/form';
import { createUser } from "services";

class CreateUser extends Component {
  state = {
    redirect: false,
    error: false
  };

  onSave = ({ firstName, lastName, email, password }) => {
    createUser({ firstName, lastName, email, password })
      .then(() => this.setState({ redirect: true }))
      .catch(() => this.setState({ error: true }));
  };

  render() {
    const { redirect, error } = this.state;

    return (
      <>
        <h1>Create User</h1>
        <Form onSave={this.onSave} />
        <br />
        {error && <div><mark>Ошибка регистрации!</mark></div>}
        <Link to="/login">Войти</Link>
        {redirect && <Redirect to="/success" />}
      </>
    );
  }
}

export default CreateUser;
