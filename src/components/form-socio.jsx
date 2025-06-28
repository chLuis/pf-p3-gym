import axios from "axios"
import { useEffect, useRef } from "react"
import { toast } from "react-toastify"

export default function FormSocio({socioPatch, getSocios, cleanForm}) {
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const socio = Object.fromEntries(formData)

    //Si no existe el plan entonces no se ejecuta la funcion
    if(!socio.id_plan) return toast.info("Debe seleccionar un plan")
    
    //Se asigna el id de socio para poder asignar que ruta deberá continuar la función y a la vez poder editar correctamente al socio en la DB
    socio.id_socio = socioPatch.id_socio
    try {
      //El id_socio = 0 es para el caso de creacion, para cualquier otro será edición del socio
      if(socio.id_socio === 0) {
        const {data} = await axios.post(`${import.meta.env.VITE_BACK}/socios`, socio)
        if (data.status === 201) {
          toast.success("Socio agregado con éxito")
          getSocios()
          formRef.current.reset()
        } else {
          toast.error(data?.data?.message || "Error al agregar socio")
        }
      } else {
        const {data} = await axios.patch(`${import.meta.env.VITE_BACK}/socios`, socio)
        if(data.status === 200) {
          toast.success(data?.message || "Socio editado con éxito")
          getSocios()
          cleanForm()
        } else {
          toast.error(data?.data?.message || "Error al editar socio")
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
      {socioPatch?.nombre && <p className="-my-1 font-semibold text-sm text-primary text-center">{socioPatch?.apellido} {socioPatch?.nombre}</p>}
      <label>
        <span>Nombre</span>
        <input type="text" required name="nombre" placeholder='Nombre' id="nombre" className='p-1 border rounded-md placeholder:opacity-50'/>
      </label>
      <label>
        <span>Apellido</span>
        <input type="text" required name="apellido" placeholder='Apellido' id="apellido" className='p-1 border rounded-md placeholder:opacity-50'/>
      </label>
      <label>
        <span>DNI</span>
        <input type="text" required minLength={8} maxLength={8} name="dni" placeholder='DNI' id="dni" className='p-1 border rounded-md placeholder:opacity-50'/>
      </label>
      <label>
        <span>Plan</span>
      <select name="id_plan" required id="id_plan" defaultValue={0} className='p-1 w-full border rounded-md placeholder:opacity-50'>
        <option value={0} disabled className='text-black'>Elegir</option>
        <option value={1} className='text-black'>Desafiliado</option>
        <option value={2} className='text-black'>Básico</option>
        <option value={3} className='text-black'>Premium</option>
        <option value={4} className='text-black'>Exclusivo</option>
      </select>
      </label>
      <label>
        <span>test</span>
      <input type="date" required name="socio_hasta" id="socio_hasta" className='p-1 border rounded-md placeholder:opacity-50 w-full'/>
      </label>
      <button className="mt-2 !text-primary !bg-black-custom hover:!bg-primary hover:!text-black duration-200">{socioPatch?.nombre ? "Editar socio" : "Agregar Socio"}</button>
    </form>
  )
}