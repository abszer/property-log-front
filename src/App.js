import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { increment } from './actions/actions.js'
import './css/App.css';
import Header from './components/Header';
import UserAuth from './components/UserAuth';
import Home from './components/Properties/Home';


function App() {
  // EXAMPLE
  // const counter = useSelector(state => state.counter)
  // const dispatch = useDispatch();
        // onClick={() => {dispatch(increment())}}

  const [currentUser, setCurrentUser] = useState('test');

  return (
    <div className="App">
      <Header />
      <div className='container'>
        {  !currentUser && <UserAuth /> }
        { currentUser && <Home />}
      </div>

      {/* <button><Link to={"/userauth"}>This is a test</Link></button> */}
    </div>
  );
}

export default App;
