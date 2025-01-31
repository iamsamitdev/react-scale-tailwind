import MainLayout from "@/layouts/MainLayout"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Home from "@/pages/Home"
import ProductDetail from "@/pages/ProductDetail"
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
            }
        ]
    }
])

export const AppRouter = () => {
    return <RouterProvider router={router} />
}