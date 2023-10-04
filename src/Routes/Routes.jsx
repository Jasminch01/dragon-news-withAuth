import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import PostDetails from "../Components/PostDetails/PostDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivetRoute from "./PrivetRoute";

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <Layout></Layout>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=> fetch('categories.json')
            },
            {
                path : '/about',
                element : <div>About comming Soon</div>
            },
            {
                path : '/carrier',
                element : <div>Carrier comming Soons</div>
            },
            {
                path : '/postDetails/:id',
                element : <PrivetRoute><PostDetails></PostDetails></PrivetRoute>,
                loader : ()=> fetch('news.json')
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            }
        ]
    }
])

export default Routes;