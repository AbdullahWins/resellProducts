import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Categories from "../pages/Products/Categories/Categories";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";
import Category from "../pages/Products/Categories/Category/Category";
import Promoted from "../pages/Products/Promoted/Promoted";
import Bookings from "../pages/Products/Bookings/Bookings";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes";
import MyProducts from "../pages/Products/MyProducts/MyProducts";
import Users from "../pages/Users/Users";
import ErrorPage from "../pages/Blogs/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/category/:cateName",
        element: (
          <PrivateRoute>
            <Category></Category>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://gamecheap-server.vercel.app/category/${params.cateName}`
          ),
      },

      {
        path: "/promoted",
        element: <Promoted></Promoted>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://gamecheap-server.vercel.app/blogs"),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/allusers",
        element: (
          <PrivateRoute>
            <Users></Users>
          </PrivateRoute>
        ),
      },
      {
        path: "/myproducts",
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/products",
        element: <Products></Products>,
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
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
