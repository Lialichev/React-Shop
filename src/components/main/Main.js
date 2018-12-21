import Login from '../../pages/login';
import UserInfo from '../../pages/userInfo';

import './main.scss';


class Main extends Component {
  renderContent() {
    const { user, onLogin, info } = this.props;

    return (
      <>
        {
          user
            ? <UserInfo user={user} info={info} />
            : <Login onLogin={onLogin} />
        }
      </>
    );
  }

  render() {
    const { loading } = this.props;

    return (
      <main className="main">
        {loading
          ? 'Loading...'
          : this.renderContent()
        }
      </main>
    );
  }
}


export default Main;
