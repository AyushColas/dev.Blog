import { useState } from 'react';
import LandingPage from './Pages/LandingPage';
import './output.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import LoginPage from './Pages/LoginPage';


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/Landing" element={<LandingPage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
