import axios from "axios"
import { useEffect, useRef } from "react"
import { toast } from "react-toastify"

export default function FormImagenes({imagenesPatch, getImagenes, handleClean}) {
  const formRef = useRef(null)

  const handleSubbmit = async (e) => {
    e.preventDefault()

    const imagen = {
      id_imagen: imagenesPatch?.id_imagen,
      nombre: e.target.nombre.value,
      url: e.target.url.value
    }

    try {
      if(imagen.id_imagen === 0) {
        // creo imagen
        const {data} = await axios.post(`${import.meta.env.VITE_BACK}/productos/imagenes`, imagen)
        if(data.status === 201) {
          toast.success(data?.message || "Imagen creada")
          formRef.current.reset()
          getImagenes()
        } else {
          toast.error(data?.message || "Error al crear imagen")
        }
      } 

      else {
        // edito imagen
        const {data} = await axios.patch(`${import.meta.env.VITE_BACK}/productos/imagenes/${imagen.id_imagen}`, imagen)
        if(data.status === 200) {
          toast.success(data?.message || "Imagen editada")
          formRef.current.reset()
          getImagenes()
          handleClean()
        } else {
          toast.error(data?.message || "Error al editar imagen")
        }
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    if(imagenesPatch?.id_imagen !== 0) {
      formRef.current.nombre.value = imagenesPatch.nombre
      formRef.current.url.value = imagenesPatch.url
    } else {
      formRef.current.nombre.value = ""
      formRef.current.url.value = ""
    }
    formRef.current.nombre.focus()
  }, [imagenesPatch])

  return (
    <form ref={formRef} onSubmit={handleSubbmit} className='flex flex-col gap-2 border rounded-md p-4'>
      <p>{imagenesPatch?.nombre ? "Editar imagen" : "Agregar imagen"}</p>
      <input type="text" name="nombre" id="nombre" className='p-2 border rounded-md placeholder:opacity-50' />
      <input type="text" name="url" id="url" className='p-2 border rounded-md placeholder:opacity-50' />
      <button className="" type="submit">{imagenesPatch?.nombre ? "Editar imagen" : "Agregar imagen"}</button>
    </form>
  )
}