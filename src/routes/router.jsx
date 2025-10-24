import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';
import Layout from "../Layout.jsx";
// import ProtectedRoute from "./ProtectedRoute.jsx";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home.jsx"))
const About = lazy(() => import("../pages/About.jsx"))
const Cart = lazy(() => import("../pages/Cart.jsx"))
const Collection = lazy(() => import("../pages/Collection.jsx"))
const Contact = lazy(() => import("../pages/Contact.jsx"))
const Login = lazy(() => import("../pages/Login.jsx"))
const NotFound = lazy(() => import("../pages/NotFound.jsx"))
const Orders = lazy(() => import("../pages/Orders.jsx"))
const PlaceOrder = lazy(() => import("../pages/PlaceOrder.jsx"))
const Product = lazy(() => import("../pages/Product.jsx"))




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="collection" element={<Collection />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="orders" element={<Orders />} />
            <Route path="placeorder" element={<PlaceOrder />} />
            <Route path="product" element={<Product />} />
            {/* <Route
                path="checkout"
                element={
                    <ProtectedRoute>
                        <Checkout />
                    </ProtectedRoute>
                }
            /> */}


        </Route>
    )
);

export default router