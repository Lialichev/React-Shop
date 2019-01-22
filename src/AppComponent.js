import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { check, logout } from './store/user'
import { getInfo, cleanInfo } from './store/category'

import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';
import { Pages } from './pages/Pages';

class AppComponent extends Component {
  componentDidMount() {
    this.props.dispatch(check());
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user && this.props.user) {
      this.props.dispatch(getInfo());
    }

    if (prevProps.user && !this.props.user) {
      this.props.history.push('/');
      this.props.dispatch(cleanInfo());
    }
  }

  onLogout = () => {
    this.props.dispatch(logout());
  };

  render() {
    const { user, info } = this.props;

    return (
      <>
        <Header
          user={user}
          info={info}
          onLogout={this.onLogout}
        />
        <Main>
          <Pages user={user} info={info} />
        </Main>
        <Footer />
      </>
    );
  }
}

const mapState = state => ({
  user: state.user,
  info: state.info
});

export default withRouter(connect(mapState)(AppComponent));
