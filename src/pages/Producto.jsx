import { useParams } from "react-router-dom";
// import { PRODUCTOS_CONST } from "../lib/productos";
import { useEffect, useState } from "react";
// import axios from "axios";
import { fetchProductoUnico } from "../services/productos.service";

export const Producto = () => {
  const { id } = useParams();
  // const producto = PRODUCTOS_CONST.find(p => p.id === parseInt(id));
  // const navigate = useNavigate();

  const [producto, setProducto] = useState([])
  // const [cargar, setCargar] = useState(true)
  // const [error, setError] = useState()

  // useEffect(() => {
  //   const fetchProducto = async () => {
  //     try {
  //       const response = await axios.get(`${import.meta.env.VITE_BACK}/productos/${id}`)
  //       console.log(response);
  //       setProducto(response.data)
  //     } catch (err) {
  //       console.error("Error al traer el producto:", err)
  //       setError("Producto no encontrado")
  //     } finally {
  //       setCargar(false)
  //     }
  //   }

  //   fetchProducto()
  // }, [id])

  const fetchProductoUnicoAction = async (id) => {
    try {
      const data = await fetchProductoUnico(id)
      setProducto(data)
    } catch (error) {
      console.error("Error", error)
    }
  }

  useEffect(() => {
    fetchProductoUnicoAction(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <div className="max-w-5xl mx-auto p-6 grid gap-10 bg-primary">
      {/* Detalle del producto */}
      <div className="bg-black rounded-xl shadow-md p-6">
        <img
          src={producto.url}
          alt={producto.nombre}
          className="w-full object-cover rounded mb-4"
        />
        <h1 className="text-3xl text-primary font-bold mb-2">{producto.nombre}</h1>
        <p className="text-lg text-primary mb-1">💰 Precio: ${producto.precio}</p>
        <p className="text-primary mb-1">📦 Categoría: {producto.categoria}</p>
        <p className="text-md mb-4 text-primary">📝 Descripción: {producto.descripcion}</p>

        <div className="flex flex-wrap gap-4">
          <a
            className="rounded-full bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-6 py-2"
            href={`https://wa.me/3813676949?text=Hola,%20quiero%20comprar%20${encodeURIComponent(producto.nombre)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar por WhatsApp
          </a>

         <a href="/carrito">carrito</a>
        </div>
     
      </div>

      {/* Productos relacionados como cards oscuras */}
      {/* <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Productos relacionados</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relacionados.map(p => (
            <div
              key={p.id}
              onClick={() => navigate(`/productos/${p.id}`)}
              className="bg-black text-yellow-400 rounded-xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg hover:border-yellow-400 border cursor-pointer"
            >
              <img
                src={p.imagen}
                alt={p.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.nombre}</h3>
                <p className="mt-1">Precio: ${p.precio}</p>
              </div>
            </div>
          ))}

          {relacionados.length === 0 && (
            <p className="text-center col-span-full text-gray-500">No hay productos relacionados.</p>
          )}
        </div>
      </div> */}
    </div>
    </>
  );
};
