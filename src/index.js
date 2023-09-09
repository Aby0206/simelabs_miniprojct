import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import header from './components/header/header';
import LeaveForm from './components/leave/leave';
import AddEmployee from './components/add_emp/add.emp';
import EmployeeList from './components/emp_list/emp_list';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AddEmployee onAddEmployee={handleAddEmployee} /> */}
  

  </React.StrictMode>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
