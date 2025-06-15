import React from 'react'

export const AdminImagenes = () => {
  return (
    <div className='flex flex-row'>
      <form className='flex flex-col gap-2 border'>
        <p>Agregar imagen</p>
        <input type="text" name="imagen" placeholder='nombre' id="imagen" />
        <input type="file" name="imagen" id="imagen" />
      </form>
      <div className='p-2 border rounded-md w-full grid grid-cols-4'>
        <p className='col-span-4'>Galería de imagenes</p>
        <div className='col-span-4 grid grid-cols-4 gap-2'>
          <div className='border rounded-md p-2'>
            <img src="" alt="" className='w-20 aspect-square border'/>
            <div className='flex justify-between items-center'>

            <p>nombre</p>
            <button>Eliminar</button>
            </div>
          </div>
          <div className='border rounded-md p-2'>
            <img src="" alt="" className='w-20 aspect-square border'/>
            <div className='flex justify-between items-center'>

            <p>nombre</p>
            <button>Eliminar</button>
            </div>
          </div>
          <div className='border rounded-md p-2'>
            <img src="" alt="" className='w-20 aspect-square border'/>
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
