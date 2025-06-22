import React from 'react'

export const AdminImagenes = () => {
  return (
    <div className='flex flex-row gap-4 font-rubik'>
      <form className='flex flex-col gap-2 border rounded-md p-4'>
        <p>Agregar imagen</p>
        <input type="text" name="imagen" placeholder='nombre' id="imagen" className='p-1 border rounded-md placeholder:opacity-50' />
        <input type="file" name="imagen" id="imagen" className='p-1 border rounded-md placeholder:opacity-50' />
        <button>Subir imagen</button>
      </form>
      <div className='p-2 border rounded-md w-full grid grid-cols-4'>
        <p className='col-span-4'>Galería de imagenes</p>
        <div className='col-span-4 grid grid-cols-4 gap-2'>
          <div className='border rounded-md p-2'>
            <img src="https://http2.mlstatic.com/D_Q_NP_2X_652624-MLA73223130266_122023-E.webp" alt="" className='w-28 aspect-square border'/>
            <div className='flex justify-between items-center'>

            <p>nombre</p>
            <button>Eliminar</button>
            </div>
          </div>
          <div className='border rounded-md p-2'>
            <img src="https://http2.mlstatic.com/D_Q_NP_2X_652624-MLA73223130266_122023-E.webp" alt="" className='w-28 aspect-square border'/>
            <div className='flex justify-between items-center'>

            <p>nombre</p>
            <button>Eliminar</button>
            </div>
          </div>
          <div className='border rounded-md p-2'>
            <img src="https://http2.mlstatic.com/D_Q_NP_2X_652624-MLA73223130266_122023-E.webp" alt="" className='w-28 aspect-square border'/>
            <div className='flex justify-between items-center'>

            <p>nombre</p>
            <button>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
