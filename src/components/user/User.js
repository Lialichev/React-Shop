const User = prop => (
  <li>{`Имя: ${prop.firstName} - Фамилия: ${prop.lastName} - Возраст: ${prop.age} `}</li>
);

export default User;
