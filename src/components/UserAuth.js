import React, {useState, useEffect} from 'react';
import LogInForm from './LogInForm';
import CreateAccountForm from './CreateAccountForm';

const UserAuth = () => {
     const [logInVisible, setLogInVisible] = useState(true)
     const [createAccountVisible, setCreateAccountVisible] = useState(false)

     return (
          <div className='welcome'>
               <div className='btn-container'>
                    <button onClick={ () => {setLogInVisible(true); setCreateAccountVisible(false)} } className='btn-primary'>
                    Log In
                    </ button>
                    <button onClick={ () => {setLogInVisible(false); setCreateAccountVisible(true)} } className='btn-primary'>
                    Create Account
                    </button>
               </div>
               { logInVisible && <LogInForm /> }
               { createAccountVisible && <CreateAccountForm />}
     </div>
     )
};

export default UserAuth;
