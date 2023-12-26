const BlogList = ({ blogs, handleDelete }) => {

  return (
    <div className="blog-list">
      {blogs.map(({ title, id, author, }) => (
        <div className="blog-preview" key={id}>
          <h2>{title}</h2>
          <p>Written by {author}</p>
          <button onClick={() => handleDelete(id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;