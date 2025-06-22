import axios from "axios"
import { useEffect, useRef } from "react"

export default function FormSocio({socio, getSocios}) {
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const socio = Object.fromEntries(formData)
    console.log(socio)
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_BACK}/socios`, socio)
      if (data.status === 201) {
        alert("Socio agregado con éxito")
        getSocios()
      }
      else
        alert("Error al agregar socio")
    } catch (error) {
      console.log(error)
    }
  }
//console.log(socio);
  useEffect(() => {
      if (!formRef.current) return;
      formRef.current.reset();
  
      if (socio) {
        const form = formRef.current;
        form.nombre.value = socio.nombre || "";
        form.apellido.value = socio.apellido || "";
        form.dni.value = socio.dni || "";
        form.id_plan.value = socio.id_plan || 0;
        form.socio_hasta.value = socio.socio_hasta || "";
      }
    }, [socio]);
  

  return (
    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-2 border h-fit p-4 rounded-md w-full'>
      <p className="text-center font-semibold">{socio?.nombre ? "Editar socio" : "Agregar Socio"}</p>
      <input type="text" name="nombre" placeholder='Nombre' id="nombre" className='p-1 border rounded-md placeholder:opacity-50'/>
      <input type="text" name="apellido" placeholder='Apellido' id="apellido" className='p-1 border rounded-md placeholder:opacity-50'/>
      <input type="text" maxLength={8} name="dni" placeholder='DNI' id="dni" className='p-1 border rounded-md placeholder:opacity-50'/>
      <select name="id_plan" id="id_plan" defaultValue={0} className='p-1 border rounded-md placeholder:opacity-50'>
        <option value={0} disabled className='text-black'>Plan</option>
        <option value={1} className='text-black'>Desafiliado</option>
        <option value={2} className='text-black'>Básico</option>
        <option value={3} className='text-black'>Premium</option>
        <option value={4} className='text-black'>Exclusivo</option>
      </select>
      <input type="date" name="socio_hasta" id="socio_hasta" className='p-1 border rounded-md placeholder:opacity-50'/>
      <button>{socio?.nombre ? "Editar socio" : "Agregar Socio"}</button>
    </form>
  )
}