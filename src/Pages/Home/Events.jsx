import { useEffect,useState } from "react";
import useAxiosHook from "../../hooks/UseAxiosHook";
import { Link } from "react-router-dom";


const Events = () => {
    const axiosSecure=useAxiosHook();
    const [event,setevent]=useState([]);
    useEffect(()=>{
        axiosSecure.get('/events')
        .then(res=>{
            console.log(res);
            setevent(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    return (
        <div>
            <h3 className="text-xl text-center">
                Upcoming Events
            </h3>
           <div className="mt-2 mb-2 grid lg:grid-cols-3
           md:grid-cols-2 grid-cols-1">
           {
                event.map(e=><div 
                key={e._id}
                className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={e.image} alt="image loading" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">

                  <h2 className="card-title">{e.name}</h2>
                    <p>{e.description}</p>
                    <p>{e.date}</p>
                  
                  <div className="card-actions">
                    <Link className="btn btn-primary">Register Now</Link>
                  </div>
                </div>
              </div>)
            }
           </div>


        </div>
    );
};

export default Events;