import React from 'react'
import FormSocio from './form-socio'
import { PiBroom } from 'react-icons/pi'
import FormPlan from './form-socio-plan'
import DeleteSocio from './admin-socio-delete'
import { getSocios } from '../services/socios.service'

export const AdminSocios = () => {
  const [socioPatch, setSocioPatch] = React.useState(initialValues)
  const [socios, setSocios] = React.useState([]);


  function cleanForm() {
    setSocioPatch(initialValues)
  }

  async function fetchSocios() {
    const response = await getSocios()
    setSocios(response.data)
  }

  React.useEffect( () => {
    fetchSocios()
  }, []);


  return (
    <div className='flex flex-row gap-4 font-rubik'>
      <div className='flex flex-col gap-2'>
        <div className='sticky top-2 flex flex-col gap-2 items-center'>
        <FormSocio socioPatch={socioPatch} getSocios={fetchSocios} cleanForm={cleanForm}/>
        {socioPatch?.nombre &&
          <>
            <FormPlan id_socio={socioPatch.id_socio} getSocios={fetchSocios} cleanForm={cleanForm}/>
            <button onClick={cleanForm} className='!bg-primary w-full text-black flex flex-nowrap gap-1 justify-center items-center'>
              <PiBroom /> Limpiar formulario
            </button>
          </>
        }
      </div>
      </div>
      <div className='p-2 border rounded-md overflow-x-auto w-full overscroll-x-auto min-h-fit'>
        <p className='text-center text-2xl pb-2'>Socios activos</p>
            <table className='w-full min-w-fit'>
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
              {socios?.map((socio, index) => 
                <tr key={index} className={`${index % 2 === 0 ? "bg-black" : ""} flex flex-nowrap hover:bg-primary hover:text-black place-items-center duration-200 min-w-fit`}>
                  <td className='min-w-28 w-full p-1 text-start text-nowrap '>{socio.apellido}</td>
                  <td className='min-w-28 max-w-28 p-1'>{socio.nombre}</td>
                  <td className='min-w-24 max-w-24 p-1'>{socio.dni}</td>
                  <td className='min-w-24 max-w-24 p-1 capitalize'>{socio.nombre_plan}</td>
                  <td className='min-w-32 max-w-32 p-1 text-center'>{socio.socio_hasta}</td>
                  <td className='min-w-52 max-w-52 p-1 flex flex-nowrap justify-end gap-1'>
                    <button className='text-white bg-blue-700 !p-1 hover:scale-105 duration-200' onClick={() => setSocioPatch(socio)}>Editar</button>
                    <DeleteSocio id_socio={socio.id_socio} getSocios={fetchSocios} />
                  </td>
                </tr>
              )}
                
              </tbody>
            </table>
            
              
          </div>
        </div>
  )
}

  const initialValues = {
    id_socio: 0,
    nombre: "",
    apellido: "",
    dni: "",
    id_plan: 0,
    nombre_plan: "",
    socio_desde: "",
    socio_hasta: "",
  }