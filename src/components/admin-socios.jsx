import React from 'react'
import { SOCIOS } from '../lib/socios'

export const AdminSocios = () => {
  return (
    <div className='flex flex-row gap-4 font-rubik'>
          <form className='flex flex-col gap-2 border h-fit p-4 rounded-md'>
            <p>Agregar Socio</p>
            <input type="text" name="apellido" placeholder='Apellido' id="apellido" className='p-1 border rounded-md placeholder:opacity-50'/>
            <input type="text" name="nombre" placeholder='Nombre' id="nombre" className='p-1 border rounded-md placeholder:opacity-50'/>
            <input type="text" name="dni" placeholder='DNI' id="dni" className='p-1 border rounded-md placeholder:opacity-50'/>
            <select name="plan" id="plan" defaultValue={"Plan"} className='p-1 border rounded-md placeholder:opacity-50'>
              <option value="Marca" disabled className='text-black'>Plan</option>
              <option value="nike" className='text-black'>Normal</option>
              <option value="adidas" className='text-black'>Premium</option>
              <option value="puma" className='text-black'>Exclusivo</option>
            </select>
            <button>Agregar socio</button>
          </form>
          <div className='p-2 border rounded-md overflow-x-auto w-full grid grid-cols-4 overscroll-x-auto min-h-fit'>
            <p className='col-span-4 text-center text-2xl pb-2'>Socios activos</p>
            <table className='w-full col-span-4 min-w-fit'>
              <thead className='w-full border border-primary min-w-fit'>
                <tr className='grid grid-cols-12 w-full min-w-fit'>
                  <th className='col-span-2 p-1'>Apellido</th>
                  <th className='col-span-2 p-1'>Nombre</th>
                  <th className='col-span-2 p-1'>DNI</th>
                  <th className='col-span-2 p-1'>Plan</th>
                  <th className='col-span-1 p-1'>Hasta</th>
                  <th className='col-span-3 p-1 pe-1'>Acciones</th>
                </tr>
              </thead>
              <tbody className='border border-primary w-full min-w-fit'>
              {SOCIOS.map((socio, index) => 
                <tr key={index} className={`${index % 2 === 0 ? "bg-black" : ""} grid grid-cols-12 hover:bg-primary hover:text-black place-items-center duration-200 min-w-fit`}>
                  <td className='col-span-2 p-1 text-start w-full text-nowrap min-w-fit'>{socio.apellido}</td>
                  <td className='col-span-2 p-1'>{socio.nombre}</td>
                  <td className='col-span-2 p-1'>{socio.dni}</td>
                  <td className='col-span-2 p-1 capitalize'>{socio.plan}</td>
                  <td className='col-span-1 p-1'>{socio.vencimiento}</td>
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
