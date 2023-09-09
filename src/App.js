import { useState } from 'react';
import Header from './components/header/header';
import EmployeeList from './components/emp_list/emp_list';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LeaveRequestForm from './components/leave/leave';
import AddEmployee from './components/add_emp/add.emp';


function App() {
  return (
    
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaveapp" element={<LeaveRequestForm />} />
        <Route path="/listner" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
      </Routes>
    </Router>    
  );
}



export default App;
