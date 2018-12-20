import Login from '../../pages/login';
import RenameText from '../renameText';
import { checkUser } from '../../services';

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
        <RenameText />
      </main>
    );
  }
}


export default Main;
