
import { Link } from "react-router-dom";

const Error = () => {
    return (
        
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/8sGrqp7/5203299.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">OPPS!!!
      <br />
       Something Error Occured</h1>
      <p className="py-6">404 not found</p>
      <Link 
      to="/"
      className="btn btn-primary">Go Back</Link>
    </div>
  </div>
</div>
      
    );
};

export default Error;