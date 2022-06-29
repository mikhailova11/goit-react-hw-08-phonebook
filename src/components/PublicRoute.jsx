import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import selectors from '../redux/selectors';

const PublicRoute = ({ children, redirectPath = '/', restricted = false }) => {
  const isLoggedIn = useSelector(selectors.getIsLogIn);

  const shouldRedirect = isLoggedIn && restricted;
  if (shouldRedirect) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PublicRoute;