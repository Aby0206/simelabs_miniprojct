import React from 'react'
import Header from '../header/header'
import './home.css';
//import officeImage from '../img/first.jpg'


const Home = () => {
  return (
  <div>
    <div className='home_des'>
        <Header />
      <h1 style={
        {textAlign: 'center',
        textDecoration: 'underline'}
      }>Employee Management System</h1>

      <h2 style={{textAlign:'center'}}>A System for Total Management of Employees Data and Maintanence.</h2>     
    </div>

    <div className='user_data'>
      <img
        src= './img/first.jpg'
        alt='office_image1'
        className='centered-image'
      />
    </div>


  </div>  
  )
}

export default Home