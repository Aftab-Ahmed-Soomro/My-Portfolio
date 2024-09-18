import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AppLayout from './Components/AppLayout/AppLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const router = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/home',
        element : <Home />
      },
      {
        path : '/about',
        element : <About />
      },
      {
        path : '/skills',
        element : <Skills />
      },
      {
        path : '/projects',
        element : <Projects />
      },
      {
        path : '/contact',
        element : <Contact />
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
