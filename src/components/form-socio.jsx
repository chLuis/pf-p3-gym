import axios from "axios"
import { useEffect, useRef } from "react"

export default function FormSocio({socioPatch, getSocios, cleanForm}) {
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const socio = Object.fromEntries(formData)

    //Si no existe el plan entonces no se ejecuta la funcion
    if(!socio.id_plan) return alert("Debe seleccionar un plan")
    
    //Se asigna el id de socio para poder asignar que ruta deberá continuar la función y a la vez poder editar correctamente al socio en la DB
    socio.id_socio = socioPatch.id_socio
    try {
      //El id_socio = 0 es para el caso de creacion, para cualquier otro será edición del socio
      if(socio.id_socio === 0) {
        const {data} = await axios.post(`${import.meta.env.VITE_BACK}/socios`, socio)
        if (data.status === 201) {
          alert("Socio agregado con éxito")
          getSocios()
          formRef.current.reset()
        } else {
          alert(data?.data?.message || "Error al agregar socio")
        }
      } else {
        const {data} = await axios.patch(`${import.meta.env.VITE_BACK}/socios`, socio)
        if(data.status === 200) {
          alert(data?.message || "Socio editado con éxito")
          getSocios()
          cleanForm()
        } else {
          alert(data?.data?.message || "Error al editar socio")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      //si no existe el form frena la ejecucion del codigo para evitar errores
      if (!formRef.current) return;
      formRef.current.reset();
      // Asigno a cada input del form el valor del socio que voy a editar
      if (socioPatch) {
        const form = formRef.current;
        form.nombre.value = socioPatch.nombre || "";
        form.apellido.value = socioPatch.apellido || "";
        form.dni.value = socioPatch.dni || "";
        form.id_plan.value = socioPatch.id_plan || 0;
        form.socio_hasta.value = socioPatch.socio_hasta || "";
      }
    }, [socioPatch]);
  

  return (
    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-2 border h-fit p-4 rounded-md w-full'>
      <p className="text-center font-semibold">{socioPatch?.nombre ? "Editar socio" : "Agregar Socio"}</p>
      <input type="text" required name="nombre" placeholder='Nombre' id="nombre" className='p-1 border rounded-md placeholder:opacity-50'/>
      <input type="text" required name="apellido" placeholder='Apellido' id="apellido" className='p-1 border rounded-md placeholder:opacity-50'/>
      <input type="text" required minLength={8} maxLength={8} name="dni" placeholder='DNI' id="dni" className='p-1 border rounded-md placeholder:opacity-50'/>
      <select name="id_plan" required id="id_plan" defaultValue={0} className='p-1 border rounded-md placeholder:opacity-50'>
        <option value={0} disabled className='text-black'>Plan</option>
        <option value={1} className='text-black'>Desafiliado</option>
        <option value={2} className='text-black'>Básico</option>
        <option value={3} className='text-black'>Premium</option>
        <option value={4} className='text-black'>Exclusivo</option>
      </select>
      <input type="date" required name="socio_hasta" id="socio_hasta" className='p-1 border rounded-md placeholder:opacity-50'/>
      <button>{socioPatch?.nombre ? "Editar socio" : "Agregar Socio"}</button>
    </form>
  )
}