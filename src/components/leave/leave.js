import React, { useState } from 'react';
import './leave.css';

const LeaveForm = ({ employees, onSubmitLeave }) => {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields here

    const leaveData = {
      employeeId: selectedEmployeeId,
      leaveType,
      startDate,
      endDate,
    };

    onSubmitLeave(leaveData);
  };

  return (
    <div className="leave-form">
      <h2>Leave Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Employee:</label>
          <select
            value={selectedEmployeeId}
            onChange={(e) => setSelectedEmployeeId(e.target.value)}
            required
          >
            <option value="" disabled>
              Select an employee
            </option>
            {employees?.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Reason:</label>
          <input
            type="text"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveForm;
