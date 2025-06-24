import React, { useEffect } from 'react'
import FormProducto from './form-producto'
import { PiBroom } from 'react-icons/pi'
import { fetchCategorias, fetchDescuentos, fetchImagenes, fetchProductos } from '../services/productos.service'
import DeleteProducto from './admin-producto-delete'

const initialValues = {
  id_producto: 0,
  nombre: "",
  descripcion: "",
  precio: null,
  imagen: 0,
  categoria: 0,
  stock: null,
  descuento: 0,
}


export const AdminProductos = () => {
  const [productoPut, setProductoPut] = React.useState(initialValues)
  const [productos, setProductos] = React.useState([])
  const [categorias, setCategorias] = React.useState([])
  const [imagenes, setImagenes] = React.useState([])
  const [descuentos, setDescuentos] = React.useState([])

  const fetchProductosAction = async () => {
    const {status, data} = await fetchProductos()
    if(status === 200) setProductos(data)
  }

  const fetchCategoriasAction = async () => {
    const {status, data} = await fetchCategorias()
    if(status === 200) setCategorias(data)
  }

  const fetchImagenesAction = async () => {
    const {status, data} = await fetchImagenes()
    if(status === 200) setImagenes(data)
  }

  const fetchDescuentosAction = async () => {
    const {status, data} = await fetchDescuentos()
    if(status === 200) setDescuentos(data)
  }

  useEffect(() => {
    fetchProductosAction();
    fetchCategoriasAction();
    fetchImagenesAction();
    fetchDescuentosAction()
  }, [])

  const handleClean = () => {
    setProductoPut(initialValues)
  }

  return (
        <div className='flex flex-col md:flex-row gap-4 font-rubik'>
      <div className='flex flex-col gap-2'>
        <div className='sticky top-2 flex flex-col gap-2 items-center'>
          <FormProducto productoPut={productoPut} categorias={categorias} imagenes={imagenes} descuentos={descuentos} getProductos={fetchProductosAction} handleClean={handleClean}/>
          {productoPut.id_producto !== 0 && <button onClick={handleClean} className='!bg-primary w-full text-black flex flex-nowrap gap-1 justify-center items-center'><PiBroom /> Limpiar formulario</button>}
        </div>
      </div>
      <div className='p-2 border rounded-md overflow-x-auto w-full overscroll-x-auto min-h-fit'>
        <p className='col-span-4 text-center text-2xl pb-2'>Productos registrados</p>
        <table className='w-full col-span-4 min-w-fit'>
          <thead className='w-full border border-primary min-w-fit'>
            <tr className='flex flex-nowrap w-full '>
              <th className='min-w-20 max-w-20 w-full p-1'>Imagen</th>
              <th className='min-w-80 max-w-full w-full p-1'>Nombre</th>
              <th className='min-w-32 max-w-32 w-full p-1 text-start'>Categoria</th>
              {/* <th className='min-w-16 max-w-16 w-full p-1 text-start'>Marca</th> */}
              <th className='min-w-20 max-w-20 w-full p-1 text-end'>Precio</th>
              <th className='min-w-20 max-w-20 w-full p-1'>Stock</th>
              <th className='min-w-20 max-w-20 w-full p-1 text-center'>Desc</th>
              <th className='min-w-36 max-w-36 w-full p-1 pe-1'>Acciones</th>
            </tr>
          </thead>
          <tbody className='border border-primary w-full min-w-fit'>
          {productos?.map((producto, index) => 
            <tr key={index} className={`${index % 2 === 0 ? "bg-black" : ""} flex flex-nowrap hover:bg-primary hover:text-black place-items-center duration-200 min-w-fit`}>
              <td className='min-w-20 max-w-20 w-full p-1 text-start text-nowrap'><img src={producto.url} alt={producto.nombre} className='object-contain max-h-12 mx-auto'/></td>
              <td title={producto.nombre} className='min-w-80 max-w-96 truncate w-full p-1 text-start text-nowrap'>{producto.nombre}</td>
              <td className='min-w-32 max-w-32 w-full p-1 text-start capitalize'>{producto.categoria}</td>
              {/* <td className='min-w-16 max-w-16 w-full p-1 text-start capitalize'>{producto.marca}</td> */}
              <td className='min-w-20 max-w-20 w-full p-1 text-end'>{producto.precio}</td>
              <td className='min-w-20 max-w-20 w-full p-1 text-center'>{producto.stock}</td>
              <td className='min-w-20 max-w-20 w-full p-1 text-center'>{producto.descuento}%</td>
              <td className='min-w-36 max-w-36 w-full p-1 flex flex-nowrap justify-end gap-1'>
                <button className='text-white bg-blue-700 !p-1 hover:scale-105 duration-200' onClick={() => setProductoPut(producto)}>Editar</button>
                <DeleteProducto id_producto={producto.id_producto} getProductos={fetchProductosAction}/>
              </td>
            </tr>
          )}
            
          </tbody>
        </table>
        
          
      </div>
    </div>
  )
}
