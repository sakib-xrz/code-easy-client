import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
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
