import React from 'react'
import { BiBox, BiSquare, BiUser } from 'react-icons/bi'
import { ImImage } from 'react-icons/im'
import { AdminImagenes } from '../components/admin-imagenes'
import { AdminProductos } from '../components/admin-productos'
import { AdminSocios } from '../components/admin-socios'
import { AdminCategorias } from '../components/admin-categorias'
import { AdminDescuentos } from '../components/admin-descuentos'

export const Admin = () => {
  const [tabRender, setTabRender] = React.useState("categorias")
  const opciones = [
    {nombre: "categorias", icono: <ImImage />},
    {nombre: "imagenes", icono: <ImImage />},
    {nombre: "descuentos", icono: <ImImage />},
    {nombre: "productos", icono: <BiBox />},
    {nombre: "socios", icono: <BiUser />},
  ]


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
          {tabRender === "categorias" && <AdminCategorias /> }
          {tabRender === "imagenes" && <AdminImagenes /> }
          {tabRender === "descuentos" && <AdminDescuentos /> }
          {tabRender === "productos" && <AdminProductos /> }
          {tabRender === "socios" && <AdminSocios /> }
        </div>
      </div>
    </div>
  )
}
