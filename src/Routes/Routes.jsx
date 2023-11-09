
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import App from "../App";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LogOut from "../Pages/LogOut";
import PrivateRoute from "./PrivateRoute";
import AllAvailableFoods from "../Pages/AllAvailableFoods/AllAvailableFoods";
import AddFoods from "../Pages/AddFoods/AddFoods";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";
import ManageFood from "../Pages/ManageFood/ManageFood";
import Update from "../Pages/Update/Update";
import Error from "../Pages/Error";
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
          path:'/availfoods',
          element:<AllAvailableFoods/>
        },
        {
          path:'/addfood',
          element:<PrivateRoute>
            <AddFoods/>
          </PrivateRoute>

        },
        {
          path:'/requestfood',
          element:<PrivateRoute>
            <FoodRequest />
          </PrivateRoute>,

        },
        {
          path:'/featured/:id',
          element:<PrivateRoute>
            <FoodDetails />
          </PrivateRoute>,
          loader:({params})=>fetch(`https://food-unity-network-server.vercel.app/featured/${params.id}`)

          
        },
        {
          path:'/update/:id',
          element:<PrivateRoute>
            <Update />
          </PrivateRoute>,
          loader:({params})=>fetch(`https://food-unity-network-server.vercel.app/featured/${params.id}`)
        },
        {
          path:'/myfood',
          element:<PrivateRoute>
            <ManageFood />
          </PrivateRoute>,
        },
       
        
         

        
      ]
      
    },
    {
      path:'*',
      element:<Error/>
    }
  ]);


export default router;