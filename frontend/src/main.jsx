import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './pages/chatbot'
import Header from './components/custom/header'
import Hero from './components/custom/Hero'
import Chatbot from './pages/chatbot'
import About from './pages/about'
import Layout from './Layout.jsx'
import Contact from './pages/contact-us'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/chatbot',
        element: <Chatbot />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/create-trip',
        element: <CreateTrip />
      },
      {
        path: '/contact-us',
        element: <Contact />
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
