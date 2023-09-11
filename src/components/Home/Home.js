import React from 'react'
import Header from '../header/header'
import './home.css';
// import officeImage from './public/img/'


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
        src= '/second_office.jpg'
        alt='office_image2'
        className='centered-image'
      />
    </div>


  </div>  
  )
}

export default Home;