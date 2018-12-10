import Aside from '../aside';
import Content from '../content';
import UserList from '../userList';
import Posts from '../posts';

import './main.scss';

class Main extends Component {
  state = {
    users: [],
    posts: false
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({users}))
  }

  showUserName({ id }) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => res.json())
      .then(posts => this.setState({posts}))
  }

  render() {
    const {title} = this.props;
    const {users, posts} = this.state;
    console.log(posts);

    return (
      <main className="main" title={title}>
        <Aside/>
        <Content/>
        <UserList items={users} handleClick={(e) => this.showUserName(e)}/>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Main;
