import Users from "./routes/Users"
import Albums from "./routes/Albums"
import User from "./routes/User"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Layout from "./routes/Layout"
import Album from "./routes/Album"
import Error from "./routes/Error"
import { Provider } from "react-redux"
import { store } from "./redux/store"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/albums" />,
                index: true,
            },
            {
                path: "/albums",
                element: <Albums />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/users/:id",
                element: <User />,
            },

            {
                path: "/albums/:id",
                element: <Album />,
            },
            {
                path: "*",
                element: <Error />,
            },
        ],
    },
    {
        path: "*",
        element: <Error />,
    },
])

export default function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}
