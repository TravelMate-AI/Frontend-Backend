// client/src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Pastikan ini diimpor jika Anda menggunakan Axios

// Membuat Auth Context dan mengekspornya
export const AuthContext = createContext(); // <-- Tambahkan 'export' di sini

// Provider Component untuk membungkus aplikasi
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cek token dari localStorage saat aplikasi dimuat
  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUser = localStorage.getItem('userData');

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
      // Set Axios default header untuk setiap request terautentikasi
      axios.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
    }
    setLoading(false);
  }, []);

  // Fungsi Login
  const login = async (credentials) => {
    try {
      setLoading(true);

      const response = await axios.post('/api/auth/login', credentials);

      const data = response.data;

      setToken(data.token);
      setUser(data.user);
      setIsLoggedIn(true);

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));

      // Set Axios default header setelah login
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

      return { success: true, data };
    } catch (error) {
      console.error('Login error:', error.response?.data?.message || error.message);
      return { success: false, error: error.response?.data?.message || 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  // Fungsi Register
  const register = async (userData) => {
    try {
      setLoading(true);

      const response = await axios.post('/api/auth/register', userData);

      const data = response.data;

      // Auto login setelah register berhasil
      setToken(data.token);
      setUser(data.user);
      setIsLoggedIn(true);

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));

      // Set Axios default header setelah register (auto-login)
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

      return { success: true, data };
    } catch (error) {
      console.error('Registration error:', error.response?.data?.message || error.message);
      return { success: false, error: error.response?.data?.message || 'Registration failed' };
    } finally {
      setLoading(false);
    }
  };

  // Fungsi Logout
  const logout = () => {
    setToken(null);
    setUser(null);
    setIsLoggedIn(false);

    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    // Hapus Axios default header saat logout
    delete axios.defaults.headers.common['Authorization'];
  };

  // Value yang akan disediakan oleh context
  const value = {
    isLoggedIn,
    user,
    token,
    loading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook untuk menggunakan Auth Context (opsional, bisa juga hanya di hooks/useAuth)
// Jika Anda ingin menggunakannya di sini, pastikan tidak ada duplikasi
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };