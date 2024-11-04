import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import LandingPage from "../pages/LandingPage";
import ContactUs from "../pages/ContactUsPage";
import AboutUs from "../pages/About";

export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children : [
            {path:"/",element:<LandingPage/>},
            {path:"/contact-us",element:<ContactUs/>},
            {path:"/about",element:<AboutUs/>},
        ]
    }
])