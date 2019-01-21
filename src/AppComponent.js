import { withRouter } from "react-router-dom";
import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';
import { checkUser, getInfo } from "services";
import { Pages } from './pages/Pages';

class AppComponent extends Component {
  state = {
    user: null,
    info: null,
    loading: true,
    isLogout: false
  };

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.user && this.state.user) {
      getInfo()
        .then(info => this.setState({ info }));
    }
  }

  onLogin = (user) => {
    this.setState({ user });
  };

  onLogout = () => {
    this.setState({ user: null, isLogout: true });
  };

  render() {
    const { user, info, loading } = this.state;
    const WrappedHeader = ({ history }) => (
      <Header
        user={user}
        info={info}
        onLogout={this.onLogout}
        history={history}
      />
    );
    const ConnectedHeader = withRouter(WrappedHeader);

    return (
      <>
        <ConnectedHeader />
        <Main>
          <Pages user={user} onLogin={this.onLogin} info={info} />
        </Main>
        <Footer />
      </>
    );
  }
}

export default AppComponent;
