import Aside from '../aside';
import Content from '../content';
import UserList from '../userList';
import Posts from '../posts';
import DateNow from '../date';
import Form from '../form';
import RenameText from '../renameText';

import './main.scss';

class Main extends Component {
  state = {
    users: [],
    posts: [],
    date: true
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({users}))
  }

  getUserPosts({id}) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => res.json())
      .then(posts => this.setState({posts}))
  }

  toggleDate() {
    this.setState({date: !this.state.date});
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
