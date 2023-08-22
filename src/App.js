import { useState } from 'react';
import Header from './components/header/header';
import emp_list from './components/emp_list/emp_list';
import './App.css';
import { Router } from 'react-router-dom';

function App() {
  return (
    
    <div className='App'>
      <Header />
      <h1>Employee Management System</h1>
    </div>

    
  );
}

export default App;
