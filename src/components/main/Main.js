import Login from '../../pages/login';
import { checkUser } from '../../services';
import Products from '../products';

import './main.scss';


class Main extends Component {
  state = {
    user: null,
    loading: true,
  };

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }));
  }

  onLogin = (user) => {
    this.setState({ user });
  };

  renderContent() {
    const { user } = this.state;

    return (
      <>
        <h1>{user ? `Hello, ${user.firstName}` : 'Login'}</h1>
        {
          user
            ? <p>Hello</p>
            : <Login onLogin={this.onLogin} />
        }
      </>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <main className="main">
        {loading
          ? 'Loading...'
          : this.renderContent()
        }
        <Products />
      </main>
    );
  }
}


export default Main;
