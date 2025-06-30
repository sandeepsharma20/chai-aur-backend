import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

const router=createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
    path:"about",
      element:<About/>
    },{
      path:"contact",
      element:<Contact/>

    },
    {
      path:"User",
      element:<User/>
    },
    {
      path:"Github",
      element:<Github/>,
      loader:githubInfoLoader
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
