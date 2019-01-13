import Login from '../../pages/login';
import Products from '../products';
import UserInfo from '../../pages/userInfo';
import {Tab, Tabs} from '../tabs';
import Loader from '../loader';

import './main.scss';

const tabs = [
  {title: 'Tab 1', content: 'Some text is here'},
  {title: 'Tab 2', content: 'Another content'},
  {title: 'Tab 1', content: 'Third text'}
];

class Main extends Component {

  render() {
    const {user, onLogin, info} = this.props;

    return (
      <main className="main">
        {/*<>*/}
          {/*{*/}
            {/*user*/}
              {/*? <UserInfo user={user} info={info} />*/}
              {/*: <Login onLogin={onLogin} />*/}
          {/*}*/}
        {/*</>*/}
        {this.props.children}
        <Loader show={true} />
      </main>
    );
  }
}


export default Main;
