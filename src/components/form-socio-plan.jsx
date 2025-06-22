import axios from "axios";
import { useState } from "react";

export default function FormPlan({id_socio, getSocios, cleanForm}) {
  const [cantidad, setCantidad] = useState(0);

  const handleTime = async (e) => {
    e.preventDefault();
    const {data} = await axios.post(`${import.meta.env.VITE_BACK}/socios/agregar-tiempo`, {id_socio, cantidad})
    if(data.status === 200) {
      alert("Tiempo agregado")
      getSocios()
      cleanForm()
    }
    else alert("Error al agregar tiempo")
  }


  return (
    <form onSubmit={handleTime} className='flex flex-col gap-2 border h-fit p-4 rounded-md w-full'>
      <div className="text-center font-semibold">Agregar tiempo</div>
      <select onChange={(e) => setCantidad(+e.target.value)} defaultValue={0} className="p-1 border rounded-md placeholder:opacity-50">
        <option value={0} disabled className="text-black">Elegir</option>
        <option value={1} className="text-black">1 Mes</option>
        <option value={2} className="text-black">2 Meses</option>
        <option value={3} className="text-black">3 Meses</option>
      </select>
      <button type="submit">Agregar</button>
    </form>
  );

}