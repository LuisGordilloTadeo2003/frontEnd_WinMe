import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
//import { BetsProvider } from "./context/BetsContext";
import AppRouter from "./routes/AppRouter";
import Sidebar from "./components/global/Sidebar";

const App = () => {
  return (
    <AuthProvider>
      {/* Sidebar siempre visible */}
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <AppRouter /> {/* Aquí se cargan las rutas */}
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
