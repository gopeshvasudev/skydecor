import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home/Home.jsx';
import About from './routes/About/About.jsx';
import Categories from './routes/Categories/Categories.jsx';
import Catalogue from './routes/Catalogue/Catalogue.jsx';
import Event from './routes/Event/Event.jsx';
import Contact from './routes/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/categories",
        element: <Categories/>
      },
      {
        path: "/catalogue",
        element: <Catalogue/>
      },
      {
       path: "/event",
       element: <Event/>
      },
      {
       path: "/contact",
       element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
