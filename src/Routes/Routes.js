import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import Courses from "../Components/Page/Courses/Courses";
import Home from "../Components/Page/Home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/home",
            element: <Home></Home>
        },
        {
            path: "/courses",
            element: <Courses></Courses>
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>
        }
    ]
  },
]);
