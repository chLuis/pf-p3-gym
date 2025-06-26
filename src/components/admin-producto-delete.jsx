import axios from "axios";
import { toast } from "react-toastify";

export default function DeleteProducto({ id_producto, getProductos }) {
  async function handleDelete() {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BACK}/productos/${id_producto}`
      );
      if (data.status === 200) {
        toast.success(data?.message || "Producto eliminado con éxito");
        getProductos();
      } else toast.error(data?.message || "Error al eliminar producto");
    } catch (error) {
      console.log(error);
      toast.error("Hubo un error");
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
