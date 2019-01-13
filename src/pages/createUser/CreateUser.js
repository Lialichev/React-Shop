import Form from '../../components/form';
import { Redirect } from 'react-router-dom';

class CreateUser extends Component {
  state = {
    redirect: false
  };

  onClick = () => {
    // this.setState({  redirect: true });
    this.props.history.push('/login');
  };

  render() {
    const { redirect } = this.state;

    return (
      <>
        <h1>Create User</h1>
        <Form/>
        <button onClick={this.onClick}>Войти</button>
        {redirect && <Redirect to="/login" />}
      </>
    );
  }
}

export default CreateUser;
