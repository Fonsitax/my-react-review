import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from 'react-router-dom'
import BlogPage from './pages/BlogPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
       <RouterProvider router={router} />
)

