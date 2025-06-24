import axios from "axios";

export default function DeleteDescuento({ id_descuento, getDescuentos }) {
  async function handleDelete() {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BACK}/productos/descuentos/${id_descuento}`
      );
      if (data.status === 200) {
        alert("Descuento eliminado con éxito");
        getDescuentos();
      } else alert("Error al eliminar descuento");
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
