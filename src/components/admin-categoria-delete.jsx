import axios from "axios";

export default function DeleteCategoria({ id_categoria, getCategorias }) {
  async function handleDelete() {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BACK}/productos/categorias/${id_categoria}`
      );
      if (data.status === 200) {
        alert("Categoria eliminada con éxito");
        getCategorias();
      } else alert("Error al eliminar categoria");
    } catch (error) {
      console.log(error);
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
