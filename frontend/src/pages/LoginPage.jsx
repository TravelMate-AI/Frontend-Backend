// client/src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthActions, useIsAuthenticated } from '../hooks/useAuth';
import LoginForm from '../components/auth/LoginForm'; // Import LoginForm yang baru

function LoginPage() {
  const [error, setError] = useState(null);
  const { login } = useAuthActions();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Tambahkan state loading

  // Redirect jika sudah login
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async ({ email, password }) => { // Menerima email dan password dari LoginForm
    setError(null);
    setLoading(true); // Set loading true saat request dimulai

    try {
      const result = await login({ email, password });

      if (result.success) {
        // Navigasi akan ditangani oleh useEffect jika isAuthenticated berubah
        console.log('Login successful! Navigating to homepage.');
      } else {
        setError(result.error || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Login submission error:', err);
    } finally {
      setLoading(false); // Set loading false setelah request selesai
    }
  };

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center h-screen">
      {/* Left Side - Login Form */}
      <div className="px-18">
        <div className="w-full max-w-sm lg:w-96 mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back!
            </h2>
            <p className="text-gray-600">
              Please enter log in details below
            </p>
          </div>
          {/* Login Form */}
          <LoginForm
            onSubmit={handleLogin} // Kirim handleLogin ke LoginForm
            loading={loading}
            error={error}
          />
          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:text-blue-800" // Ubah warna link sesuai tema
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Right Side - Illustration */}
      <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-end lg:items-center ">  
        <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 animate-float">
                <img
                  src="/robot-waving.png"
                  alt="Robot Waving"
                  loading="lazy"
                  className="w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-300"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full animate-bounce-slow opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-purple-500 rounded-full animate-bounce-delayed opacity-80"></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-pink-500 rounded-full animate-pulse opacity-80"></div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -z-10 top-8 left-8 w-60 h-60 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
              <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full blur-2xl opacity-40 animate-float-delayed"></div>
              
              {/* Geometric Shapes */}
              <div className="absolute top-1/4 left-0 w-4 h-4 bg-blue-400 rotate-45 animate-spin-slow opacity-60"></div>
              <div className="absolute bottom-1/4 right-0 w-6 h-6 bg-purple-400 rounded-full animate-ping opacity-60"></div>
            </div>
      </div>
    </div>
  );
}

export default LoginPage;