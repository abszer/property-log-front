import React from 'react';
import '../css/CreateAccountForm.css'

const CreateAccountForm = () => {
  return (
       <form className="login-form">
            <input type="text" className="text-input" name="username" placeholder="Username"/>
            <input type="text" className="text-input" name="password" placeholder="Password"/>
            <input className='btn-primary' type="submit" value="Create"/>
       </form>
  )
};

export default CreateAccountForm;