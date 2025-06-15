import React from 'react'
import {PRODUCTOS_CONST} from '../lib/productos'

export const AdminProductos = () => {
  return (
        <div className='flex flex-row gap-4 font-rubik'>
      <form className='flex flex-col gap-2 border h-fit p-4'>
        <p>Agregar Producto</p>
        <input type="text" name="nombre" placeholder='nombre' id="imagen" className='p-1 border rounded-md placeholder:opacity-50'/>
        <input type="text" name="precio" placeholder='precio' id="imagen" className='p-1 border rounded-md placeholder:opacity-50'/>
        <input type="text" name="stock" placeholder='stock' id="imagen" className='p-1 border rounded-md placeholder:opacity-50'/>
        <select name="categoria" id="categoria" defaultValue={"Marca"} className='p-1 border rounded-md placeholder:opacity-50'>
          <option value="Marca" disabled className='text-black'>Marca</option>
          <option value="nike" className='text-black'>Nike</option>
          <option value="adidas" className='text-black'>Adidas</option>
          <option value="puma" className='text-black'>Puma</option>
        </select>
        <select name="imagen" id="imagen" defaultValue="Imagen" className='p-1 border rounded-md'>
          <option value="Marca" disabled className='text-black'>Imagen</option>
          <option value="nike" className='text-black'>img1</option>
          <option value="adidas" className='text-black'>img2</option>
          <option value="puma" className='text-black'>img3</option>
        </select>
        <textarea rows={4} placeholder='Descripción' className='p-1 border rounded-md placeholder:opacity-50'/>
        <button>Agregar producto</button>
      </form>
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
              <th className='col-span-3 p-1 pe-1'>Acciones</th>
            </tr>
          </thead>
          <tbody className='border border-primary w-full min-w-fit'>
          {PRODUCTOS_CONST.map((producto, index) => 
            <tr key={index} className={`${index % 2 === 0 ? "bg-black" : ""} grid grid-cols-12 hover:bg-primary hover:text-black place-items-center duration-200 min-w-fit`}>
              <td className='col-span-3 p-1 text-start w-full text-nowrap min-w-fit'>{producto.nombre}</td>
              <td className='col-span-2 p-1'>Nike</td>
              <td className='col-span-2 p-1'>Guantes</td>
              <td className='col-span-1 p-1'>$100</td>
              <td className='col-span-1 p-1 text-center'>10</td>
              <td className='col-span-3 p-1 flex flex-nowrap justify-end gap-1'>
                <button className='text-white'>Editar</button>
                <button className='text-white'>Eliminar</button>
              </td>
            </tr>
          )}
            
          </tbody>
        </table>
        
          
      </div>
    </div>
  )
}
