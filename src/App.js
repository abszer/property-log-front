import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import LogInForm from './components/LogInForm';

function App() {
  const [logInVisible, setLogInVisible] = useState(false)
  const [createAccountVisible, setCreateAccountVisible] = useState(false)

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='welcome'>
          <h2>Log In or Create Account</h2>
          <div className='btn-container'>
            <button onClick={ () => {setLogInVisible(true); setCreateAccountVisible(false)} } className='btn-primary'>
              Log In
            </ button>
            <button onClick={ () => {setLogInVisible(false); setCreateAccountVisible(true)} } className='btn-primary'>
              Create Account
            </button>
          </div>
          { logInVisible && <LogInForm /> }
        </div>
      </div>

      {/* <button><Link to={"/userauth"}>This is a test</Link></button> */}
    </div>
  );
}

export default App;
