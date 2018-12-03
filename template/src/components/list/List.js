const List = ({ items }) => (
  items
    ? (
      <ul>
        {
          items.map(({ id, name }) => <li key={id}>{name}</li>)
        }
      </ul>
    ) : null
);

export default List;
