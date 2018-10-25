import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Things from './screens/Things';
import FavoriteThings from './screens/FavoriteThings';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (

    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/FavoriteThings">FavoriteThings</Link>
        </li>
      </ul>

      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/FavoriteThings" component={FavoriteThings} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));