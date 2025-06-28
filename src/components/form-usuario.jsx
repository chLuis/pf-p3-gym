import axios from "axios"
import { useEffect, useRef } from "react"
import { toast } from "react-toastify"

export default function FormUsuario({usuarioPatch, getUsuarios, cleanForm}) {
  const formRef = useRef(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const usernameRegex = /^[a-zA-Z0-9_-]+$/
    
    if (!usernameRegex.test(formRef.current.usuario.value)) return toast.error("El nombre de usuario solo puede tener letras, números, guión (-) y guión bajo (_)");

    const usuario = {
      id_usuario: usuarioPatch?.id_usuario,
      id_rol: formRef.current.id_rol.value,
      usuario: formRef.current.usuario.value
    }

    //Si no existe el rol entonces no se ejecuta la funcion
    if(!usuario.id_rol) return toast.info("Debe seleccionar un rol")

      console.log("TEST");
    try {
      //El id_usuario = 0 es para el caso de creacion, para cualquier otro será edición del usuario
      if(usuario.id_usuario === 0) {
        if(formRef.current.usuario_password.value !== formRef.current.repeat_password.value) return toast.error("Las contraseñas no coinciden")
        usuario.usuario_password = formRef.current.usuario_password.value
        const {data} = await axios.post(`${import.meta.env.VITE_BACK}/usuarios`, usuario)
        if (data.status === 201) {
          toast.success("Usuario agregado con éxito")
          getUsuarios()
          formRef.current.reset()
        } else {
          toast.error(data?.data?.message || "Error al agregar usuario")
        }
      } else {
        const {data} = await axios.patch(`${import.meta.env.VITE_BACK}/usuarios`, usuario)
        if(data.status === 200) {
          toast.success(data?.message || "Usuario editado con éxito")
          getUsuarios()
          cleanForm()
        } else {
          toast.error(data?.data?.message || "Error al editar usuario")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      // Asigno a cada input del form el valor del usuario que voy a editar
      if (usuarioPatch.id_usuario !== 0) {
        formRef.current.usuario.value = usuarioPatch.usuario || "";
        formRef.current.id_rol.value = usuarioPatch.id_rol || "";
      } else {
        formRef.current.usuario.value = usuarioPatch.usuario || "";
        formRef.current.usuario_password.value = "";
        formRef.current.id_rol.value = usuarioPatch.id_rol || "";
      }
    }, [usuarioPatch]);
  

  return (
    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-2 border h-fit p-4 rounded-md w-full'>
      <p className="text-center font-semibold">{usuarioPatch?.id_usuario !== 0 ? "Editar usuario" : "Agregar Usuario"}</p>
      {usuarioPatch?.nombre && <p className="-my-1 font-semibold text-sm text-primary text-center">{usuarioPatch?.apellido} {usuarioPatch?.nombre}</p>}
      <label>
        <span>Nombre usuario</span>
        <input type="text" required name="usuario" id="usuario" minLength={4} maxLength={100} placeholder='Usuario' className='p-1 w-full border rounded-md placeholder:opacity-50'/>
      </label>
      {usuarioPatch?.id_usuario === 0 && <label>
        <span>Contraseña</span>
        <input type="password" minLength={8} maxLength={16} required name="usuario_password" id="usuario_password" className='p-1 w-full border rounded-md placeholder:opacity-50'/>
      </label>}
      {usuarioPatch?.id_usuario === 0 && <label>
        <span>Repetir contraseña</span>
        <input type="password" minLength={8} maxLength={16} required name="repeat_password" id="repeat_password" className='p-1 w-full border rounded-md placeholder:opacity-50'/>
      </label>}
      <label className="flex flex-col">
        <span>Rol</span>
        <select name="id_rol" required id="id_rol" defaultValue={0} className='p-1 border rounded-md placeholder:opacity-50'>
        <option value={0} disabled className='text-black'>Elegir</option>
        <option value={1} className='text-black'>Vendedor</option>
        <option value={2} className='text-black'>Administrador</option>
      </select>
      </label>
      <button type="submit" className="mt-2 !text-primary !bg-black-custom hover:!bg-primary hover:!text-black duration-200">{usuarioPatch?.id_usuario !== 0 ? "Editar usuario" : "Agregar usuario"}</button>
    </form>
  )
}