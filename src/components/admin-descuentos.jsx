import { useEffect, useState } from 'react'
import { PiBroom } from 'react-icons/pi'
//import DeleteImagen from './admin-imagen-delete'
import { fetchDescuentos } from '../services/productos.service'
import FormDescuentos from './form-descuentos'
import DeleteDescuento from './admin-descuento-delete'

const initialValues = {
  id_descuento: 0,
  porcentaje: null,
  motivo: ""
}

export const AdminDescuentos = () => {
  const [descuentos, setDescuentos] = useState([])
  const [descuentosPatch, setDescuentosPatch] = useState(initialValues)

  const fetchDescuentosAction = async () => {
    const data = await fetchDescuentos()
    setDescuentos(data.data);
  }

  const handleClean = () => {
    setDescuentosPatch(initialValues)
  }

  useEffect(() => {
    fetchDescuentosAction()
  }, [])

  return (
    <div className='flex flex-row gap-4 font-rubik'>
      <div className='flex flex-col gap-2'>
        <div className='sticky top-2 flex flex-col gap-2 items-center'>
          <FormDescuentos descuentosPatch={descuentosPatch} getDescuentos={fetchDescuentosAction} handleClean={handleClean}/>
          {descuentosPatch.id_descuento !== 0 && 
            <button onClick={handleClean} className='!bg-primary w-full text-black flex flex-nowrap gap-1 justify-center items-center'>
              <PiBroom /> Limpiar formulario
            </button>}
        </div>
      </div>
      <div className='p-2 flex flex-col gap-2 border rounded-md w-full'>
        <p className=''>Listado de imagenes</p>
        <div className='gap-2 w-full border'>
          <table className="border flex flex-col w-full">
            <thead>
              <tr className="flex flex-nowrap gap-2">
                <th className="capitalize w-24">Porcentaje</th>
                <th className="capitalize flex-1">Motivo</th>
                <th className="capitalize">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {descuentos?.map((descuento, index) => 
              <tr key={index} className={`${index % 2 === 0 ? "bg-black" : ""} flex flex-nowrap hover:bg-primary hover:text-black items-center duration-200 min-w-fit`}>
                <td className="capitalize px-2 w-24">{descuento.porcentaje}</td>
                <td className="capitalize px-2 flex-1">{descuento.motivo}</td>
                <td className="flex flex-nowrap gap-2 items-center justify-center">
                  <button className='text-white bg-blue-700 !p-1 hover:scale-105 duration-200' onClick={() => setDescuentosPatch(descuento)}>Editar</button>
                  <DeleteDescuento id_descuento={descuento.id_descuento} getDescuentos={fetchDescuentosAction} />
                  
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
