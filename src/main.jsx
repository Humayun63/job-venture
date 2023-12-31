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
import { useCustomLoader } from './loaders/useCustomLoader'
import JobDetails from './Components/JobDetails'
import { Toaster } from 'react-hot-toast'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/jobs.json'),
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`/../singleJob/${params.id}.json`),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/statistics.json')
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: useCustomLoader
      },
      {
        path: "blog",
        element: <Blog></Blog>,
        loader: ()=> fetch('/blogs.json')
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <Toaster></Toaster>
  </React.StrictMode>
)
