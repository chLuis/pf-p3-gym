import { useState, useEffect } from 'react'
import { fetchCarrito } from '../services/productos.service'
import { CgSpinner } from 'react-icons/cg'


export const Carrito = () => {
  const [carritoProductos, setCarritoProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const carrito = [1,2,6, 3,4,5]

  //Traigo la informacion de los productos del carrito y le asigno en cantidad el valor 1 por defecto si hay stock
  const fetchCarritoAction = async (car) => {
    const {data} = await fetchCarrito(car)
    data.map(producto => producto.stock > 0 ? producto.cantidad = 1 : producto.cantidad = 0)
    setCarritoProductos(data)
  }
  
  //Calculo el total de acuerdo al array de mis productos, multiplicando cantidad por precio
  const montoTotal = (array_carrito) => {
    const total = array_carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)
    return total
  }

  //Hago la busqueda de los productos cuando el componente se monta
  useEffect(() => {
    fetchCarritoAction(carrito)
    setIsLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Cada vez que el carrito se modifica tengo que calcular nuevamente el valor del total de la compra
  useEffect(() => {
   const total = montoTotal(carritoProductos)
   setTotal(total)
  }, [carritoProductos]);

  const handleCantidad = (amount, id_producto) => {

    const newCarritoProductos = carritoProductos.map(producto => {
      if (producto.id_producto === id_producto) {
        //Si agrego/quito una unidad primero debo verificar si la cantidad terminara en cero
        if (producto.cantidad + amount < 1) {
          producto.cantidad = 1
          return producto
        }
        //Si agrego una unidad debo verificar que no supere al stock del producto
        if (producto.cantidad + amount > producto.stock || producto.cantidad + amount < 1) {
          return producto
        }
        producto.cantidad += amount
      }
      return producto
    })
    //actualizo el estado del carrito
    setCarritoProductos(newCarritoProductos)
  }

  if(isLoading) return (<div className='flex flex-col gap-4 items-center justify-center p-24'>
    <CgSpinner className='animate-spin text-5xl' />
    <span>Trayendo la informacion....</span>
  </div>)

  return (
    <div className='text-amber-50 font-rubik'>
      <h2 className='text-center font-rubik-dirt uppercase text-4xl py-3'>Carrito</h2>
      <table className='mx-auto'>
        <thead>
          <tr className='space-x-4'>
            <th className='ps-4'>id</th>
            <th></th>
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
              <td className='ps-4'>{producto.id_producto}</td>
              <td><img src={producto.url} className='w-12'/></td>
              <td title={producto.nombre} className='max-w-72 truncate'>{producto.nombre}</td>
              <td className='flex flex-nowrap items-center justify-center h-16 gap-1'>
                <button className='aspect-square !max-w-7 !w-7 h-7 flex items-center justify-center' onClick={() => handleCantidad(-1, producto.id_producto)}>-</button>
                <span className='min-w-5 text-center'>{producto.cantidad}</span>
                <button className='aspect-square !max-w-7 !w-7 h-7 flex items-center justify-center' onClick={() => handleCantidad(1, producto.id_producto)}>+</button>
              </td>
              <td className='w-20 text-center'>{producto.stock}</td>
              <td className=''>{producto.precio}</td>
              <td className='px-1'><button className='!p-2  !border-transparent text-red-700 hover:!border-red-700'>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className='flex flex-row justify-center gap-4 border-t max-w-[720px] mt-4 mx-auto text-2xl py-2'>
        <div>Total del carrito</div>
        <div>$ {total}</div>
      </footer>
    </div>
  )
}
