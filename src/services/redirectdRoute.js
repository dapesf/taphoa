import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('token');

  if (!isAuthenticated) {
    return <Navigate to="/Login" replace />;
  }

  return children;
}

export function RedirectToHomePage() {
    const isAuthenticated = localStorage.getItem('token');
  
    if (isAuthenticated) {
      return <Navigate to="/HomePage" replace />;
    }
  }