import axios from "axios"
import { useEffect, useRef } from "react"

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
          alert(data?.message || "Imagen creada")
          formRef.current.reset()
          getImagenes()
        } else {
          alert(data?.message || "Error al crear imagen")
        }
      } else {
        // edito imagen
        const {data} = await axios.patch(`${import.meta.env.VITE_BACK}/productos/imagenes/${imagen.id_imagen}`, imagen)
        if(data.status === 200) {
          alert(data?.message || "Imagen editada")
          formRef.current.reset()
          getImagenes()
          handleClean()
        } else {
          alert(data?.message || "Error al editar imagen")
        }
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    if(imagenesPatch?.id_imagen !== 0) {
      formRef.current.nombre.focus()
      formRef.current.nombre.value = imagenesPatch.nombre
      formRef.current.url.value = imagenesPatch.url
    } else {
      formRef.current.nombre.value = ""
      formRef.current.url.value = ""
    }
  }, [imagenesPatch])

console.log(imagenesPatch, "Imagen patch");

  return (
    <form ref={formRef} onSubmit={handleSubbmit} className='flex flex-col gap-2 border rounded-md p-4'>
        <p>{imagenesPatch?.nombre ? "Editar imagen" : "Agregar imagen"}</p>
        <input type="text" defaultValue={imagenesPatch?.nombre} name="nombre" id="nombre" className='p-2 border rounded-md placeholder:opacity-50' />
        <input type="text" defaultValue={imagenesPatch?.url} name="url" id="url" className='p-2 border rounded-md placeholder:opacity-50' />
        <button className="" type="submit">{imagenesPatch?.nombre ? "Editar imagen" : "Agregar imagen"}</button>
      </form>
  )
}