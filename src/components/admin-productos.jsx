import React, { useEffect } from 'react'
import FormProducto from './form-producto'
import { PiBroom } from 'react-icons/pi'
import { fetchCategorias, fetchDescuentos, fetchImagenes, fetchProductos } from '../services/productos.service'
import DeleteProducto from './admin-producto-delete'

//Valores iniciales para el formulario de la creacion de un producto
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
  //productoPut es la variable que usamos para manejar el formulario
  const [productoPut, setProductoPut] = React.useState(initialValues)
  //Todos los productos en la DB
  const [productos, setProductos] = React.useState([])
  //Todas las categorias en la DB
  const [categorias, setCategorias] = React.useState([])
  //Todas las imagenes en la DB
  const [imagenes, setImagenes] = React.useState([])
  //Todos los descuentos en la DB
  const [descuentos, setDescuentos] = React.useState([])

  //Funcion que llama los productos en la DB y los guarda en el estado si el status es OK
  const fetchProductosAction = async () => {
    const {status, data} = await fetchProductos()
    if(status === 200) setProductos(data)
  }

  //Funcion que llama las categorias en la DB y los guarda en el estado si el status es OK
  const fetchCategoriasAction = async () => {
    const {status, data} = await fetchCategorias()
    if(status === 200) setCategorias(data)
  }
  
  //Funcion que llama las imagenes en la DB y los guarda en el estado si el status es OK
  const fetchImagenesAction = async () => {
    const {status, data} = await fetchImagenes()
    if(status === 200) setImagenes(data)
  }

  //Funcion que llama los descuentos en la DB y los guarda en el estado si el status es OK
  const fetchDescuentosAction = async () => {
    const {status, data} = await fetchDescuentos()
    if(status === 200) setDescuentos(data)
  }

  //Ejecutamos todas las llamadas en el primer renderizado
  useEffect(() => {
    fetchProductosAction();
    fetchCategoriasAction();
    fetchImagenesAction();
    fetchDescuentosAction()
  }, [])

  //Vuelve los productos al valor inicial para limpiar el formulario
  const handleClean = () => {
    setProductoPut(initialValues)
  }

  return (
    <div className='flex flex-col md:flex-row gap-4 font-rubik'>
      <div className='flex flex-col gap-2'>
        <div className='sticky top-2 flex flex-col gap-2 items-center'>
          <FormProducto productoPut={productoPut} categorias={categorias} imagenes={imagenes} descuentos={descuentos} getProductos={fetchProductosAction} handleClean={handleClean}/>
          {/* Si el id_producto es diferente a cero, entonces hay un producto para editar en el formulario, por lo tanto si queremos limpiar el formulario presionamos este boton para poder crear un nuevo producto y no editar el que se encuentra actualmente */}
          {productoPut.id_producto !== 0 && <button onClick={handleClean} className='!bg-primary w-full text-black flex flex-nowrap gap-1 justify-center items-center'><PiBroom /> Limpiar formulario</button>}
        </div>
      </div>
      {/* Tabla donde se muestran los productos que tenemos en nuestra DB */}
      <div className='p-2 border rounded-md overflow-x-auto w-full overscroll-x-auto min-h-fit'>
        <p className='col-span-4 text-center text-2xl pb-2'>Productos registrados</p>
        <table className='w-full col-span-4 min-w-fit'>
          <thead className='w-full border border-primary min-w-fit'>
            <tr className='flex flex-nowrap w-full '>
              <th className='min-w-20 max-w-20 w-full p-1'>Imagen</th>
              <th className='min-w-80 max-w-full w-full p-1'>Nombre</th>
              <th className='min-w-32 max-w-32 w-full p-1 text-start'>Categoria</th>
              <th className='min-w-20 max-w-20 w-full p-1 text-end'>Precio</th>
              <th className='min-w-20 max-w-20 w-full p-1'>Stock</th>
              <th className='min-w-20 max-w-20 w-full p-1 text-center'>Desc</th>
              <th className='min-w-36 max-w-36 w-full p-1 pe-1'>Acciones</th>
            </tr>
          </thead>
          <tbody className='border border-primary w-full min-w-fit'>
          {/* Aqui se renderiza cada fila */}
          {productos?.map((producto, index) => 
          //Funcion que llama los productos en la DB y los guarda en el estado
          //Index % 2 === 0  ---> Es para que tengamos una diferencia de colores entre cada fila, para que sea mas agradable a la lectura de la tabla
            <tr key={index} className={`${index % 2 === 0 ? "bg-black" : ""} flex flex-nowrap hover:bg-primary hover:text-black place-items-center duration-200 min-w-fit`}>
              <td className='min-w-20 max-w-20 w-full p-1 text-start text-nowrap'><img src={producto.url} alt={producto.nombre} className='object-contain max-h-12 mx-auto'/></td>
              <td title={producto.nombre} className='min-w-80 max-w-96 truncate w-full p-1 text-start text-nowrap'>{producto.nombre}</td>
              <td className='min-w-32 max-w-32 w-full p-1 text-start capitalize'>{producto.categoria}</td>
              <td className='min-w-20 max-w-20 w-full p-1 text-end'>{producto.precio}</td>
              <td className='min-w-20 max-w-20 w-full p-1 text-center'>{producto.stock}</td>
              <td className='min-w-20 max-w-20 w-full p-1 text-center'>{producto.descuento}%</td>
              <td className='min-w-36 max-w-36 w-full p-1 flex flex-nowrap justify-end gap-1'>
                {/* Boton para setear el productPut para poder cargar los datos de este producto en el formulario y poder editarlo */}
                <button className='!text-white !bg-blue-700 !p-1 hover:scale-105 duration-200' onClick={() => setProductoPut(producto)}>Editar</button>
                {/* Boton para borrar el producto de nuestra DB */}
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
