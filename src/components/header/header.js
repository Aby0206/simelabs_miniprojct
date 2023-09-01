import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import LeaveRequestForm from '../leave/leave';

function Header() {
  return (
    <header>
      <nav>
        <ul className='horizontal-list'>
          <li><a href="/Home">Home</a></li>
          <li><a href="/add">Add Employee</a></li>
          <li><Link to="/listner">Employee Listener</Link></li>
          <li><a href="/leaveapp">Leave Application</a></li>
          <li><a href="/leave">Leave History</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
