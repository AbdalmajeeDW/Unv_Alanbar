import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import NotAllowedRoute from './components/NotAllowedRoute';
import Colleges from './pages/Colleges';
import Sections from './pages/Sections';
import Students from './pages/Students';
import Decisions from './pages/Decisions';
import UsersManagement from './pages/UsersManagement';
import RecycleBin from './pages/RecycleBin';



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/sections" element={<Sections />} />
        <Route path="/usersManagement" element={<UsersManagement />} />
        <Route path="/recycleBin" element={<RecycleBin />} />
        <Route path="/decisions" element={<Decisions />} />
      </Routes>
    </Router>
  );
}

export default App;
