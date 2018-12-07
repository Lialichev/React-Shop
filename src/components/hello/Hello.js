const Hello = ({ name }) => {
  const time = new Date().getHours();
  let timesOfDay;

  if (time >= 3 && time < 12) timesOfDay = 'Good morning!';
  if (time >= 12 && time < 18) timesOfDay = 'Good afternoon!';
  if (time >= 18 && time < 22) timesOfDay = 'Good evening!';
  if (time >= 22 || time < 3) timesOfDay = 'Good night!';

  return (
    <p>{name ? timesOfDay.replace('!', `, ${name}!`) : timesOfDay}</p>
  );
};

export default Hello;
