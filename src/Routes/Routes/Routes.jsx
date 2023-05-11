import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../LayOut/MainLayOut/MainLayOut";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AddToCart from "../../Pages/AddToCart/AddToCart/AddToCart";
import WishList from "../../Pages/WishList/WishList/WishList";
import GeneralOffer from "../../Pages/GeneralOffer/GeneralOffer/GeneralOffer";
import EachProductsDetails from "../../Component/AllProducts/AllProducts/EachProductsDetails/EachProductsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addtocart',
                element: <AddToCart></AddToCart>
            },
            {
                path: '/wishlist',
                element: <WishList></WishList>
            },
            {
                path: '/generaloffer',
                element: <GeneralOffer></GeneralOffer>
            },
            {
                path: '/eachproductdetails',
                element: <EachProductsDetails></EachProductsDetails>
            }
        ]
    }
])

export default router;