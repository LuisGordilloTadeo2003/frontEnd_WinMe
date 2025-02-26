import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { publicRoutes } from "./routeList/publicRouteList";
//import NotFound from "../pages/NotFound";

const AppRouter = () => {
    return (
        <Routes>
            {/* Rutas públicas */}
            {publicRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
            ))}

            {/* Rutas privadas */}
            <Route path="/dashboard/*" element={<PrivateRoutes />} />

            {/* Página 404 */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};

export default AppRouter;
