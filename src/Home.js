import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My Django Journey', body: 'I have built 2 projects', author: 'Sam', id: 1 },
    { title: 'My React Journey', body: 'I just started', author: 'Sam', id: 2 },
    { title: 'Unittest', body: 'I always use it', author: 'Sam', id: 3 }
  ]);

  return (
    <div className="home">
      <BlogList />
    </div>
  );
}

export default Home;