
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import App from "../App";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LogOut from "../Pages/LogOut";
// import axios from "axios";
// import Home from "../Pages/Home/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path:'/',
          element:<Home/>

        },
        {
          path:'/logOut',
          element:<LogOut/>

        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>

        },
        {
          path:'/featured/:id',
          element:<FoodDetails />,
          loader:({params})=>fetch(`http://localhost:5000/featured/${params.id}`)

          
        }
        
         

        
      ]
    },
  ]);


export default router;