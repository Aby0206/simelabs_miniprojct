import React, { useState, useEffect } from 'react';
import './LeaveHistory.css'

const LeaveHistory = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    // Fetch leave requests from local storage or an API
    const storedLeaveRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
    setLeaveRequests(storedLeaveRequests);
  }, []);

  return (
    <div className="leave-history">
      <h2>Leave Request History</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((leaveRequest, index) => (
            <tr key={index}>
              <td>{leaveRequest.employeeId}</td>
              <td>{leaveRequest.leaveType}</td>
              <td>{leaveRequest.startDate}</td>
              <td>{leaveRequest.endDate}</td>
              <td>{leaveRequest.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveHistory;
