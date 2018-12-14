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
    date: true,
    data: {}
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({users}))

    setTimeout(() => {
      this.setState({
        data: {
          email: 'lya@test.com',
          name: 'Vladislav',
          surname: 'Lyalichev'
        }
      });
    }, 200);
  }

  onSave = (data) => {
    console.log(data);
  };

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
    const {users, data} = this.state;
    const testFn = text => console.log(text);

    return (
      <main className="main" title={title}>
        {/*<Aside/>*/}
        {/*<Content/>*/}
        {/*<UserList items={users} handleClick={this.showUserName}/>*/}
        <Form data={data} onSave={this.onSave}/>
        {/*<RenameText testValue={testFn} />*/}
      </main>
    );
  }
}

export default Main;
