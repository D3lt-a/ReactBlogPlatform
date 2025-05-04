import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'

import Home from './pages/Home.jsx'
import CreateBlog from './pages/CreateBlog.jsx'
import Login from './pages/Login.jsx'

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='createblog' element={<CreateBlog/>} />
      <Route path='login' element={<Login/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
