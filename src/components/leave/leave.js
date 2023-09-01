import React, { useState } from 'react';
import './leave.css'
import '../emp_list/emp.json';



const LeaveRequestForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      startDate: startDate,
      endDate: endDate,
      reason: reason
    };

    // Convert the formData object to a JSON string and store it in local storage
    localStorage.setItem('leaveRequestData', JSON.stringify(formData));

    // Optionally, you can show an alert or some feedback to the user
    alert('Leave request data saved to local storage!');
  };

  return (
    <div className='leave_form'>
      <h2>Leave Request</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label> <br />
        <br />

        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label> <br />
        <br />

        <label>
          Reason:
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </label> <br />
        <br />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};



export default LeaveRequestForm;
