import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword,
     getAuth, onAuthStateChanged, 
    signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosHook from "../hooks/UseAxiosHook";

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const[user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure=useAxiosHook();
    // user creation with email and password function
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login with email and password function
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout function
    const logOut=()=>
    {
        setLoading(true);
        return signOut(auth);   
    }
    // signUpWitHGoogle
    const provider = new GoogleAuthProvider();
    const signUpWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

   
    // checking the states of user
    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth,
         (currentUser)=>{
            // const userEmail=currentUser?.email ||user?.email;
            // const loggedEmail={
            //     email:userEmail
                
            // }
            // name:currentUser?.displayName ||user?.displayName
            // const userName=currentUser?.displayName ||user?.displayName;
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
            // if(currentUser)
            // {
               
            //     axiosSecure.post('jwt',loggedEmail,{withCredentials:true})
            //     .then((res)=>{
            //         console.log(res);
            //     })
                
            // }
            // else{
            //     axiosSecure.post('/logout',loggedEmail,{withCredentials:true})
            //     .then((res)=>{
            //         console.log(res);
            //     })
            // }
            
        });
        return()=>{
            unsubscribe();

        }
    },[]);

  
    const authInfo={
        user,
        createUser,loading,
        login,logOut,signUpWithGoogle,
        setLoading
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;