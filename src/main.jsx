import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Statistics from './Components/Statistics'
import AppliedJobs from './Components/AppliedJobs'
import Blog from './Components/Blog'
import ErrorPage from './Components/ErrorPage'
import { jobDetailsApi } from './loaders/loader'
import JobDetails from './Components/JobDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch('jobs.json'),
        element: <Home></Home>
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        // loader: ({params}) => fetch(`singleJob/${params.id}`),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
