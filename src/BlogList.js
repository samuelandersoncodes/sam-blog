const BlogList = ({blogs}) => {
  
  return (
    <div className="blog-list">
      {blogs.map(({title, id, author,}) => (
        <div className="blog-preview" key={id}>
          <h2>{title}</h2>
          <p>Written by {author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;