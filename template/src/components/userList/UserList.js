import User from '../user';

const UserList = ({ users }) => (
  <ul>
    {
      users.map(el => <User key={el.id} firstName={el.firstName} lastName={el.lastName} age={el.age} />)
    }
  </ul>
);

export default UserList;
