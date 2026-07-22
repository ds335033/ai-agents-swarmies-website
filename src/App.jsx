import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import CheckoutPage from './pages/CheckoutPage';
import AcademyDashboard from './pages/AcademyDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/academy/*" element={<AcademyDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
