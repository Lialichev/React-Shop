import Aside from '../aside';
import Content from '../content';
import UserList from '../userList';
import Form from '../form';
import RenameText from '../renameText';

import './main.scss';

class Main extends Component {
  state = {users: []};

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({users}))
  }

  showUserName(user) {
    alert(user.username);
  }

  render() {
    const {title} = this.props;
    const {users} = this.state;
    const testFn = text => console.log(text);

    return (
      <main className="main" title={title}>
        {/*<Aside/>*/}
        {/*<Content/>*/}
        {/*<UserList items={users} handleClick={this.showUserName}/>*/}
        <Form/>
        <RenameText testValue={testFn} />
      </main>
    );
  }
}

export default Main;
