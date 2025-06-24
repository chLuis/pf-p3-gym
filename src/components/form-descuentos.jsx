import axios from "axios"
import { useEffect, useRef } from "react"

export default function FormDescuentos({descuentosPatch, getDescuentos, handleClean}) {
  const formRef = useRef(null)
  const handleSubbmit = async (e) => {
    e.preventDefault()
    const descuento = {
      id_descuento: descuentosPatch?.id_descuento,
      porcentaje: e.target.porcentaje.value,
      motivo: e.target.motivo.value
    }

    try {
      if(descuento.id_descuento === 0) {
        // creo descuento
        const {data} = await axios.post(`${import.meta.env.VITE_BACK}/productos/descuentos`, descuento)
        if(data.status === 201) {
          alert(data?.message || "Descuento creado")
          formRef.current.reset()
          getDescuentos()
        } else {
          alert(data?.message || "Error al crear descuento")
        }
      } else {
        // edito descuento
        const {data} = await axios.patch(`${import.meta.env.VITE_BACK}/productos/descuentos/${descuento.id_descuento}`, descuento)
        if(data.status === 200) {
          alert(data?.message || "Descuento editado")
          formRef.current.reset()
          getDescuentos()
          handleClean()
        } else {
          alert(data?.message || "Error al editar descuento")
        }
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    if(descuentosPatch?.id_descuento !== 0) {
      formRef.current.porcentaje.focus()
      formRef.current.porcentaje.value = descuentosPatch.porcentaje
      formRef.current.motivo.value = descuentosPatch.motivo
    } else {
      formRef.current.porcentaje.value = null
      formRef.current.motivo.value = ""
    }
  }, [descuentosPatch])

  return (
    <form ref={formRef} onSubmit={handleSubbmit} className='flex flex-col gap-2 border rounded-md p-4'>
        <p>{descuentosPatch?.motivo ? "Editar descuento" : "Agregar descuento"}</p>
        <input type="number" max={90} defaultValue={descuentosPatch?.porcentaje} name="porcentaje" id="porcentaje" className='p-2 border rounded-md placeholder:opacity-50' />
        <input type="text" defaultValue={descuentosPatch?.motivo} name="motivo" id="motivo" className='p-2 border rounded-md placeholder:opacity-50' />
        <button className="" type="submit">{descuentosPatch?.motivo ? "Editar descuento" : "Agregar descuento"}</button>
      </form>
  )
}