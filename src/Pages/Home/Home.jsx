// import { useEffect, useState } from "react";
import { useContext } from "react";
import Banner from "./Banner";
// import useAxiosHook from "../../hooks/UseAxiosHook";
import Featured from "./Featured";
import { AuthContext } from "../../provider/AuthProvider";


const Home = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <h1 className='text-2xl mt-2 mb-2 italic
      font-bold text-purple-500
      text-center'>Welcome <br></br>To</h1>
      <h1 className='text-xl text-center italic
      text-orange-500 font-bold
      mb-2'>FOOD UNITY NETWORK</h1>
            {
                user && <h1 className="text-center text-xl font-bold my-5">{user?.displayName ||user?.email} </h1>
            }
            <Banner />
            <Featured />
        </div>
    );
};

export default Home;