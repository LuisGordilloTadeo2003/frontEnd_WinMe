import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
    const { user } = useAuth();

    return (
        <div className="d-flex flex-column vh-100 p-3 bg-dark text-white" style={{ borderRight: "3px solid white", height: "100vh" }}>
            <div>
                <Link to="/"><img src="/assets/LogoWinME_Negativo.png" alt="Logo WinME" style={{ maxWidth: "150px", margin: "0" }} /></Link>
            </div>
            <div className="d-flex flex-column gap-3">
                <Link className="text-white text-decoration-none" to="/settings">Configuración</Link>
                {
                    user ? (
                        <>
                            <Link className="text-white text-decoration-none" to="/bets">Mis Apuestas</Link>
                            <Link className="text-white text-decoration-none" to="/groups">Mis Grupos</Link>
                            <Link className="text-white text-decoration-none" to="/profile">Perfil</Link>
                            <Link className="text-white text-decoration-none" to="/logout">Cerrar sesión</Link>
                        </>
                    ) : (
                        <>
                            <Link className="text-white text-decoration-none" to="/login">Iniciar sesión</Link>
                            <Link className="text-white text-decoration-none" to="/register">Crear cuenta</Link>
                        </>
                    )
                }
            </div>
        </div >
    );
};

export default Sidebar;
