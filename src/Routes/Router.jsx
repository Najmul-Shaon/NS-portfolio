import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Portfolios/Skills/Skills";
import Portfolios from "../Pages/Portfolios/Portfolios";
import Educations from "../Pages/Portfolios/Educations/Educations";

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
        children: [
          {
            path: "projects",
            element: <h3>Projects</h3>,
          },
          {
            path: "skills",
            element: <Skills></Skills>,
          },
          {
            path: "education",
            element: <Educations></Educations>,
          },
          {
            path: "experience",
            element: <h3>Experience</h3>,
          },
        ],
      },
    ],
  },
]);
