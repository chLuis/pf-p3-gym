import { Navigate, Outlet } from "react-router-dom";
import userStore from "../store/storeUsuario";

export default function RequireAdmin() {
  //Si se quiere acceder a la ruta admin sin estar logueado te redirige a /login
  const usuario_rol = userStore(state => state.getRol()) 

  if (!usuario_rol) return <Navigate to="/login" />;


  return <Outlet />;
}
