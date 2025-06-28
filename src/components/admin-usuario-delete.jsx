import axios from "axios";
import { toast } from "react-toastify";

export default function DeleteUsuario({id_usuario, getUsuarios}) {
  
  async function handleDelete() {
    try {
      const {data} = await axios.delete(`${import.meta.env.VITE_BACK}/usuarios/${id_usuario}`)
      if (data.status === 200) {
        toast.success("Usuario eliminado con éxito")
        getUsuarios()
      }
      else
        toast.error("Error al eliminar Usuario")
      } catch (error) {
        console.log(error);
        toast.error("Hubo un error")
      }
    }
  return (
    <button className='!text-white !bg-red-700 !p-1 hover:scale-105 duration-200' onClick={() => handleDelete(id_usuario)}>
      Eliminar
    </button>
  )
}