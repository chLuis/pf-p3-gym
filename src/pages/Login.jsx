import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {

  const [usuario, setUsuario] = useState("")
  const [usuario_password, setPassword] = useState("")
  // const [mensaje, setMensaje] = useState("")
  // const [error, setError] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const usuarioLogueado = localStorage.getItem("usuarioPowerhouse")

    if (usuarioLogueado) {
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

      console.log(response.data.user);
      if (response.data.user.isBlocked) {
        // setMensaje("Tu usuario esta bloqueado")
        toast.info("Tu usuario esta bloqueado")
        // setError(true)
        // setTimeout(() => {
        // setMensaje("")
        // }, 4000);
        return
      }

      const userData = {
        userName: response.data.user.usuario,
        userRol: response.data.user.rol_nombre,
      }

      //Guardar en el localStorage
      localStorage.setItem("usuarioPowerhouse", JSON.stringify(userData))
      console.log(userData);

      // setMensaje("¡Login exitoso!")
      toast.success("Login exitoso")
      // setError(false)
      navigate("/admin");
    // setTimeout(() => {
    // setMensaje("");
    // Redireccionar a admin
    // }, 1500);

    } catch (error) {
      // setMensaje(error.response?.data?.message || "Usuario o contraseña incorrectos")
      toast.error(error.response?.data?.message || "Usuario o contraseña incorrectos")
      // setError(true)
    }

    //Ocultamos el mesaje de error despues de un determinado tiempo
    // setTimeout(() => {
    //   setMensaje("")
    // }, 4000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className=" max-w-md w-full rounded-2xl shadow-lg p-8 border border-gray-200 bg-primary">
        <h1 className="!text-2xl !text-center !font-bold !text-gray-800 !mb-6">Ingreso Admin Powerhouse</h1>
        <form action="" className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="text-left">
            <label htmlFor="" className="block text-sm font-semibold text-gray-700 mb-1">Usuario o email</label>
            <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="text-left">
            <label htmlFor="" className="block text-sm font-semibold text-gray-700 mb-1">Contraseña</label>
            <input type="password" placeholder="Contraseña" value={usuario_password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          {/* {mensaje && (
            <div className={`mt-4 text-center font-medium ${error ? "text-red-600" : "text-green-600"}`}>
              {mensaje}
            </div>
          )} */}
          <button type="submit" className="!w-full !bg-blue-700 !text-white !font-semibold !py-2 !px-4 !rounded-lg hover:!bg-blue-800 !transition !duration-600">Ingresar</button>
        </form>
      </div>
    </div>
  )
}
