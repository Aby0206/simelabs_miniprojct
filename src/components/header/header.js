import React from 'react';


function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/add">Add Employee</a></li>
          <li><a href="/listen">Employee Listener</a></li>
          <li><a href="/leave">Leave History</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
