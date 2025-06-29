import axios from "axios";
import { toast } from "react-toastify";

export default function DeleteCategoria({ id_categoria, getCategorias }) {
  async function handleDelete() {  //Funcion asincronica para eliminar una categoria
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BACK}/productos/categorias/${id_categoria}`
      );
      if (data.status === 200) {
        toast.success("Categoria eliminada con éxito");
        getCategorias();
      } else toast.error("Error al eliminar categoria");
    } catch (error) {
      console.log(error);
      toast.error("Hubo un error")
    }
  }
  return (
    <button
      className="!text-white !bg-red-700 !p-1 hover:scale-105 duration-200"
      onClick={handleDelete}
    >
      Eliminar
    </button>
  );
}
