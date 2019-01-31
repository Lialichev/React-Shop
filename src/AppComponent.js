import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {ToastContainer} from 'react-toastr'

import {check, logout} from './store/user'
import {getInfo, cleanInfo} from './store/category'
import {cleanError} from './store/status'

import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';
import {Pages} from './pages/Pages';

export class AppComponent extends Component {
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

    if (!prevProps.error && this.props.error) {
      this.container.error(
        this.props.error,
        'Error!'
      );
      this.props.dispatch(cleanError());
    }
  }

  onLogout = () => {
    this.props.dispatch(logout());
  };

  render() {
    const {user, info} = this.props;

    return (
      <>
        <Header
          user={user}
          info={info}
          onLogout={this.onLogout}
        />
        <Main>
          <Pages user={user} info={info}/>
        </Main>
        <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />
        <Footer/>
      </>
    );
  }
}

const mapState = state => ({
  user: state.user,
  info: state.info,
  error: state.error
});

export default withRouter(connect(mapState)(AppComponent));
