import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Prizes from './routes/Prizes.tsx'
import Login from './routes/Login.tsx'
import Prize from './routes/Prize.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/prizes',
    element: <Prizes />
  },
  {
    path: '/prizes/:id',
    element: <Prize />
  },
  // {
  //   path: '/stores',
  //   element: <Stores />
  // },
  
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
