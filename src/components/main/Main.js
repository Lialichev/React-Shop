import Login from '../../pages/login';
import UserInfo from '../../pages/userInfo';
import {Tab, Tabs} from '../tabs';
import Loader from '../loader';

import './main.scss';

class Main extends Component {

  render() {
    return (
      <main className="main">
        {this.props.children}
        {/*<Loader show={true} />*/}
      </main>
    );
  }
}


export default Main;
