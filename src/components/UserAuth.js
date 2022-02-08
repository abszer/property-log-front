import React from 'react';
import '../css/UserAuth.css';

const UserAuth = () => {
  return (
       <div className='auth-form'>
           <form>
                <button>Log In</button>
                <button>Create Account</button>
           </form>
       </div>
  )
};

export default UserAuth;
