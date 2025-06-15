import React from 'react'
import { SOCIOS } from '../lib/socios'
import FormSocio from './form-socio'
import { PiBroom } from 'react-icons/pi'

export const AdminSocios = () => {
    const initialValues = {
      nombre: "",
      apellido: "",
      dni: "",
      plan: "",
      vencimiento: "",
    }
    const [socioPut, setSocioPut] = React.useState(initialValues)

  return (
    <div className='flex flex-row gap-4 font-rubik'>
      <div className='flex flex-col gap-2'>
        <div className='sticky top-2 flex flex-col gap-2 items-center'>
        <FormSocio socio={socioPut}/>
        {socioPut?.nombre && <button onClick={() => setSocioPut(initialValues)} className='!bg-primary w-full text-black flex flex-nowrap gap-1 justify-center items-center'><PiBroom /> Limpiar formulario</button>}
      </div>
      </div>
      <div className='p-2 border rounded-md overflow-x-auto w-full grid grid-cols-4 overscroll-x-auto min-h-fit'>
        <p className='col-span-4 text-center text-2xl pb-2'>Socios activos</p>
            <table className='w-full col-span-4 min-w-fit'>
              <thead className='w-full border border-primary min-w-fit'>
                <tr className='flex flex-nowrap w-full min-w-fit'>
                  <th className='min-w-28 w-full p-1'>Apellido</th>
                  <th className='min-w-28 max-w-28 p-1'>Nombre</th>
                  <th className='min-w-24 max-w-24 p-1'>DNI</th>
                  <th className='min-w-24 max-w-24 p-1'>Plan</th>
                  <th className='min-w-32 max-w-32 p-1'>Hasta</th>
                  <th className='min-w-52 max-w-52 p-1 pe-1'>Acciones</th>
                </tr>
              </thead>
              <tbody className='border border-primary w-full min-w-fit'>
              {SOCIOS.map((socio, index) => 
                <tr key={index} className={`${index % 2 === 0 ? "bg-black" : ""} flex flex-nowrap hover:bg-primary hover:text-black place-items-center duration-200 min-w-fit`}>
                  <td className='min-w-28 w-full p-1 text-start text-nowrap '>{socio.apellido}</td>
                  <td className='min-w-28 max-w-28 p-1'>{socio.nombre}</td>
                  <td className='min-w-24 max-w-24 p-1'>{socio.dni}</td>
                  <td className='min-w-24 max-w-24 p-1 capitalize'>{socio.plan}</td>
                  <td className='min-w-32 max-w-32 p-1'>{socio.vencimiento}</td>
                  <td className='min-w-52 max-w-52 p-1 flex flex-nowrap justify-end gap-1'>
                    <button className='text-white bg-blue-700 !p-1 hover:scale-105 duration-200' onClick={() => setSocioPut(socio)}>Editar</button>
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
