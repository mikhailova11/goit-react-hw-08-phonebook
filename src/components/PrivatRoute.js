
import { useSelector } from "react-redux"
import { Navigate, Route } from "react-router";
import { getIsLogIn } from "redux/selectors"

export default function PrivateRoute({
    component: Component,
    redirectTo,
    children,
    ...routeProps
}) {
    const isLogIn = useSelector(getIsLogIn);
    return (
        <Route {...routeProps}>
            {isLogIn ? children : <Navigate to={redirectTo}/>}
        </Route>
    )
}