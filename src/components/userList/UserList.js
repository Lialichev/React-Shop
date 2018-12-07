import User from '../user';

const UserList = ({items, handleClick}) => (
  <ul>
    {
      items.map(el => <li key={el.id} onClick={() => handleClick(el)}>{el.username}</li>)
    }
  </ul>
);

export default UserList;
