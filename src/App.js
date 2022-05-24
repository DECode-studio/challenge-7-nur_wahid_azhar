import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Sewa from './pages/Sewa';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/sewa" element={<Sewa />} />
      </Routes>
    </Router>
  );
}

export default App;
