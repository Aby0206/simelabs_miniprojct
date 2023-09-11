import React, { useEffect, useState } from 'react';
import './leave.css';

const LeaveForm = ({ employees}) => {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const[employeeArray,setEmployeeArray] = useState([])
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const[errorMessage,setError]= useState(false)
  async function onSubmitHandler(e){

  }
  useEffect(()=>{
    setEmployeeArray(JSON.parse(localStorage.getItem('employees')))
    console.log(employeeArray)
  },[employeeArray])
  const handleSubmit = (e) => {
    e.preventDefault();
    const leaveData = {
      employeeId: selectedEmployeeId,
      leaveType,
      startDate,
      endDate,
    };

    // onSubmitLeave(leaveData);
    if(selectedEmployeeId&&leaveType&&startDate&&endDate){
      let leaveRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
      leaveRequests.push(leaveData);
      localStorage.setItem('leaveRequests', JSON.stringify(leaveRequests));
    }
    else{
      setError(true)
    }

    setSelectedEmployeeId('');
    setLeaveType('');
    setStartDate('');
    setEndDate('');

  };

  return (
    <div className="leave-form">
      <h2>Leave Request Form</h2>
  
      {errorMessage?<p style={{"color":"red"}}>Values not entered</p>:""}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Employee:</label>
          <select
            value={selectedEmployeeId}
            onChange={(e) => setSelectedEmployeeId(e.target.value)}
            
          >
            <option value="" disabled>
              Select an employee
            </option>
            {employeeArray?.map((employee) => {
              return(
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
              )
            }
            )}
          </select>
        </div>
        <div className="form-group">
          <label>Reason:</label>
          <input
            type="text"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveForm;
