import React from 'react'
import {PRODUCTOS_CONST} from '../lib/productos'
import FormProducto from './form-producto'
import { PiBroom } from 'react-icons/pi'

export const AdminProductos = () => {
  const initialValues = {
    nombre: "",
    precio: "",
    stock: "",
    categoria: "elegir",
    marca: "elegir",
    imagen: "elegir",
    descuento: "",
    descripcion: "",
  }
  const [productoPut, setProductoPut] = React.useState(initialValues)
  return (
        <div className='flex flex-col md:flex-row gap-4 font-rubik'>
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
            <tr className='flex flex-nowrap w-full '>
              <th className='min-w-20 max-w-20 w-full p-1'>Imagen</th>
              <th className='min-w-80 max-w-full w-full p-1'>Nombre</th>
              <th className='min-w-32 max-w-32 w-full p-1 text-start'>Categoria</th>
              <th className='min-w-16 max-w-16 w-full p-1 text-start'>Marca</th>
              <th className='min-w-20 max-w-20 w-full p-1 text-end'>Precio</th>
              <th className='min-w-20 max-w-20 w-full p-1'>Stock</th>
              <th className='min-w-20 max-w-20 w-full p-1 text-center'>Desc</th>
              <th className='min-w-36 max-w-36 w-full p-1 pe-1'>Acciones</th>
            </tr>
          </thead>
          <tbody className='border border-primary w-full min-w-fit'>
          {PRODUCTOS_CONST.map((producto, index) => 
            <tr key={index} className={`${index % 2 === 0 ? "bg-black" : ""} flex flex-nowrap hover:bg-primary hover:text-black place-items-center duration-200 min-w-fit`}>
              <td className='min-w-20 max-w-20 w-full p-1 text-start text-nowrap'><img src={producto.imagen} /></td>
              <td className='min-w-80 max-w-full w-full p-1 text-start text-nowrap'>{producto.nombre}</td>
              <td className='min-w-32 max-w-32 w-full p-1 text-start capitalize'>{producto.categoria}</td>
              <td className='min-w-16 max-w-16 w-full p-1 text-start capitalize'>{producto.marca}</td>
              <td className='min-w-20 max-w-20 w-full p-1 text-end'>{producto.precio}</td>
              <td className='min-w-20 max-w-20 w-full p-1 text-center'>{producto.stock}</td>
              <td className='min-w-20 max-w-20 w-full p-1 text-center'>{producto.descuento}%</td>
              <td className='min-w-36 max-w-36 w-full p-1 flex flex-nowrap justify-end gap-1'>
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
