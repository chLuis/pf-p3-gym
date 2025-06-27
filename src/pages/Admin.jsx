import React, { useEffect } from 'react'
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
import { useNavigate } from 'react-router-dom'
import { FiPercent } from 'react-icons/fi'
import { TbGridDots } from 'react-icons/tb'

export const Admin = () => {
  const usuarioRol = userStore(state => state.getRol())
  const navigate = useNavigate()
  const [tabRender, setTabRender] = React.useState("categorias")
  

  const opciones = [
    {nombre: "categorias", icono: <TbGridDots />},
    {nombre: "imagenes", icono: <ImImage />},
    {nombre: "descuentos", icono: <FiPercent />},
    {nombre: "productos", icono: <BiBox />},
    {nombre: "ventas", icono: <FaSalesforce />},
    {nombre: "socios", icono: <BiUser />},
    {nombre: "usuarios", icono: <BiUserPlus />},
  ]

  useEffect(() => {
    if (!usuarioRol) navigate("/login")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='min-h-[150dvh] text-white'>
      <header className='p-4 font-rubik'>
        <h2 className='text-4xl font-semibold'>Panel de Aministración</h2>
        <p>Gestiona imágenes, productos y membresías de tu gimnasio fácilmente.</p>
      </header>
      <div className='border-t w-full p-4'>
        <div className='w-fit rounded-md px-2 py-1 flex flex-nowrap gap-3 mx-auto'>
          {opciones.map((opcion, index) => 
            <button key={index} onClick={() => setTabRender(opcion.nombre)}
            className={`${tabRender === opcion.nombre ? "!border-primary !text-black !bg-primary capitalize" : "" } flex flex-nowrap gap-1 items-center border !border-black hover:!border-primary capitalize !bg-black-custom`}>{opcion.icono} {opcion.nombre}</button>
          )}          
        
        </div>
        <div className='w-full max-w-7xl mx-auto pt-4'>
          {tabRender === "categorias" ? anyBody(usuarioRol) ? <AdminCategorias /> : <UnauthorizedComponent /> : null}
          {tabRender === "imagenes" ? anyBody(usuarioRol) ? <AdminImagenes /> : <UnauthorizedComponent /> : null}
          {tabRender === "descuentos" ? anyBody(usuarioRol) ? <AdminDescuentos /> : <UnauthorizedComponent /> : null}
          {tabRender === "productos" ? anyBody(usuarioRol) ? <AdminProductos /> : <UnauthorizedComponent /> : null}
          {tabRender === "ventas" ? onlyAdmins(usuarioRol) ? <AdminVentas /> : <UnauthorizedComponent /> : null}
          {tabRender === "socios" ? onlySuperadmin(usuarioRol) ? <AdminSocios /> : <UnauthorizedComponent /> : null}
          {tabRender === "usuarios" ? onlySuperadmin(usuarioRol) ? <AdminSocios /> : <UnauthorizedComponent /> : null}
        </div>
      </div>
    </div>
  )
}

const anyBody = (rol) => {
  const isAuthorized = (rol === "administrador" || rol === 'superadmin'  || rol === 'vendedor') ? true : false
  return isAuthorized

}

const onlyAdmins = (rol) => {
  const isAuthorized = (rol === "administrador" || rol === 'superadmin') ? true : false
  return isAuthorized
}

const onlySuperadmin = (rol) => {
  const isAuthorized = rol === 'superadmin' ? true : false
  return isAuthorized
}
