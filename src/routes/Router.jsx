import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import React, { Suspense, lazy } from "react";

// Lazy load the pages
const InitialLandingPage = lazy(() => import("../pages/InitialLandingPage"));
const ContactUs = lazy(() => import("../pages/ContactUsPage"));
const AboutUs = lazy(() => import("../pages/About"));
const Loader = lazy(() => import("../components/Loader"));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader/>}>
            <InitialLandingPage />
          </Suspense>
        ),
      },
   
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<Loader/>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader/>}>
            <AboutUs />
          </Suspense>
        ),
      },
    ],
  },
]);
