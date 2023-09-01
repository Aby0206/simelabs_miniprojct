import React from 'react';

const employees = [
  { id: 1, name: 'joe Vargheese', role: 'Developer' },
  { id: 2, name: 'Divya Mathew', role: 'Designer' },
  { id: 3, name: 'Derrick Sebastian', role: 'Director' },
  { id: 4, name: 'Aby Antony', role: 'Developer' }
  
];

const EmployeeList = () => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li style={{}} key={employee.id}>
            ID: {employee.id}, Name: {employee.name}, Role: {employee.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

const employeesJSON = JSON.stringify(employees);

localStorage.setItem('employeesData', employeesJSON);

// Retrieve the JSON string from local storage
const storedEmployeeJSON = localStorage.getItem('employeeData');

// Convert the JSON string back to an object
const storedEmployee = JSON.parse(storedEmployeeJSON);

console.log(storedEmployee);


export default EmployeeList;



