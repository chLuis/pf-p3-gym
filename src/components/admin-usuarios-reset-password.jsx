import axios from "axios"
import { toast } from "react-toastify"

export default function ResetPassword({id_usuario}) {

  const handleBlock = async () => {
    const {data} = await axios.post(`${import.meta.env.VITE_BACK}/usuarios/reset-password/${id_usuario}`)
    if (data.status === 200) {
      toast.success(data?.message || 'Contraseña reseteada con exito')
    } else {
      toast.error(data?.data?.message || 'Error al resetear la contraseña')
    }
  }

  return (
    <button className='!text-white text-nowrap !bg-orange-700 !p-1 hover:scale-105 duration-200 min-w-32' onClick={handleBlock} >
      Reset Password
    </button>
  )
}