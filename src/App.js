import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import UserAuth from './components/UserAuth';


function App() {
  const [currentUser, setCurrentUser] = useState('');

  return (
    <div className="App">
      <Header />
      <div className='container'>
        {  !currentUser && <UserAuth /> }
      </div>

      {/* <button><Link to={"/userauth"}>This is a test</Link></button> */}
    </div>
  );
}

export default App;
