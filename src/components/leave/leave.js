import React, { useEffect, useState } from 'react';
import './leave.css';

const LeaveForm = ({ employees }) => {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [employeeArray, setEmployeeArray] = useState([]);
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errorMessage, setError] = useState(false);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [successmsg, setSuccessmsg]  = useState('');

  useEffect(() => {
    setEmployeeArray(JSON.parse(localStorage.getItem('employees')));
    setLeaveRequests(JSON.parse(localStorage.getItem('leaveRequests')) || []);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const hasConflict = leaveRequests.some((request) => {
      return (
        request.employeeId === selectedEmployeeId &&
        ((startDate >= request.startDate && startDate <= request.endDate) ||
          (endDate >= request.startDate && endDate <= request.endDate))
      );
    });

    if (hasConflict) {
      setError(true);
    } else {
    
      const leaveData = {
        employeeId: selectedEmployeeId,
        leaveType,
        startDate,
        endDate,
      };

      let updatedLeaveRequests = [...leaveRequests, leaveData];
      localStorage.setItem('leaveRequests', JSON.stringify(updatedLeaveRequests));
      setLeaveRequests(updatedLeaveRequests);

      setSelectedEmployeeId('');
      setLeaveType('');
      setStartDate('');
      setEndDate('');
      setError(false);

      setSuccessmsg('Leave recorded')
    }
  };

  return (
    <div className="leave-form">
      <h2>Leave Request Form</h2>
      {errorMessage && <p style={{ color: 'red' }}>Invalid Entry</p>}
      {successmsg && <p style={{ color: '#03e9f4'}}>{successmsg}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Employee</label>
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
          <label>Reason</label>
          <input
            type="text"
            value={leaveType}
            placeholder='Enter Reason'
            onChange={(e) => setLeaveType(e.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            
          />
        </div>
        <button type="submit" className='btn-sbmt'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit</button>
      </form>
    </div>
  );
};

export default LeaveForm;
