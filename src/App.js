import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LeaveForm from './components/leave/leave';
import EmployeeList from './components/emp_list/emp_list';
import AddEmployee from './components/add_emp/add.emp';
import Header from './components/header/header';
//import LeaveHistory from './components/leave/LeaveHistory';
// import LeaveHeader from './components/header/LeaveHeader';
// import EmployeeListHeader from './components/header/EmployeeListHeader';
// import AddEmployeeHeader from './components/header/AddEmployeeHeader';

function App() {
  return (
    <Router>
      {/* Include the appropriate header component for each route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaveapp" element={<LeaveForm />} />
        <Route path="/listener" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
        {/* <Route path="/history" element={<LeaveHistory />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
