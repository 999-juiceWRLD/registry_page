import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import { ErrorPage } from './routes/error/ErrorPage.component.tsx'
import { Root } from './routes/root/Root.component.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage /> 
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
