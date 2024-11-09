import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Category from './Components/Categories/Categories.jsx'
import Menu from './Components/Menu/Menu.jsx'

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
      },
      {
        path: '/:strCategory',
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.strCategory}`),
        element: <Menu></Menu>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
