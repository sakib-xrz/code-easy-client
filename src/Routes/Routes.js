import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import Blog from "../Components/Page/Blog/Blog";
import Checkout from "../Components/Page/Checkout/Checkout";
import Courses from "../Components/Page/Courses/Courses";
import Faq from "../Components/Page/Faq/Faq";
import Home from "../Components/Page/Home/Home";
import SingleCourse from "../Components/Page/SingleCourse/SingleCourse";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        element: <SingleCourse></SingleCourse>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkout/${params.id}`),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
