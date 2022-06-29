import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import selectors from '../redux/selectors';

const PrivateRoute = ({ children, redirectPath = '/login' }) => {
  const isLoggedIn = useSelector(selectors.getIsLogIn);
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PrivateRoute;