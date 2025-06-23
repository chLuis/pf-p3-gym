import React from 'react'
import { BiBox, BiUser } from 'react-icons/bi'
import { ImImage } from 'react-icons/im'
import { AdminImagenes } from '../components/admin-imagenes'
import { AdminProductos } from '../components/admin-productos'
import { AdminSocios } from '../components/admin-socios'
import { AdminCategorias } from '../components/admin-categorias'
import { AdminDescuentos } from '../components/admin-descuentos'

export const Admin = () => {
  const [tabRender, setTabRender] = React.useState("categorias")

  return (
    <div className='min-h-[150dvh]'>
      <header className='p-4 font-rubik'>
        <h2 className='text-4xl font-semibold'>Panel de Aministración</h2>
        <p>Gestiona imágenes, productos y membresías de tu gimnasio fácilmente.</p>
      </header>
      <div className='border-t w-full p-4'>
        <div className='w-fit rounded-md px-2 py-1 flex flex-nowrap gap-3 mx-auto'>
          <button onClick={() => setTabRender("categorias")} className={`${tabRender === "categorias" ? "!border-primary text-black bg-primary" : "" } flex flex-nowrap gap-1 items-center border !border-black hover:!border-primary`}><ImImage /> Categorías</button>
          <button onClick={() => setTabRender("imagenes")} className={`${tabRender === "imagenes" ? "!border-primary text-black bg-primary" : "" } flex flex-nowrap gap-1 items-center border !border-black hover:!border-primary`}><ImImage /> Imagenes</button>
          <button onClick={() => setTabRender("descuentos")} className={`${tabRender === "descuentos" ? "!border-primary text-black bg-primary" : "" } flex flex-nowrap gap-1 items-center border !border-black hover:!border-primary`}><ImImage /> Descuentos</button>
          <button onClick={() => setTabRender("productos")} className={`${tabRender === "productos" ? "!border-primary text-black bg-primary" : "" } flex flex-nowrap gap-1 items-center border !border-black hover:!border-primary`}><BiBox /> Productos</button>
          <button onClick={() => setTabRender("socios")} className={`${tabRender === "socios" ? "!border-primary text-black bg-primary" : "" } flex flex-nowrap gap-1 items-center border !border-black hover:!border-primary`}><BiUser /> Membresias</button>
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
