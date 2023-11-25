import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components//HeaderComponent"
import BodyComponent from "./src/components/BodyComponent";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const RestaurantAppComponent = () => {
    return(
        <div className = "container">
            <HeaderComponent />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <RestaurantAppComponent />,
        children: [
            {
                path: "/",
                element : <BodyComponent />
            },
            {
                path: "/About",
                element : <About />
            },
            {
                path: "/Contact",
                element: <Contact />
            }
          ],
          errorElement: <Error />
    }
])
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router= { appRouter }/>);
