const Error = (props) => {
  console.log(props);
  const date = props.date ? props.date.toLocaleString() : '';
  const styles = { color: props.color || 'red' };

  return (
    <div className="error" style={styles}>
      <p>{props.text}</p>
      <p>{date}</p>
    </div>
  );
};

export default Error;
