// client/src/hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'; // Import AuthContext

/**
 * Custom hook untuk mengecek apakah user sudah login
 *
 * @returns {boolean} Status login user
 */
export const useIsAuthenticated = () => {
  const context = useContext(AuthContext); // Menggunakan useContext secara langsung
  if (!context) { // Tetap lakukan pengecekan ini
    throw new Error('useIsAuthenticated must be used within an AuthProvider');
  }
  return context.isLoggedIn;
};

/**
 * Custom hook untuk mendapatkan user data
 *
 * @returns {Object|null} User data jika login, null jika belum
 */
export const useUser = () => {
  const context = useContext(AuthContext); // Menggunakan useContext secara langsung
  if (!context) { // Tetap lakukan pengecekan ini
    throw new Error('useUser must be used within an AuthProvider');
  }
  return context.isLoggedIn ? context.user : null;
};

/**
 * Custom hook untuk auth actions
 *
 * @returns {Object} Auth methods (login, register, logout)
 */
export const useAuthActions = () => {
  const context = useContext(AuthContext); // Menggunakan useContext secara langsung
  if (!context) { // Tetap lakukan pengecekan ini
    throw new Error('useAuthActions must be used within an AuthProvider');
  }
  const { login, register, logout } = context;
  return { login, register, logout };
};