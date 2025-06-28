import { useEffect, useState } from 'react'
import FormImagenes from './form-imagenes'
import { fetchImagenes } from '../services/productos.service'
import { PiBroom } from 'react-icons/pi'
import DeleteImagen from './admin-imagen-delete'

const initialValues = {
  id_imagen: 0,
  nombre: "",
  url: ""
}

export const AdminImagenes = () => {
  const [imagenes, setImagenes] = useState([])
  const [imagenesPatch, setImagenesPatch] = useState(initialValues)

  const fetchImagenesAction = async () => {
    const data = await fetchImagenes()
    setImagenes(data.data);
  }

  const handleClean = () => {
    setImagenesPatch(initialValues)
  }

  useEffect(() => {
    fetchImagenesAction()
  }, [])

  return (
    <div className='flex flex-row gap-4 font-rubik'>
      <div className='flex flex-col gap-2'>
        <div className='sticky top-2 flex flex-col gap-2 items-center'>
          <FormImagenes imagenesPatch={imagenesPatch} getImagenes={fetchImagenesAction} handleClean={handleClean}/>
          {imagenesPatch.id_imagen !== 0 && 
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
                <th className="capitalize max-w-20 w-full">imagen</th>
                <th className="capitalize flex-1">Nombre</th>
                <th className="capitalize">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {imagenes?.map((imagen, index) => 
              <tr key={index} className={`${index % 2 === 0 ? "bg-black" : ""} flex flex-nowrap hover:bg-primary hover:text-black items-center duration-200 min-w-fit`}>
                <td className="capitalize px-2"><img src={imagen?.url} alt={imagen?.nombre} className='aspect-square object-contain min-w-20 w-20 max-w-20'/></td>
                <td className="capitalize px-2 flex-1">{imagen?.nombre}</td>
                <td className="flex flex-nowrap gap-2 items-center justify-center">
                  <button className='!text-white !bg-blue-700 !p-1 hover:scale-105 duration-200' onClick={() => setImagenesPatch(imagen)}>Editar</button>
                  <DeleteImagen id_imagen={imagen.id_imagen} getImagenes={fetchImagenesAction}/>
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
