import { useState } from 'react'
import { BiBox, BiUser, BiUserPlus } from 'react-icons/bi'
import { ImImage } from 'react-icons/im'
import { AdminImagenes } from '../components/admin-imagenes'
import { AdminProductos } from '../components/admin-productos'
import { AdminSocios } from '../components/admin-socios'
import { AdminCategorias } from '../components/admin-categorias'
import { AdminDescuentos } from '../components/admin-descuentos'
import { FaSalesforce } from 'react-icons/fa'
import { AdminVentas } from '../components/admin-ventas'
import userStore from '../store/storeUsuario'
import UnauthorizedComponent from '../components/unauthorized'
import { FiPercent } from 'react-icons/fi'
import { TbGridDots } from 'react-icons/tb'
import { AdminUsuarios } from '../components/admin-usuarios'

export const Admin = () => {
  const usuarioRol = userStore(state => state.getRol())

  //Aqui elegimos que elemento vamos a renderizar, dejando las categorias como el elemento principal que tomara cada vez que se actualice la pagina
  const [tabRender, setTabRender] = useState("categorias")
  
  //Mostramos las opciones que vamos a tener dentro de la pagina de administrador
  const opciones = [
    {nombre: "categorias", icono: <TbGridDots />},
    {nombre: "imagenes", icono: <ImImage />},
    {nombre: "descuentos", icono: <FiPercent />},
    {nombre: "productos", icono: <BiBox />},
    {nombre: "ventas", icono: <FaSalesforce />},
    {nombre: "socios", icono: <BiUser />},
    {nombre: "usuarios", icono: <BiUserPlus />},
  ]

  return (
    <div className='min-h-[150dvh] text-white'>
      <header className='p-4 font-rubik'>
        <h2 className='text-4xl font-semibold'>Panel de Aministración</h2>
        <p>Gestiona imágenes, productos y membresías de tu gimnasio fácilmente</p>
      </header>
      <div className='border-t w-full p-4'>
        <div className='w-fit rounded-md px-2 py-1 flex flex-nowrap gap-3 mx-auto'>
        {/* Son los botones con los cuales mostraremos el elemento que deseamos */}
          {opciones.map((opcion, index) => 
            <button key={index} onClick={() => setTabRender(opcion.nombre)}
            className={`${tabRender === opcion.nombre ? "!border-primary !text-black !bg-primary capitalize" : "" } flex flex-nowrap gap-1 items-center border !border-black hover:!border-primary capitalize !bg-black-custom`}>{opcion.icono} {opcion.nombre}</button>
          )}          
        
        </div>
        {/* Hacemos validaciones para cada elemento, algunos no pueden ser utilizados por alguien que no sea un administrador o superadmin */}
        <div className='w-full max-w-7xl mx-auto pt-4'>
          {tabRender === "categorias" ? onlyAdmins(usuarioRol) ? <AdminCategorias /> : <UnauthorizedComponent /> : null}
          {tabRender === "imagenes" ? onlyAdmins(usuarioRol) ? <AdminImagenes /> : <UnauthorizedComponent /> : null}
          {tabRender === "descuentos" ? onlyAdmins(usuarioRol) ? <AdminDescuentos /> : <UnauthorizedComponent /> : null}
          {tabRender === "productos" ? onlyAdmins(usuarioRol) ? <AdminProductos /> : <UnauthorizedComponent /> : null}
          {tabRender === "ventas" ? anyBody(usuarioRol) ? <AdminVentas /> : <UnauthorizedComponent /> : null}
          {tabRender === "socios" ? onlyAdmins(usuarioRol) ? <AdminSocios /> : <UnauthorizedComponent /> : null}
          {tabRender === "usuarios" ? onlyAdmins(usuarioRol) ? <AdminUsuarios isAuthorized={onlySuperadmin(usuarioRol)}/> : <UnauthorizedComponent /> : null}
        </div>
      </div>
    </div>
  )
}

//Cualquier usuario que este con los roles especificados en el proyecto puede entrar a estas vistas
  const anyBody = (rol) => {
  const isAuthorized = (rol === "administrador" || rol === 'superadmin'  || rol === 'vendedor') ? true : false
  return isAuthorized
}

//Aqui solo pueden ingresar los administradores o los superadmin
const onlyAdmins = (rol) => {
  const isAuthorized = (rol === "administrador" || rol === 'superadmin') ? true : false
  return isAuthorized
}

//Esto es necesario para que la creacion de usuarios de la pagina solo las puedan realizar los superadmin
const onlySuperadmin = (rol) => {
  const isAuthorized = rol === 'superadmin' ? true : false
  return isAuthorized
}
