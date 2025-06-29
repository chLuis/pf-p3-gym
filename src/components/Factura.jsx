import { FaWhatsapp } from "react-icons/fa"

const Factura = ({lista, total, envio, closeFactura, mensaje}) => {
    return(
        <div onClick={closeFactura} className="fixed inset-0 p-4 flex justify-center items-center backdrop-blur-md z-20 bg-black/50">
        {/* StopPropagation, hace que cuando hagamos click dentro del detalle no se cierre el modal, solo queremos que se cierre cuando se haga un click fuera del mismo */}
            <div onClick={(e) => e.stopPropagation()} className="flex flex-col overflow-x-auto items-center gap-1 p-4 bg-white w-full rounded shadow max-w-3xl mx-auto text-black">
                <h2 className="text-2xl font-bold mb-4">Factura de compra</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left p-2">Producto:</th>
                            <th className="text-center p-2">Cantidad:</th>
                            <th className="text-right p-2">Precio unitario:</th>
                            <th className="text-right p-2">Subtotal</th>
                        </tr>
                    </thead>
                <tbody>
                    {lista.map(producto =>(
                        <tr key={producto.id_producto} className="border-b">
                            <td className="items-center p-2">{producto.nombre}</td>
                            <td className="text-center p-2">{producto.cantidad}</td>
                            <td className="text-right p-2">{(producto.descuento > 0 ? producto.precio * (1 - (producto.descuento / 100)) : producto.precio).toFixed(2)}</td>
                            <td className="text-right p-2">{((producto.descuento > 0 ? producto.precio * (1 - (producto.descuento / 100)) : producto.precio) * producto.cantidad).toFixed(2)}</td>
                        </tr>
                    ))}
                    <tr>
                            <td className="items-center p-2">Costo de envio:</td>
                            <td className="text-center p-2"></td>
                            <td className="text-right p-2"></td>
                            <td className="text-right p-2">{envio}</td>
                        </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-right font-bold p-2">Total:</td>
                        <td className="text-right font-bold p-2">{total + envio}</td>
                    </tr>
                </tfoot>
                </table>
                {/* Enviamos el mensaje que confeccionamos en el componente padre */}
                <a href={`https://wa.me/3816177174?text=${encodeURIComponent(mensaje)}`} target='_blank' className='flex flex-nowrap gap-1 items-center mx-auto mb-4 p-3 text-center rounded-md text-white bg-green-500 hover:bg-green-600 duration-200 '><FaWhatsapp className="text-xl"/> Comprar por WhatsApp</a>
            </div>
        </div>
    )
}

export default Factura