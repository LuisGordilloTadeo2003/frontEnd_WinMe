import apiClient from "../config/axiosConfig";

export const loginService = async (formLogin) => {
    try {
        const response = await apiClient.post(`/api/login`, formLogin);
        return response.data; // Devuelve { user, token }
    } catch (error) {
        throw error.response?.data?.message || `Error al iniciar sesión: ${error}`;
    }
};

export const registerService = async (formRegister) => {
    try {
        const response = await apiClient.post(`/api/register`, formRegister);
        return response.data; // Devuelve { user, token }
    } catch (error) {
        throw error.response?.data?.message || "Error al registrar usuario";
    }
};
