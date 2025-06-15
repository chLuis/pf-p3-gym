import React from 'react'
import {PRODUCTOS_CONST} from '../lib/productos'
import FormProducto from './form-producto'
import { PiBroom } from 'react-icons/pi'

export const AdminProductos = () => {
  const initialValues = {
    nombre: "",
    precio: "",
    stock: "",
    categoria: "",
    imagen: "",
    descripcion: "",
  }
  const [productoPut, setProductoPut] = React.useState(initialValues)
  return (
        <div className='flex flex-row gap-4 font-rubik'>
      <div className='flex flex-col gap-2'>
      <div className='sticky top-2 flex flex-col gap-2 items-center'>

        <FormProducto producto={productoPut} />
        {productoPut.id && <button onClick={() => setProductoPut(initialValues)} className='!bg-primary w-full text-black flex flex-nowrap gap-1 justify-center items-center'><PiBroom /> Limpiar formulario</button>}
      </div>
      </div>
      <div className='p-2 border rounded-md overflow-x-auto w-full grid grid-cols-4 overscroll-x-auto min-h-fit'>
        <p className='col-span-4 text-center text-2xl pb-2'>Productos registrados</p>
        <table className='w-full col-span-4 min-w-fit'>
          <thead className='w-full border border-primary min-w-fit'>
            <tr className='grid grid-cols-12 w-full min-w-fit'>
              <th className='col-span-3 p-1'>Nombre</th>
              <th className='col-span-2 p-1'>Categoria</th>
              <th className='col-span-2 p-1'>Marca</th>
              <th className='col-span-1 p-1'>Precio</th>
              <th className='col-span-1 p-1'>Stock</th>
              <th className='col-span-1 p-1'>Descuento</th>
              <th className='col-span-2 p-1 pe-1'>Acciones</th>
            </tr>
          </thead>
          <tbody className='border border-primary w-full min-w-fit'>
          {PRODUCTOS_CONST.map((producto, index) => 
            <tr key={index} className={`${index % 2 === 0 ? "bg-black" : ""} grid grid-cols-12 hover:bg-primary hover:text-black place-items-center duration-200 min-w-fit`}>
              <td className='col-span-3 p-1 text-start w-full text-nowrap min-w-fit'>{producto.nombre}</td>
              <td className='col-span-2 p-1 capitalize'>{producto.categoria}</td>
              <td className='col-span-2 p-1 capitalize'>{producto.marca}</td>
              <td className='col-span-1 p-1'>{producto.precio}</td>
              <td className='col-span-1 p-1 text-center'>{producto.stock}</td>
              <td className='col-span-1 p-1'>{producto.descuento}%</td>
              <td className='col-span-2 p-1 flex flex-nowrap justify-end gap-1'>
                <button className='text-white bg-blue-700 !p-1 hover:scale-105 duration-200' onClick={() => setProductoPut(producto)}>Editar</button>
                <button className='text-white bg-red-700 !p-1 hover:scale-105 duration-200'>Eliminar</button>
              </td>
            </tr>
          )}
            
          </tbody>
        </table>
        
          
      </div>
    </div>
  )
}
