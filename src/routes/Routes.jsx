import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root"
import Home from "../pages/Home/Home"
import About from "../pages/shared/Navbar/About";
import Career from "../pages/shared/Navbar/Career";
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children : [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            }

        ]
    }
]);

export default router;