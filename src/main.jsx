import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Category from './Components/Category/Category.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:[
      {
        path: '/',
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list'),
        element: <Home></Home>
      },
      {
        path: '/about',
        element: "This is the About Page of The Restaurant"
      },
      {
        path: '/category',
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Category></Category>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
