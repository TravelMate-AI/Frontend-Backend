// client/src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Homepage';
import Chatbot from './pages/Chatbot';
import Restaurants from './pages/Restaurants';
import RestaurantDetail from './pages/RestaurantDetail';
import Hotels from './pages/Hotels';
import HotelDetail from './pages/HotelDetail';
import Tourism from './pages/Tourism';
import TourismDetail from './pages/TourismDetail';
import NotFoundPage from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './layouts/Layout';

import { AuthProvider } from './contexts/AuthContext'; // <-- Import AuthProvider Anda

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'restaurants', element: <Restaurants /> },
      { path: 'restaurants/:id', element: <RestaurantDetail /> },
      { path: 'hotels', element: <Hotels /> },
      { path: 'hotels/:id', element: <HotelDetail /> },
      { path: 'tourism', element: <Tourism /> },
      { path: 'tourism/:id', element: <TourismDetail /> },
      { path: 'chatbot', element: <Chatbot /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* <-- Bungkus RouterProvider dengan AuthProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
