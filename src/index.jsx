import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import IndexPage from './pages/indexPage'
import ListPage from './pages/listPage'
import AboutUs from './pages/aboutUs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />
  },
  {
    path: '/portfolio',
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
