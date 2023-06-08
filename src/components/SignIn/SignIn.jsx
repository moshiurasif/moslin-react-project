import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';


const SignIn = () => {
  const {loginUser, resetPassword} = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState(false)
  const [userEmail, setUserEmail] = useState("");
  const handleSignIn = e =>{
    e.preventDefault();
    
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
  .then((result) => {
    // Signed in 
    const user = result.user;
    console.log(user);
    setUser(user);
    setSuccess(true)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  const handleEmailBlur = e =>{
    e.preventDefault();
    const email = e.target.value;
    setUserEmail(email);
  }
  const handleForgetPassword = () =>{
    if (!userEmail) {
      alert("Please input your email address");
      return;
    }
    resetPassword(userEmail)
  .then(() => {
    alert("Please check your email and reset password.")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
    return (
        <>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Welcome {user.email}</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onBlur={handleEmailBlur} type="email" placeholder="email" className="input input-bordered" name="email"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" name="password"/>
          <label className="label">
            Forgot password?
            <button className="btn btn-link label-text-alt link link-hover" onClick={handleForgetPassword}>Please Reset</button>
          </label>
          <p>
        Don't have a account? Please 
         <Link to="/signup" className="link link-hover text-purple-600"> Sign Up</Link>
       </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        {
          success && <p className='text-success'>Successfully login your account</p>
        }
        
      </form>
    </div>
  </div>
</div> 
        </>
    );
};

export default SignIn;