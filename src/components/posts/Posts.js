const Posts = ({posts}) => (
  posts
    ? (
      <ul>
        {
          posts.map(el => <li key={el.id}>{el.title}</li>)
        }
      </ul>
    ) : null
);

export default Posts;
