import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login, register } = useAuth();
    const navigate = useNavigate();
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
    })
    const [formRegister, setFormRegister] = useState({
        name: "",
        firstSurname: "",
        secondSurname: "",
        phone: "",
        dateOfBirth: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState("");

    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setFormLogin(prevData => ({ ...prevData, [name]: value }));
    }

    const handleChangeRegister = (e) => {
        const { name, value } = e.target;
        setFormRegister(prevData => ({ ...prevData, [name]: value }));
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(formLogin);
            navigate("/dashboard");
        } catch (err) {
            setError(err);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(formRegister);
            navigate("/dashboard");
        } catch (err) {
            setError(err);
        }
    };

    return (
        <>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="email" value={formLogin.email} onChange={() => handleChangeLogin} />
                <input type="password" placeholder="password" value={formLogin.password} onChange={() => handleChangeLogin} />
                {error && <p>{error}</p>}
                <button type="submit">Iniciar Sesión</button>
            </form>
            <br />
            <br />
            <br />
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder="Nombre" value={formRegister.name} onChange={handleChangeRegister} />
                <input type="text" name="firstSurname" placeholder="Primer Apellido" value={formRegister.firstSurname} onChange={handleChangeRegister} />
                <input type="text" name="secondSurname" placeholder="Segundo Apellido" value={formRegister.secondSurname} onChange={handleChangeRegister} />
                <input type="tel" name="phone" placeholder="Teléfono" value={formRegister.phone} onChange={handleChangeRegister} />
                <input type="date" name="dateOfBirth" value={formRegister.dateOfBirth} onChange={handleChangeRegister} />
                <input type="email" name="email" placeholder="Correo" value={formRegister.email} onChange={handleChangeRegister} />
                <input type="password" name="password" placeholder="Contraseña" value={formRegister.password} onChange={handleChangeRegister} />
                {error && <p>{error}</p>}
                <button type="submit">Registrarse</button>
            </form>
        </>
    );
};

export default Login;
