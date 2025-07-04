import axios from "axios"
import { useEffect, useRef } from "react"
import { toast } from "react-toastify"

export default function FormCategoria({categoriaPatch, getCategorias, handleClean}) {
  const formRef = useRef(null)
  const handleSubbmit = async (e) => {
    e.preventDefault()
    const categoria = {
      id_categoria: categoriaPatch?.id_categoria,
      nombre: e.target.nombre.value
    }
    try {
      if(categoria.id_categoria === 0) {
        // creo categoria
        const {data} = await axios.post(`${import.meta.env.VITE_BACK}/productos/categorias`, categoria)
        if(data.status === 201) {
          toast.success(data?.message || "Categoria creada")
          formRef.current.reset()
          getCategorias()
        } else {
          toast.error(data?.message || "Error al crear categoria")
        }
      } else {
        // edito categoria
        const {data} = await axios.patch(`${import.meta.env.VITE_BACK}/productos/categorias/${categoria.id_categoria}`, categoria)
        console.log(data);
        if(data.status === 200) {
          toast.success(data?.message || "Categoria editada")
          formRef.current.reset()
          getCategorias()
          handleClean()
        } else {
          toast.error(data?.message || "Error al editar categoria")
        }
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    if(categoriaPatch?.id_categoria !== 0) {
      formRef.current.nombre.focus()
      formRef.current.nombre.value = categoriaPatch.nombre
    } else {
      formRef.current.nombre.value = ""
    }
  }, [categoriaPatch])


  return (
    <form ref={formRef} onSubmit={handleSubbmit} className='flex flex-col gap-2 border rounded-md p-4'>
        <p className="text-center font-semibold">{categoriaPatch?.nombre ? "Editar categoria" : "Agregar categoria"}</p>
        {categoriaPatch?.nombre && <p className="-my-1 font-semibold text-sm text-primary text-center">{categoriaPatch?.nombre}</p>}
        <label>
          <span>Nombre</span>
          <input type="text" defaultValue={categoriaPatch?.nombre} name="nombre" id="nombre" className='p-2 border rounded-md placeholder:opacity-50' />
        </label>
        <button className="mt-2 !text-primary !bg-black-custom hover:!bg-primary hover:!text-black duration-200" type="submit">{categoriaPatch?.nombre ? "Editar categoria" : "Agregar categoria"}</button>
      </form>
  )
}