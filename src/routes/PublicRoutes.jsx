import { Navigate, Routes, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { publicRoutes } from "./routeList/publicRouteList";

const PublicRoutes = () => {
    const { user } = useAuth();

    return user ? (
        <Navigate to="/dashboard" />
    ) : (
        <Routes>
            {publicRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
            ))}
        </Routes>
    );
};

export default PublicRoutes;
