import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Portfolios from "../Pages/Portfolios/Portfolios";
import Contact from "../Pages/Contact/Contact";
import ProjectDetails from "../Pages/Portfolios/Projects/ProjectDetails/ProjectDetails";

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
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/portfolio/project/details/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);
