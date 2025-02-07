import MainLayout from "@/layouts/MainLayout"
import About from "@/pages/About"
import Cart from "@/pages/Cart"
import Contact from "@/pages/Contact"
import Forgotpassword from "@/pages/Forgotpassword"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import ProductDetail from "@/pages/ProductDetail"
import Register from "@/pages/Register"
import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/products/:id",
                element: <ProductDetail />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/forgotpassword",
        element: <Forgotpassword />
    }
])

export const AppRouter = () => {
    return <RouterProvider router={router} />
}