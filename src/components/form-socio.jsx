import { useEffect, useRef } from "react"

export default function FormSocio({socio}) {
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log(data)
  }
console.log(socio);
  useEffect(() => {
      if (!formRef.current) return;
      formRef.current.reset();
  
      if (socio) {
        const form = formRef.current;
        form.nombre.value = socio.nombre || "";
        form.apellido.value = socio.apellido || "";
        form.dni.value = socio.dni || "";
        form.plan.value = socio.plan || "plan";
        form.vencimiento.value = socio.vencimiento || "";
      }
    }, [socio]);
  

  return (
    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-2 border h-fit p-4 rounded-md'>
            <p className="text-center font-semibold">{socio?.nombre ? "Editar socio" : "Agregar Socio"}</p>
            <input type="text" name="nombre" placeholder='Nombre' id="nombre" className='p-1 border rounded-md placeholder:opacity-50'/>
            <input type="text" name="apellido" placeholder='Apellido' id="apellido" className='p-1 border rounded-md placeholder:opacity-50'/>
            <input type="text" name="dni" placeholder='DNI' id="dni" className='p-1 border rounded-md placeholder:opacity-50'/>
            <select name="plan" id="plan" className='p-1 border rounded-md placeholder:opacity-50'>
              <option value="plan" disabled className='text-black'>Plan</option>
              <option value="básico" className='text-black'>Básico</option>
              <option value="premium" className='text-black'>Premium</option>
              <option value="exclusivo" className='text-black'>Exclusivo</option>
            </select>
            
            <input type="date" name="vencimiento" id="vencimiento" className='p-1 border rounded-md placeholder:opacity-50'/>
            <button>{socio?.nombre ? "Editar socio" : "Agregar Socio"}</button>
          </form>
  )
}