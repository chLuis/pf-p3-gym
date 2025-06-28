import { Navigate, Outlet } from "react-router-dom";
import userStore from "../store/storeUsuario";

export default function RequireAdmin() {
  const usuario_rol = userStore(state => state.getRol()) 

  if (!usuario_rol) return <Navigate to="/login" />;


  return <Outlet />;
}
