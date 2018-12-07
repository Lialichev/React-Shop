const Error = ({ date, text, color = 'red' }) => {
  const dateNow = date ? date.toLocaleString() : '';
  const styles = { color };

  return (
    <div className="error" style={styles}>
      <p>{text}</p>
      <p>{dateNow}</p>
    </div>
  );
};

export default Error;
