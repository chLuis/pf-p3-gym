import { useState, useEffect } from 'react'
import { fetchCarrito } from '../services/productos.service'
import { CgSpinner } from 'react-icons/cg'
import carritoStore from '../store/storeCarrito'
import { toast } from 'react-toastify'
import ComprarCarrito from '../components/comprar-carrito'
import Factura from '../components/Factura'


export const Carrito = () => {
  //const {carrito, eliminarProducto, vaciarCarrito } = carritoStore()
  const carrito = carritoStore(state => state.getCarrito());
  const eliminarProducto = carritoStore(state => state.eliminarProducto);
  const vaciarCarrito = carritoStore(state => state.vaciarCarrito);


  const [carritoProductos, setCarritoProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [cantidad, setCantidad] = useState(0)
  //const carrito = [1,2,6, 3,4,5]

  //Traigo la informacion de los productos del carrito y le asigno en cantidad el valor 1 por defecto si hay stock
  const fetchCarritoAction = async (car) => {
    const {data} = await fetchCarrito(car)
    data.map(producto => producto.stock > 0 ? producto.cantidad = 1 : producto.cantidad = 0)
    setCarritoProductos(data)
  }
  
  //Calculo el total de acuerdo al array de mis productos, multiplicando cantidad por precio
  const montoTotal = (array_carrito) => {
    const total = array_carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
    const cantidad = array_carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    return {total, cantidad}
  }

  //Hago la busqueda de los productos cuando el componente se monta
  useEffect(() => {
    fetchCarritoAction(carrito)
    setIsLoading(false)
  
  }, [carrito]);

  //Cada vez que el carrito se modifica tengo que calcular nuevamente el valor del total de la compra
  useEffect(() => {
   const {total, cantidad} = montoTotal(carritoProductos)
   setTotal(total)
   setCantidad(cantidad)
  }, [carritoProductos]);

  const handleCantidad = (amount, id_producto) => {

    const newCarritoProductos = carritoProductos.map(producto => {
      if (producto.id_producto === id_producto) {
        //Si agrego/quito una unidad primero debo verificar si la cantidad terminara en cero
        if (producto.cantidad + amount < 1) {
          toast.info("No puedes tener cero unidades de un producto")
          producto.cantidad = 1
          return producto
        }
        //Si agrego una unidad debo verificar que no supere al stock del producto
        if (producto.cantidad + amount > producto.stock || producto.cantidad + amount < 1) {
          toast.info("No puedes agregar mas del stock")
          return producto
        }
        producto.cantidad += amount
      }
      return producto
    })
    //actualizo el estado del carrito
    setCarritoProductos(newCarritoProductos)
  }

  const handleDeleteProductoCarrito = (id) => {
    eliminarProducto(id)
    toast.success("Producto eliminado del carrito")
  }

  const handleVaciarCarrito = () => {
    vaciarCarrito()
    toast.success("Carrito vaciado")
  }

  if(isLoading) return (<div className='flex flex-col !text-white gap-4 items-center justify-center p-24'>
    <CgSpinner className='animate-spin text-5xl !text-primary' />
    <span>Trayendo la informacion....</span>
  </div>)

  if(carrito.length < 1) return (
    <div className='flex !text-white text-2xl font-rubik-dirt flex-col gap-4 items-center justify-center p-24'>
      El carrito se encuentra vacío
    </div>
    )

  return (
    <div className='text-amber-50 font-rubik flex flex-col'>
    <header className='flex gap-2 justify-center items-center'>

      <h2 className='text-center font-rubik-dirt uppercase text-4xl py-3'>Carrito</h2>
      <button className='!border-primary !text-white !bg-black-custom hover:!bg-primary hover:!text-black-custom' onClick={handleVaciarCarrito} >Vaciar carrito</button>
    </header>
    <div className='overflow-x-auto max-w-full'>
      <table className='mx-auto border !rounded-md'>
        <thead className='border-b'>
          <tr className='space-x-4'>
            {/* <th className='ps-4'>id</th> */}
            <th className='min-w-12'></th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th className='w-20'>Stock</th>
            <th className=''>Precio</th>
            <th className=''></th>
          </tr>
        </thead>
        <tbody>
          {carritoProductos.map((producto, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-black" : "bg-black-custom" } h-16 space-x-4 hover:bg-primary/10`} >
              {/* <td className='ps-4'>{producto.id_producto}</td> */}
              <td><img src={producto.url} className='w-12'/></td>
              <td title={producto.nombre} className='max-w-72 truncate px-1'>{producto.nombre}</td>
              <td className='flex flex-nowrap items-center !justify-center h-16 w-full gap-1'>
                <button className='aspect-square !max-w-7 !w-7 h-7 flex items-center justify-center !bg-black-custom !border !border-primary !text-white' onClick={() => handleCantidad(-1, producto.id_producto)}>-</button>
                <span className='min-w-5 text-center'>{producto.cantidad}</span>
                <button className='aspect-square !max-w-7 !w-7 h-7 flex items-center justify-center !bg-black-custom !border !border-primary !text-white' onClick={() => handleCantidad(1, producto.id_producto)}>+</button>
              </td>
              <td className='w-20 text-center'>{producto.stock}</td>
              <td className=''>{producto.precio}</td>
              <td className='px-1'>
                <button 
                  onClick={() => handleDeleteProductoCarrito(producto.id_producto)} 
                  className='!p-2 !border-transparent !bg-transparent !text-red-700 hover:!border-red-700'>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <ComprarCarrito lista={carritoProductos} total={total} envio={5000} cantidad={cantidad} />
    </div>
  )
}
