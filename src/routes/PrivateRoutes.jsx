import { Navigate, Routes, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { privateRoutes } from "./routeList/privateRouteList";

const PrivateRoutes = () => {
    const { user } = useAuth();

    return user ? (
        <Routes>
            {privateRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
            ))}
        </Routes>
    ) : (
        <Navigate to="/login" />
    );
};

export default PrivateRoutes;
