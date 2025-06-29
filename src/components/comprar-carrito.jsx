import { useEffect, useState } from 'react'
import Factura from './Factura';

export default function ComprarCarrito({lista, total, envio, cantidad}) {
  //Mensaje que se va a enviar por whatsapp
  const [mensaje, setMensaje] = useState("")
  //Con esto determinamos si el modal de la factura/detalle se muestra al usuario
  const [showFactura, setShowFactura] = useState(false)

  useEffect(() => {
    //Armamos un string con todos los items del carrito para poder enviar un mensaje que este confeccionado de manera prolija
    const test = lista.reduce((acc, actual) => acc + `${actual.cantidad + ' ' + actual.nombre}\n`, 'Hola, me gustaría comprar: \n' )
    setMensaje(test);
  }, [lista])

  return (
    <div className='flex flex-col justify-center gap-4 w-full max-w-[320px] mt-4 mx-auto border rounded-md font-rubik'>
        <div className='border-b w-full p-4 font-semibold'>Resumen de la compra</div>
        <div className='p-4 text-sm flex flex-col gap-1'>
          <div className='flex justify-between'>
            <div>Productos ({cantidad})</div>
            <div>$ {total.toFixed(2)}</div>
          </div>
          <div className='flex justify-between'>
            <div>Envío</div>
            <div>$ {envio}</div>
          </div>
          <div className='flex justify-between font-bold pt-4'>
            <div>Total</div>
            <div>$ {(total + envio).toFixed(2)}</div>
          </div>
        </div>
        <button onClick={() => setShowFactura(true)} className='mx-4 mb-4 p-3 text-center rounded-md text-white bg-blue-700 hover:bg-blue-800 duration-200 '>Terminar compra</button>
          {showFactura && <Factura lista={lista} total={total} envio={5000} mensaje={mensaje} closeFactura={() => setShowFactura(false)}/>}
        </div>
  )
}