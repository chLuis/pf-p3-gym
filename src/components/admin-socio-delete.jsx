import axios from "axios";

export default function DeleteSocio({id_socio, getSocios}) {
  async function handleDelete(id_socio) {
    try {
        const {data} = await axios.delete(`${import.meta.env.VITE_BACK}/socios/${id_socio}`)
        if (data.status === 200) {
          alert("Socio eliminado con éxito")
          getSocios()
        }
        else
          alert("Error al eliminar socio")
      } catch (error) {
        console.log(error);
      }
    }
  return (
<button className='text-white bg-red-700 !p-1 hover:scale-105 duration-200' onClick={() => handleDelete(id_socio)}>Eliminar</button>
  )
}