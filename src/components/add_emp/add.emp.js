import React, { useState } from 'react';
import './addemp.css';


const AddEmployee = () => {
  const [employee, setEmployee] = useState({ id: '', name: '', role: '' });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleAddClick = () => {
    const existingEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    
    
    const isEmployeeExists = existingEmployees.some((emp) => emp.id === employee.id);
  
    if (isEmployeeExists) {
      setIsFailure(true);
      setIsSuccess(false);
    } else if (employee.id && employee.name && employee.role) {
      const updatedEmployees = [...existingEmployees, employee];
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      setEmployee({ id: '', name: '', role: '' });
      setIsSuccess(true);
      setIsFailure(false);
    } else {
      setIsFailure(true);
      setIsSuccess(false);
    }
  };
  
  

  return (
    <div className='addemp'>
      <h2>Add Employee</h2>
      {isSuccess && <p className='success-msg'>Addition Successfull</p>}
      {isFailure && <p className='failure-msg'>Unsuccessfull, Please Fill All fields</p>}
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
