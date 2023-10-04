import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import PostDetails from "../Components/PostDetails/PostDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

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
                element : <div>About</div>
            },
            {
                path : '/carrier',
                element : <div>Carrier</div>
            },
            {
                path : '/postDetails/:id',
                element : <PostDetails></PostDetails>,
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