import { useEffect, useState } from 'react'
export default function ComprarCarrito({lista, total, envio, cantidad}) {

  const [mensaje, setMensaje] = useState("")

  useEffect(() => {
    const test = lista.reduce((acc, actual) => acc + `${actual.cantidad + ' ' + actual.nombre}\n`, 'Hola, me gustaría comprar: \n' )
    setMensaje(test);
  }, [lista])

  return (
    <div className='flex flex-col justify-center gap-4 w-full max-w-[320px] mt-4 mx-auto border rounded-md font-rubik'>
        <div className='border-b w-full p-4 font-semibold'>Resumen de la compra</div>
        <div className='p-4 text-sm flex flex-col gap-1'>
          <div className='flex justify-between'>
            <div>Productos ({cantidad})</div>
            <div>$ {total}</div>
          </div>
          <div className='flex justify-between'>
            <div>Envío</div>
            <div>$ {envio}</div>
          </div>
          <div className='flex justify-between font-bold pt-4'>
            <div>Total</div>
            <div>$ {total + envio}</div>
          </div>
        </div>
        <a href={`https://wa.me/3816177174?text=${encodeURIComponent(mensaje)}`} target='_blank' className='mx-4 mb-4 p-3 text-center rounded-md text-white bg-blue-700 hover:bg-blue-800 duration-200 '>Terminar compra</a>
        </div>
  )
}