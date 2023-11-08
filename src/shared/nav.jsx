import { Link, NavLink } from "react-router-dom";

import { IoFastFoodSharp } from "react-icons/io5";

import './nav.css';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(res=>{
      console.log('logged out',res);
    })
    .catch(err=>{
      console.log(err);
    })
  }
    const navLink=<>
    <li><NavLink to="/" activeclassname="active" >Home</NavLink></li>
    <li><NavLink to="/availfoods"
    activeclassname="active"
    >Available Foods</NavLink></li>
    
    
    <li><NavLink
    activeclassname="active"
     to="/register">Register</NavLink></li>
    {
      user && <>
        <li><NavLink to="/addfood">AddFoods</NavLink></li>
        <li><NavLink to="/myfood">Manage Foods</NavLink></li>
        <li><NavLink to="/requestfood">Food Request</NavLink></li>

      </>

    }

    {
      user?<li>
        <button>
        <Link to="/logout"
      onClick={handleLogOut}
      activeclassname="active"
      >LogOut</Link>
        </button>
      </li>:<li><NavLink to="/login"
      activeclassname="active"
      >Login</NavLink></li>
    }
    

    
   

    </>
    return (
        <div className="navbar bg-base-100">
        <div className="lg:w-[40%] justify-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case 
          font-sans font-bold
          text-xl">
            <IoFastFoodSharp className="h-5 w-5" />
            <span className="text-orange-500 "><i>FooD</i></span><i>Unity</i><span className="text-purple-700">Community</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    );
};

export default Navbar;