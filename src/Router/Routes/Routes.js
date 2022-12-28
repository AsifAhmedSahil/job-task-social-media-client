import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import Media from "../../Pages/Media/Media";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },{
                path:"/signup",
                element:<SignUp/>
            },
            {
                path:"/about",
                element:<PrivateRoute><About/></PrivateRoute>
            },
            {
                path:"/media",
                element:<Media/>
            },
            {
                path:"/details/:id",
                element:<Details/>,
                loader: ({params})=> fetch(`http://localhost:5000/posts/${params.id}`)
            }
        ]
    }
])

export default router;