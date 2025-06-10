import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/home-page';
import Chatbot from './pages/chatbot';
import About from './pages/about';
import Restaurants from './pages/restaurants';
import Hotels from './pages/hotels';
import Tourism from './pages/tourism';
import Contact from './pages/contact-us';
import NotFoundPage from './pages/not-found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />, // Halaman 404 jika tidak ditemukan
     // Gunakan Layout di sini
    children: [
      { index: true, element: <HomePage /> },
      { path: 'restaurants', element: <Restaurants /> },
      { path: 'hotels', element: <Hotels /> },
      { path: 'tourism', element: <Tourism /> },
      { path: 'chatbot', element: <Chatbot /> },
      { path: 'about', element: <About /> },
      { path: 'contact-us', element: <Contact /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);