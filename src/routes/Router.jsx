import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import LandingPage from "../pages/LandingPage";


export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children : [
            {path:"/",element:<LandingPage/>},
        ]
    }
])