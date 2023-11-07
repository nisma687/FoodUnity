import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext);

    const location=useLocation();
    
    if(loading){
        return <div>
            <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
             </div>
    }
   
    if(user){
        return children;
    }
     return <NavLink
    state={location.pathname}
     to="/logIn"></NavLink>
    
    
    // return (
    //     <div>
            
    //     </div>
    // );
};

export default PrivateRoute;