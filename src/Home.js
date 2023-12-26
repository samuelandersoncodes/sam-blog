import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My Django Journey', body: 'I have built 2 projects', author: 'Sam', id: 1 },
    { title: 'My React Journey', body: 'I just started', author: 'Sam', id: 2 },
    { title: 'Unittest', body: 'I always use it', author: 'Sam', id: 3 }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
}

export default Home;