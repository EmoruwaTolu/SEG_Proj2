import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './pages/navbar/navbar';
import Events from './pages/events/events';
import Volunteer from './pages/volunteer/volunteer';
import Soccer from './pages/sports-pages/soccer';
import Basketball from './pages/sports-pages/basketball';
import Volleyball from './pages/sports-pages/volleyball';
import Library from './pages/sports-pages/library';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/events" Component={Events} />
          <Route path="/volunteer" Component={Volunteer} />
          <Route path="/facilities/sports/soccer" Component={Soccer} />
          <Route path="/facilities/sports/basketball" Component={Basketball} />
          <Route path="/facilities/sports/volleyball" Component={Volleyball} />
          <Route path="/facilities/libraries" Component={Library} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
