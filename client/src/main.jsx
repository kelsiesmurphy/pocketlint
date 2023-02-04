import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Root from './routes/root'
import All from './routes/Products'
import ErrorPage from './ErrorPage'
import ProductPage from './routes/ProductPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <All />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:id",
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
