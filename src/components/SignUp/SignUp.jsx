import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';


const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const [user, setUser] = useState();
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleSignUp = event =>{
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (!/[0-9]/.test(password)) {
      setErrorText("Your password must contain at least one digit.");
      return;
  }
  if (!/[a-z]/i.test(password)) {
    setErrorText("Your password must contain at least one letter."); 
    return;
}
    if (password.length <! 8) {
      setErrorText("Your password must be at least 8 characters")
      return;
    }
    setErrorText("");
    createUser(email, password)
  .then((result) => {
    // Signed in 
    const user = result.user;
    setUser(user);
    setSuccess(true)
    form.reset();
    verifyEmail();

    updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    }).then(() => {
     console.log(user);
    }).catch((error) => {
      // An error occurred
      // ...
    });
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorText(errorMessage);
    // ..
  });
  }

  const verifyEmail = ()=>{
    sendEmailVerification(auth.currentUser)
    .then(() => {
      alert("check your email and verify");
    });
  }
    return (
        <>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row">
 <div className="text-center lg:text-left">
   <h1 className="text-5xl font-bold">Sign Up</h1>
   <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
 </div>
 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
   <form onSubmit={handleSignUp} className="card-body">
     <div className="form-control">
       <label className="label">
         <span className="label-text">Name</span>
       </label>
       <input type="text" placeholder="Your name" className="input input-bordered" name="name"/>
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="email" placeholder="email" className="input input-bordered" name="email"/>
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Photo</span>
       </label>
       <input type="file" placeholder="photo" className="input" name="photo"/>
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="text" placeholder="password" className="input input-bordered" name="password"/>
       <p>
        Already Register User? Please 
         <Link to="/signin" className="link link-hover text-purple-600"> Sign In</Link>
       </p>
     </div>
     <div className="form-control mt-6">
       <button className="btn btn-primary">Sign UP</button>
     </div>
     
     {
      success ? <p className='text-success'>Successfully create a account </p>: <p className='text-red-600'>{errorText}</p>
     }
   </form>
 </div>
</div>
</div> 
     </>
    );
};

export default SignUp;