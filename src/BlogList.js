import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs }) => {

  return (
    <div className="blog-list">
      {blogs.map(({ title, id, author, }) => (
        <div className="blog-preview" key={id}>
          <Link to={`/blogs/${id}`}>
            <h2>{title}</h2>
            <p>Written by {author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;