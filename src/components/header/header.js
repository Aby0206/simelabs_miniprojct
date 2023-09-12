import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      <nav>
        <ul className='horizontal-list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Employee</Link></li>
          <li><Link to="/listener">Employee listener</Link></li>
          <li><Link to="leaveapp">Leave Application</Link></li>
          <li><Link to="/history">Leave History</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
