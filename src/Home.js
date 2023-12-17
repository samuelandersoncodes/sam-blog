import { useState } from 'react';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My Django Journey', body: 'I have built 2 projects', author: 'Sam', id: 1 },
    { title: 'My React Journey', body: 'I just started', author: 'Sam', id: 2 },
    { title: 'Unittest', body: 'I always use it', author: 'Sam', id: 3 }
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;