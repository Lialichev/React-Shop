import { Redirect, Link } from 'react-router-dom';
import Form from '../../components/form';

class CreateUser extends Component {
  state = {
    redirect: false
  };

  onSave(data) {
    console.log(data);
  }

  render() {
    const { redirect } = this.state;

    return (
      <>
        <h1>Create User</h1>
        <Form onSave={this.onSave} />
        <br />
        <Link to="/login">Войти</Link>
        {redirect && <Redirect to="/login" />}
      </>
    );
  }
}

export default CreateUser;
