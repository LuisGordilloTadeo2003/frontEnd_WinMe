import axios from "axios";

// Configurar Axios
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL, // Usa la variable de entorno o un valor por defecto
    withCredentials: true, // Permitir el envío de cookies en las solicitudes
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;