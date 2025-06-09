import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import Chatbot from './pages/chatbot/ChatbotPage';
import About from './pages/about';
import CreateTrip from './pages/create-trip';
import Contact from './pages/contact-us';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Gunakan Layout di sini
    children: [
      { index: true, element: <HomePage /> },
      { path: 'chatbot', element: <Chatbot /> },
      { path: 'about', element: <About /> },
      { path: 'create-trip', element: <CreateTrip /> },
      { path: 'contact-us', element: <Contact /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);