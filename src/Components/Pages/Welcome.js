import React from 'react';
import '../../App.css';
import Button  from '../Navbar/ButtonLogin';
import '../Styles/Welcome.css';


function Welcome() {
  return (
    <div className='welcome-container'>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='welcome-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          START TO READ
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          START TO WRITE
        </Button>
      </div>
       </div>

 );
}

export default Welcome;