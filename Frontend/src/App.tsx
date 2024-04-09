import React from "react";
import Home from "./Pages/Home";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthNavbar, Banner } from "./Component/Banner/Banner";
import Footer from "./Component/Footer/Footer";
import About from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import BreadCrump from "./Component/BreadCrump/BreadCrump";
import Career from "./Pages/Career/Career";
import Job from "./Pages/Job/Job";

export const PageLayout = () => {
  return (
    <div className="w-full flex-col flex items-center justify-center">
      <AuthNavbar />
      <BreadCrump/>
      <Outlet />
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,

      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <About />,
          path: "/about",
        },
        {
          element: <Project />,
          path: "/project",
        },
        {
          element: <Services />,
          path: "/service",
        },
        {
          element: <Contact />,
          path: "/contact",
        },
        {
          element: <Career />,
          path: "/career"
        },
        {
          element: <Job />,
          path: "/career/job"
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
