import axios from "axios";

const axiosSecure=axios.create({
    baseURL:"https://food-unity-network-server.vercel.app",
    withCredentials:true,
})

const useAxiosHook = () => {
    return axiosSecure;
};

export default useAxiosHook;