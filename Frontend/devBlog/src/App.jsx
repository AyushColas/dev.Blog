import { useState } from 'react';
import LandingPage from './Pages/LandingPage';
import './output.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
