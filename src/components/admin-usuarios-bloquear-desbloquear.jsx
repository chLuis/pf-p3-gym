import axios from "axios"
import { toast } from "react-toastify"

export default function BloquearDesbloquearUsuario({id_usuario, isBlocked, getUsuarios}) {

  const handleBlock = async () => {
    const {data} = await axios.post(`${import.meta.env.VITE_BACK}/usuarios/block-unblock/${id_usuario}`)
    if (data.status === 200) {
      toast.success(`El usuario fue ${isBlocked ? "desbloqueado" : "bloqueado"}`)
      getUsuarios()
    }
  }

  return (
    <button className='!text-white !bg-rose-800 !p-1 hover:scale-105 duration-200 min-w-32' onClick={handleBlock} >
      {isBlocked ? "Desbloquear" : "Bloquear"}
    </button>
  )
}