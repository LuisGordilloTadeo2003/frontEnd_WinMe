import { createContext, useState, useEffect } from "react";
import { loginService, registerService } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(sessionStorage.getItem("user"));
        const storedToken = sessionStorage.getItem("token");
        if (storedUser && storedToken) {
            setUser(storedUser);
            setToken(storedToken);
        }
    }, []);

    const login = async (formLogin) => {
        try {
            const { user, token } = await loginService(formLogin.email, formLogin.password);
            setUser(user);
            setToken(token);
            sessionStorage.setItem("user", JSON.stringify(user));
            sessionStorage.setItem("token", token);
        } catch (error) {
            console.error("Error en login:", error);
        }
    };

    const register = async (formRegister) => {
        try {
            const { user, token } = await registerService(formRegister);
            setUser(user);
            setToken(token);
            sessionStorage.setItem("user", JSON.stringify(user));
            sessionStorage.setItem("token", token);
        } catch (error) {
            console.error("Error en registro:", error);
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};
