import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LeaveRequestForm from './components/leave/leave';
import EmployeeList from './components/emp_list/emp_list';
import AddEmployee from './components/add_emp/add.emp';
import Header from './components/header/header';
// import LeaveHeader from './components/header/LeaveHeader';
// import EmployeeListHeader from './components/header/EmployeeListHeader';
// import AddEmployeeHeader from './components/header/AddEmployeeHeader';

function App() {
  return (
    <Router>
      {/* Include the appropriate header component for each route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaveapp" element={<LeaveRequestForm />} />
        <Route path="/listener" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
