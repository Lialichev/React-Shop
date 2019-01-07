import Login from '../../pages/login';
import UserInfo from '../../pages/userInfo';
import {Tab, Tabs} from '../tabs';

import './main.scss';

const tabs = [
  {title: 'Tab 1', content: 'Some text is here'},
  {title: 'Tab 2', content: 'Another content'},
  {title: 'Tab 1', content: 'Third text'}
];

class Main extends Component {
  renderContent() {
    const {user, onLogin, info} = this.props;

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

    return (
      <main className="main">
        <Tabs>
          <Tab title="Tab 1">
            <h3>Tab header 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis distinctio ducimus ipsa iure
              nisi porro possimus suscipit ullam? Atque blanditiis distinctio illum molestias obcaecati placeat quia,
              quos vero voluptate?</p>
          </Tab>
          <Tab title="Tab 2">
            <h3>Tab header 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis distinctio ducimus ipsa iure
              nisi porro possimus suscipit ullam? Atque blanditiis distinctio illum molestias obcaecati placeat quia,
              quos vero voluptate?</p>
          </Tab>
          <Tab title="Tab 3">
            <h3>Tab header 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis distinctio ducimus ipsa iure
              nisi porro possimus suscipit ullam? Atque blanditiis distinctio illum molestias obcaecati placeat quia,
              quos vero voluptate?</p>
          </Tab>
        </Tabs>
      </main>
    );
  }
}


export default Main;
