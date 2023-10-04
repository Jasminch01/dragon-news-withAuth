import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import PostDetails from "../Components/PostDetails/PostDetails";

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
            }
        ]
    }
])

export default Routes;