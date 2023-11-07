
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";



// import axios from 'axios';


const Login = () => {
 
  const location=useLocation();
  console.log(location);
  
  const handleLogin = (e) => {
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);
    

    
  }
    return (
        <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-12">
       <img src="https://i.ibb.co/Q93hnhp/Tiny-people-standing-near-box-of-donation-food-for-delivery.jpg" alt="" />

    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    
      <form
      onSubmit={handleLogin}

       className="card-body">
      <h1 className="text-2xl font-bold text-center">Login </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name="email" 
          placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" 
          name="password"
          placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          
        <input type="submit"
        className="btn btn-primary"
         value="Login" />
        
        </div>
      </form>
      <p className="text-center font-semibold mb-4">New to here?Please<Link to="/signUp" className="underline text-orange-600">Sign Up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;