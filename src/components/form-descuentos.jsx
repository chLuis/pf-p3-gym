import axios from "axios"
import { useEffect, useRef } from "react"
import { toast } from "react-toastify"

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
          toast.success(data?.message || "Descuento creado")
          formRef.current.reset()
          getDescuentos()
        } else {
          toast.error(data?.message || "Error al crear descuento")
        }
      } else {
        // edito descuento
        const {data} = await axios.patch(`${import.meta.env.VITE_BACK}/productos/descuentos/${descuento.id_descuento}`, descuento)
        if(data.status === 200) {
          toast.success(data?.message || "Descuento editado")
          formRef.current.reset()
          getDescuentos()
          handleClean()
        } else {
          toast.error(data?.message || "Error al editar descuento")
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
        <p className="text-center font-semibold">{descuentosPatch?.motivo ? `Editar descuento` : "Agregar descuento"}</p>
        {descuentosPatch?.motivo && <p className="-my-1 font-semibold text-sm text-primary text-center">{descuentosPatch?.motivo}</p>}
        <label>
          <span>Porcentaje</span>
          <input type="number" max={90} defaultValue={descuentosPatch?.porcentaje} name="porcentaje" id="porcentaje" className='p-2 border rounded-md placeholder:opacity-50' />
        </label>
        <label>
          <span>Motivo</span>
          <input type="text" defaultValue={descuentosPatch?.motivo} name="motivo" id="motivo" className='p-2 border rounded-md placeholder:opacity-50' />
        </label>
        <button className="mt-2 !text-primary !bg-black-custom hover:!bg-primary hover:!text-black duration-200" type="submit">{descuentosPatch?.motivo ? "Editar descuento" : "Agregar descuento"}</button>
      </form>
  )
}