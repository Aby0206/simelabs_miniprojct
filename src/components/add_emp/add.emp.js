import React, { useState } from "react";
import "./addemp.css";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({ id: "", name: "", role: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleAddClick = () => {
    const existingEmployees =
      JSON.parse(localStorage.getItem("employees")) || [];
    const isEmployee = existingEmployees.findIndex(
      (data) => parseInt(data.id) === parseInt(employee.id)
    )
    if (isEmployee >= 0) {
      setIsFailure(true);
      setIsSuccess(false);
    } else {
      if (employee.id && employee.name && employee.role) {
        const updatedEmployees = [...existingEmployees, employee];
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
        setEmployee({ id: "", name: "", role: "" });
        setIsSuccess(true);
        setIsFailure(false);
      } else {
        setIsFailure(true);
        setIsSuccess(false);
      }
    }
  };

  return (
    <div className="addemp">
      <h2>Add Employee</h2>
      {isSuccess && <p className="success-msg">Addition Successful</p>}
      {isFailure && (
        <p className="failure-msg">Unsuccessful, Please Fill All Fields</p>
      )}
      <div>
        <label>Id</label>
        <input
          type="number"
          name="id"
          value={employee.id}
          onChange={handleInputChange}
          placeholder="Enter Employee Id"
          id={`id_${employee.id}`} // Unique ID generation
        />
      </div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleInputChange}
          placeholder="Enter Name of Employee"
          id={`name_${employee.id}`} // Unique ID generation
        />
      </div>
      <div>
        <label>Role</label>
        <input
          type="text"
          name="role"
          value={employee.role}
          onChange={handleInputChange}
          placeholder="Enter the Role"
          id={`role_${employee.id}`} // Unique ID generation
        />
      </div>
      <button onClick={handleAddClick} class="btn-submit">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
        Add Employee</button>
    </div>
  );
};

export default AddEmployee;
