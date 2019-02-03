import { Redirect, Link } from 'react-router-dom';
import Form from 'components/form';
import { createNewUser, cleanNewUser } from "store/createUser";
import { connect } from 'react-redux';

class CreateUser extends Component {
  state = {
    error: false
  };

  onSave = ({ firstName, lastName, email, password }) => {
    this.props.dispatch(createNewUser({ firstName, lastName, email, password }));
  };

  componentWillUnmount() {
    this.props.dispatch(cleanNewUser());
  }

  render() {
    const { error } = this.state;
    const { createUser } = this.props;

    return (
      <>
        <h1>Create User</h1>
        <Form onSave={this.onSave} />
        <br />
        {error && <div><mark>Ошибка регистрации!</mark></div>}
        <Link to="/login">Войти</Link>
        {createUser && <Redirect to="/success" />}
      </>
    );
  }
}

const mapState = state => ({
  createUser: state.createUser,
});

export default connect(mapState)(CreateUser);
