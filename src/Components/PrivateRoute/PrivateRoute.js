import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { userInfo } from "../../App";

function PrivateRoute({ children, ...rest }) {
    const [user] = useContext(userInfo);
    const {displayName} = user;
    return (
        <Route
            {...rest}
            render={() =>
                displayName ? (
                    children
                ) : (
                    <Redirect to= "/login"/>
                )
            }
        />
    );
}
export default PrivateRoute;