// client/src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthActions } from '../hooks/useAuth';
import RegisterForm from '../components/auth/RegisterForm'; // Pastikan path ini benar

function RegisterPage() {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { register } = useAuthActions();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegister = async ({ name, email, password, confirmPassword }) => {
    setError(null);
    setSuccessMessage(null);
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const result = await register({ name, email, password });

      if (result.success) {
        setSuccessMessage('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(result.error || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Registration submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center h-screen">
      {/* Left Side - Register Form */}
      <div className="px-18">
        <div className="w-full max-w-sm lg:w-96 mx-auto">
          {/* Logo - Opsional, Anda bisa menambahkannya lagi jika ingin terlihat di sini juga */}
          {/* <div className="flex items-center mb-8">
            <div className="flex items-center">
              <Link to="/">
                <img src='/logo.svg' alt="TravelMateAI Logo" className="h-9 w-auto mr-3" />
              </Link>
              <span className="text-xl font-bold text-gray-900">TravelMate AI</span>
            </div>
          </div> */}
          {/* Welcome Text */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Join TravelMate AI!
            </h2>
            <p className="text-gray-600">
              Create your account to start exploring
            </p>
          </div>
          {/* Register Form */}
          <RegisterForm
            onSubmit={handleRegister}
            loading={loading}
            error={error}
            successMessage={successMessage}
          />
          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:text-blue-800"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Right Side - Illustration */}
      <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-end lg:items-center">
        <div className="relative">
          {/* Main Image */}
          <div className="relative z-10 animate-float">
            <img
              src="/robot-waving.png" // Menggunakan gambar yang sama
              alt="TravelMate AI Illustration" // Mengubah alt text
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

      {/* Tambahkan CSS untuk animasi di sini atau di file CSS global Anda */}
      {/* Anda bisa menempatkan ini di index.css atau App.css jika ingin global */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-5px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(-5px); }
        }
        @keyframes bounce-delayed {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-7px); }
          60% { transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        @keyframes float-delayed {
          0% { transform: translateY(0px); }
          60% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          75%, 100% { transform: scale(1.2); opacity: 0; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-bounce-delayed { animation: bounce-delayed 4.5s ease-in-out infinite 0.5s; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3.5s ease-in-out infinite 0.3s; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-ping { animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>
    </div>
  );
}

export default RegisterPage;