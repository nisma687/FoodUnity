import { Link } from "react-router-dom";


const LogOut = () => {
    // const navigate=useNavigate();
    return (
        <div className="text-center">
            <h2 className="text-2xl text-purple-700">You have been successfully Logged Out</h2>
            <h3 className="text-xl text-purple-500">Thank You for using our services</h3>
            <h4 className="text-xl text-purple-400">Until next time,Take Care</h4>
            <Link to="/">
               Go to Home Page
            </Link>
        </div>
        
    );
};

export default LogOut;