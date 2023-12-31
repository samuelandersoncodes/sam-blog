import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <div className="content">
        </div>
      </div>
    </Router>
  );
}

export default App;
