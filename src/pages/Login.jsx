import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userStore from "../store/storeUsuario";

export const Login = () => {

  const [usuario, setUsuario] = useState("")
  const [usuario_password, setPassword] = useState("")
  const login = userStore(state => state.login)
  const usuarioLogged = userStore(state => state.getUsuario)

  const navigate = useNavigate()

  useEffect(() => {
    const userrr = usuarioLogged()
    if (userrr?.userName) {
    navigate("/admin")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACK}/login/`, {
        usuario,
        usuario_password,
      })

      if (response.data.user.isBlocked) {
        toast.info("Tu usuario esta bloqueado")
        return
      }

      const userData = {
        user_id: response.data.user.id_usuario,
        userName: response.data.user.usuario,
        user_rol: response.data.user.rol_nombre,
        isBlocked: response.data.user.isBlocked
      }

      //Guardar con zustand y navegar a admin
      login(userData)
      toast.success("Login exitoso")
      navigate("/admin");

    } catch (error) {
      toast.error(error.response?.data?.message || "Usuario o contraseña incorrectos")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className=" max-w-md w-full rounded-2xl shadow-lg p-8 border border-gray-200 bg-primary">
        <h1 className="!text-2xl !text-center !text-gray-800 font-rubik-dirt uppercase">
          Ingreso</h1> <p className="font-rubik-dirt text-center !mb-6 text-xl uppercase !text-gray-800">Admin Powerhouse</p>
        <form action="" className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="text-left">
            <label htmlFor="" className="block text-xl font-semibold text-gray-700 mb-1">Usuario</label>
            <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 placeholder:!text-gray-400 !text-white !bg-black-custom focus:ring-blue-500"/>
          </div>
          <div className="text-left">
            <label htmlFor="" className="block text-xl font-semibold text-gray-700 mb-1">Contraseña</label>
            <input type="password" placeholder="Contraseña" value={usuario_password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 placeholder:!text-gray-400 !text-white !bg-black-custom focus:ring-blue-500"/>
          </div>
          <button type="submit" className="!w-full mt-4 !bg-blue-700 !text-white !font-semibold !py-2 !px-4 !rounded-lg hover:!bg-blue-800 !transition !duration-600">Ingresar</button>
        </form>
      </div>
    </div>
  )
}
