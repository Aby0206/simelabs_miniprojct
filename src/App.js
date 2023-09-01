import { useState } from 'react';
import Header from './components/header/header';
import EmployeeList from './components/emp_list/emp_list';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import LeaveRequestForm from './components/leave/leave';


function App() {
  return (
    
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
       {/* <Route path="/listner" element={<EmployeeList />} /> */}
        <Route path="/leaveapp" element={<LeaveRequestForm />} />
        {/* Define your other routes */}
        <Route path="/listner" element={<EmployeeList/>} />
      </Routes>
    </Router>
  
    
    
  );
}



export default App;
