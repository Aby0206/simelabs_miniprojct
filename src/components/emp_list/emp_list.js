import React, { useState, useEffect } from 'react';
// import AddEmployee from '../add_emp/add.emp';
// import LeaveForm from '../leave/leave';
// import LeaveHistory from '../leave/LeaveHistory';
import './emp_list.css';

const EmployeeList = () => {
  
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (newEmployee) => {
    
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);

    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  // const handleLeaveRequest = () => {
    
  // }

  const handleRemoveEmployee = (employeeId) => {
    const updatedEmployees = employees.filter(employee => employee.id !== employeeId);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  useEffect(() => {
    
    const fetchEmployees = () => {
      
      const fetchedEmployees = [
        { id: 1, name: 'Aby Antony', role: 'Developer' },
        { id: 2, name: 'Sibi Mathew', role: 'Developer' },
        { id: 3, name: 'Joe Varghese', role: 'Developer' },
        { id: 4, name: 'Safi Sulaiman', role: 'Unix programmer' },
        { id: 5, name: 'Dominic K Savio', role: 'Salesforce Developer' }  
      ];

      
      localStorage.setItem('employees', JSON.stringify(fetchedEmployees));

      
      setEmployees(fetchedEmployees);
      
    };

    const storedEmployees = localStorage.getItem('employees');

    if (storedEmployees) {
      
      setEmployees(JSON.parse(storedEmployees));
    } else {
      
      fetchEmployees();
    }
  }, []); 

  return (
    <div className='emplist'>
      <h2 id='emphd'>Employee List</h2>
      <ul id='empul'>
        {employees.map(employee => (
          <li className='emplisting' style={{}} key={employee.id}>
            ID: {employee.id}, Name: {employee.name}, Role: {employee.role}
            <button className='remve_btn' onClick={() => handleRemoveEmployee(employee.id)}>Remove</button>
          </li>
        ))}
      </ul>
       {/* <AddEmployee onAddEmployee={handleAddEmployee} /> 
       <LeaveForm employees={employees} onSubmitLeave = { handleLeaveRequest } /> */}
       {/* <LeaveHistory/> */}
    </div>
  );
};

export default EmployeeList;
