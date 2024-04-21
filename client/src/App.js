import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Sign from './pages/signup';
import Login from './pages/login';
import Project from './pages/uploadProject'
import { AuthProvider } from './pages/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider> {/* Wrap your entire application with AuthProvider */}
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Sign />} />
            <Route path="/login" element={<Login />} />
            <Route path='/uploadProject' element={<Project />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
