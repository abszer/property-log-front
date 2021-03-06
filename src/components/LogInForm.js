import React from 'react';
import '../css/LogInForm.css'

const LogInForm = () => {
  return (
       <form className="login-form">
            <input type="text" className="text-input" name="username" placeholder="Username"/>
            <input type="text" className="text-input" name="password" placeholder="Password"/>
            <input className='btn-primary' type="submit" value="Go"/>
       </form>
  )
};

export default LogInForm;