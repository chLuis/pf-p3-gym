import axios from "axios";
import { toast } from "react-toastify";

export default function DeleteImagen({ id_imagen, getImagenes }) {
  async function handleDelete() {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BACK}/productos/imagenes/${id_imagen}`
      );
      if (data.status === 200) {
        toast.success(data?.message || "Imagen eliminada con éxito");
        getImagenes();
      } else toast.error(data?.message || "Error al eliminar imagen");
    } catch (error) {
      console.log(error);
      toast.error("Hubo un error");
    }
  }
  return (
    <button
      className="text-white bg-red-700 !p-1 hover:scale-105 duration-200"
      onClick={handleDelete}
    >
      Eliminar
    </button>
  );
}
