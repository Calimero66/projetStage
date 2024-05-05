import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './auth'; // Update the import path if necessary

function PrivateRoute({ element, ...rest }) {
  const { auth } = useAuth();

  return auth.token ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/auth/sign-in" replace />
  );
}

export default PrivateRoute;