import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Portfolios/Skills/Skills";
import Portfolios from "../Pages/Portfolios/Portfolios";
import Educations from "../Pages/Portfolios/Educations/Educations";
import Projects from "../Pages/Portfolios/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/portfolio",
        element: <Portfolios></Portfolios>,
      },
    ],
  },
]);
