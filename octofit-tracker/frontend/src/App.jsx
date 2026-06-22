import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Users from './pages/Users';
import Activities from './pages/Activities';

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </div>
    </div>
  );
}
