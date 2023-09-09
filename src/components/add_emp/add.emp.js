import React, { useState } from 'react';
import './addemp.css';


const AddEmployee = ({ onAddEmployee }) => {
  const [employee, setEmployee] = useState({ id: '', name: '', role: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleAddClick = () => {
   
    onAddEmployee(employee);

    
    const existingEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const updatedEmployees = [...existingEmployees, employee];
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    setEmployee({ id: '', name: '', role: '' });
  };

  return (
    <div className='addemp'>
      <h2>Add Employee</h2>
      <div>
        <label>ID:</label>
        <input type="text" name="id" value={employee.id} onChange={handleInputChange} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={employee.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Role:</label>
        <input type="text" name="role" value={employee.role} onChange={handleInputChange} />
      </div>
      <button onClick={handleAddClick}>Add Employee</button>
    </div>
  );
};



export default AddEmployee;
