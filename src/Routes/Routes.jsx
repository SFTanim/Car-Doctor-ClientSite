import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceCardDetails from "../pages/Home/ServiceCardDetails";
import CartCard from "../pages/CartPage/CartCard";
import OrderPage from "../pages/OrderPage/OrderPage";
import CheckOut from "../pages/CheckOut/CheckOut";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/services/:id',
                element: <ServiceCardDetails></ServiceCardDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/checkOut/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/cartCard',
                element: <CartCard></CartCard>
            },
            {
                path: '/orderPage',
                element: <OrderPage></OrderPage>
            },
        ]
    },
]);


export default router;