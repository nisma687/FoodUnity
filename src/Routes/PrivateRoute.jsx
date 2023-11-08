import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {  useLocation } from "react-router-dom";
import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext);
    // const navigate=useNavigate();
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
    // if(!user)
    // {
    //     navigate("/login");
    // }
     return <Navigate
    state={location.pathname}
     to="/login"></Navigate>
    
    
    // return (
    //     <div>
            
    //     </div>
    // );
};

export default PrivateRoute;