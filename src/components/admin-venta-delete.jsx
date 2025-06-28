import axios from "axios";
import { toast } from "react-toastify";

export default function DeleteVenta({ id_venta, getVentas }) {
  async function handleDelete() {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BACK}/ventas/${id_venta}`
      );
      if (data.status === 200) {
        toast.success(data?.message || "Venta eliminada con éxito");
        getVentas();
      } else toast.error(data?.message || "Error al eliminar venta");
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
