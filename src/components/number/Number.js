const Number = ({ from, to, ...other }) => {
  const numbers = [];

  for (let i = parseInt(from, 10); i <= to; i++) {
    if (other.even && (i % 3 === 0 || i === 1)) numbers.push(i);
    if (other.odd && i % 2 === 0) numbers.push(i);
    if (!other.even && !other.odd) numbers.push(i);
  }

  return (
    <ul>
      {numbers.map((el, index) => <li key={index}>{el}</li>)}
    </ul>
  );
};


export default Number;
