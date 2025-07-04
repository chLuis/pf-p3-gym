import { useEffect, useState } from 'react'
import { PiBroom } from 'react-icons/pi'
import { fetchVentas } from '../services/ventas.service'
import FormVenta from './form-venta'
import { fetchProductos } from '../services/productos.service'
import DeleteVenta from './admin-venta-delete'

const initialValues = {
  id_venta: 0,
  id_producto: 0,
  cantidad: null,
  monto: null
}


export const AdminVentas = () => {
  const [ventaPatch, setVentasPatch] = useState(initialValues)
  const [ventas, setVentas] = useState([])
  const [productos, setProductos] = useState([])

  const fetchVentasAction = async () => {
    const {status, data} = await fetchVentas()
    if(status === 200) setVentas(data)
  }

  const fetchProductosAction = async () => {
    const {status, data} = await fetchProductos()
    if(status === 200) setProductos(data)
  }


  useEffect(() => {
    fetchVentasAction()
    fetchProductosAction();
  }, [])

  const handleClean = () => {
    setVentasPatch(initialValues)
  }

  return (
    <div className='flex flex-col md:flex-row gap-4 font-rubik'>
      <div className='flex flex-col gap-2 max-w-96'>
        <div className='sticky top-2 flex flex-col gap-2 items-center'>
          <FormVenta ventaPatch={ventaPatch} getVentas={fetchVentasAction} productos={productos}/>
          {ventaPatch.id_venta !== 0 && <button onClick={handleClean} className='!bg-primary w-full text-black flex flex-nowrap gap-1 justify-center items-center'><PiBroom /> Limpiar formulario</button>}
        </div>
      </div>
      <div className='p-2 border rounded-md overflow-x-auto w-full overscroll-x-auto min-h-fit'>
        <p className='col-span-4 text-center text-2xl pb-2'>Ventas registradas</p>
        <table className='w-full col-span-4 min-w-fit'>
          <thead className='w-full border border-primary min-w-fit'>
            <tr className='flex flex-nowrap w-full '>

              <th className='min-w-80 max-w-96 w-full p-1'>Nombre</th>
              <th className='min-w-20 max-w-20 w-full p-1 text-start'>Cantidad</th>
              
              <th className='min-w-24 max-w-24 w-full p-1 text-center'>Total</th>
              <th className='min-w-20 max-w-20 w-full p-1'>Vendido por</th>
              <th className='min-w-26 max-w-26 w-full p-1 text-center'>Fecha</th>
              <th className='min-w-36 max-w-36 w-full p-1 pe-1'>Acciones</th>
            </tr>
          </thead>
          <tbody className='border border-primary w-full min-w-fit'>
          {ventas?.map((venta, index) => 
            <tr key={index} className={`${index % 2 === 0 ? "bg-black" : ""} flex flex-nowrap hover:bg-primary hover:text-black place-items-center duration-200 min-w-fit`}>
              
              <td title={venta.nombre} className='min-w-80 max-w-96 truncate w-full p-1 text-start text-nowrap'>{venta.nombre}</td>
              <td className='min-w-20 max-w-20 w-full p-1 text-center'>{venta.cantidad}</td>
              <td className='min-w-24 max-w-24 w-full p-1 text-center'>{venta.monto}</td>
              <td className='min-w-20 max-w-20 w-full p-1 text-center'>{venta.usuario}</td>
              <td className='min-w-26 max-w-26 w-full p-1 text-center text-nowrap'>{venta.fecha_venta.substring(0, 10)}</td>
              <td className='min-w-36 max-w-36 w-full p-1 flex flex-nowrap justify-end gap-1'>
                <button className='!text-white !bg-blue-700 !p-1 hover:scale-105 duration-200' onClick={() => setVentasPatch(venta)}>Editar</button>
                <DeleteVenta id_venta={venta.id_venta} getVentas={fetchVentasAction} />
              </td>
            </tr>
          )}
            
          </tbody>
        </table>
        
          
      </div>
    </div>
  )
}
