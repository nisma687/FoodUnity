
import { useContext, useState } from "react";

import { Link,  useNavigate } from "react-router-dom";

import { AuthContext } from "../../provider/AuthProvider";




const Register = () => {
    // const location=useLocation();
const navigate=useNavigate();
const [error,setError]=useState('');
const [success,setSuccess]=useState('');
const { createUser}=useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.name.value;
        const photoURL=form.photoURL.value;

        console.log(email,password,name,photoURL);

        // createUser(email,password)
        // .then(res=>{
        //     console.log(res.data);
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        setError('');
        setSuccess('');
        if(!email || !password || !name || !photoURL)
        {
          setError("Please enter all the fields");
          return;
        }
        else if(password.length<6)
        {
          setError("Password must be atleast 6 characters");
          return;
        }
        else if(!email.includes("@"))
        {
          setError("Please enter valid email");
          return;
        }
        
        createUser(email,password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          setSuccess("User created successfully");
          navigate('/login');
          // ...
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            // ..
            })
       
       
        
      }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-12">
             <img src="https://i.ibb.co/Q93hnhp/Tiny-people-standing-near-box-of-donation-food-for-delivery.jpg" alt="" />
      
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          
            <form
            onSubmit={handleRegister}
      
             className="card-body">
            <h1 className="text-2xl font-bold text-center">Register </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"
                name="name" 
                placeholder="Your Name" className="input input-bordered" required />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" 
                name="photoURL"
                placeholder="Your Photo Url" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                
              <input type="submit"
              className="btn btn-primary"
               value="Register" />
              
              </div>
            </form>
            <p className="text-center font-semibold mb-4">Have an account?Please<Link to="/login" className="underline text-orange-600">Login</Link></p>
            {
                error && <p className="text-red-500">{error}</p>
              }
              {
                success && <p className="text-green-500">{success}</p>
              }
          </div>
        </div>
      </div>
    );
};

export default Register;