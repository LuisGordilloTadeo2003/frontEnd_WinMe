import Home from "../../pages/Home";
import LoginRegister from "../../pages/LoginRegister";
import Profile from "../../pages/Profile"

export const publicRoutes = [
    { path: "/", Component: Home },
    { path: "/login", Component: LoginRegister },
    { path: "/register", Component: LoginRegister },
    { path: "/:username", Component: Profile },
];
