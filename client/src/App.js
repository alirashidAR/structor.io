import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Sign from './pages/signin';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Sign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
