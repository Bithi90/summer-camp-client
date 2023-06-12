import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Dashboard from "../LayOut/Dashboard";
import MySelectedClasses from "../Pages/DashBoard/MySelectedClasses/MySelectedClasses";
import PrivateRoutes from "./PrivateRoutes";
import ManageUsers from "../Pages/DashBoard/ManageUsers/ManageUsers";
import Addclass from "../Pages/DashBoard/AddClass/Addclass";
import InstractorRoute from "./InstractorRoute";
import Payment from "../Pages/DashBoard/Payment/Payment";



   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'classes',
          element:<Classes></Classes>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:'selectedClasses',
          element:<MySelectedClasses></MySelectedClasses>
        },
        {
          path:'manageUser',
          element:<ManageUsers></ManageUsers>
        },
        {
          path:'addClass',
          element: <InstractorRoute><Addclass></Addclass></InstractorRoute>
        },
        {
          path: 'payment',
          element:<Payment></Payment>
        }
      ]
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
  ]);