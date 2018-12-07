import './content.scss';
import Hello from '../hello';
import Number from '../number';
import UserList from '../userList';
import Counter from '../counter';

const users = [
  {
    id: 0,
    firstName: 'John',
    lastName: 'Samuray',
    age: 18
  },
  {
    id: 1,
    firstName: 'Melody',
    lastName: 'Sacura',
    age: 22
  },
  {
    id: 2,
    firstName: 'Hulk',
    lastName: 'Woznic',
    age: 17
  },
  {
    id: 3,
    firstName: 'Taylor',
    lastName: 'Swift',
    age: 25
  }
];

const Content = () => (
  <div className="content">
    <p>
      Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его
      корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард
      МакКлинток, профессор латыни из колледжа Hampden-Sydney
    </p>
    <Hello name="Vlad" />
    <Number from="1" to="7" even />
    {/*<UserList users={users} />*/}
    <Counter />
  </div>
);

export default Content;
