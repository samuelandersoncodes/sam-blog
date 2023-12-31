import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Sam's Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;