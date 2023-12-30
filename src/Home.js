import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok) {
            throw Error('Could not fetch data for that resource');
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data)
          setIsPending(false);
        })
        .catch(err => {
          console.log(err.message);
        });
    }, 600);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;