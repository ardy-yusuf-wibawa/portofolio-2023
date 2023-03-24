import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import ListPage from './pages/ListPage'
import AboutUs from './pages/AboutUs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />
  },
  {
    path: '/portofolio',
    element: <ListPage />
  },
  {
    path: '/about',
    element: <AboutUs />
  }
])

const rootElement =
  document.getElementById('root')

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  )
}
