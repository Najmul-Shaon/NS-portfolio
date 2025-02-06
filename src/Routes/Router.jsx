import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <RootLayout></RootLayout>,
    element: <Home></Home>,

    errorElement: <ErrorPage></ErrorPage>,
    // children: [
    //   {
    //     path: "/",
    //     element: <Home></Home>,
    //   },
    // ],
  },
]);
