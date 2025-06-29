import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductosRelacionados, fetchProductoUnico } from "../services/productos.service";
import carritoStore from "../store/storeCarrito";
import { MdAddShoppingCart } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";

export const Producto = () => {
  const { id } = useParams(); //Traemos el ID desde la url
  const agregarProducto = carritoStore(state => state.agregarProducto) //Funcion para agregar productos desde el store


  const [producto, setProducto] = useState([]) //Estado para mostrar el producto
  const [relacionados, setRelacionados] = useState([]) //Estado para mostrar productos relacionados

  //Funcion para buscar un producto especifico por id
  const fetchProductoUnicoAction = async (id) => {
    try {
      //Datos que vienen desde el backend
      const data = await fetchProductoUnico(id)
      setProducto(data)
    } catch (error) {
      console.error("Error", error)
    }
  }

  useEffect(() => {
    fetchProductoUnicoAction(id)

  }, [id])

  useEffect(() => {
    if (producto.id_categoria) {
      const fetchRelacionados = async () => { //Funcion asincronica para traer los productos relacionados
        try {
          const data = await fetchProductosRelacionados(producto.id_categoria)
          setRelacionados(data.filter(prod=>prod.id_producto !== producto.id_producto)) //Filtro para que no aparezca el mismo producto
        } catch (error) {
          console.error("Error al traer productos relacionados", error)
        }
      }

      fetchRelacionados()
    }
  }, [producto])

  //Funcion para agregar productos al carrito, se consume dentro de un boton posteriormente
  const handleAgregar = () => {
    agregarProducto(producto.id_producto)
    toast.success("Producto agregado al carrito", {
      position: "bottom-right",
      autoClose: 1000,
      pauseOnHover: false
    })
  }
  return (
    <>
  <div className="max-w-5xl mx-auto p-6 grid gap-10 bg-primary mt-2">

    {/* Detalle del producto */}
    <div className="bg-black rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start">
      
      {/* Imagen a la izquierda */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={producto.url}
          alt={producto.nombre}
          className="w-full max-h-96 object-contain rounded-lg"
        />
      </div>

      {/* Mostramos info a la derecha */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl text-primary font-bold">{producto.nombre}</h1>

        <div className="flex flex-wrap items-center gap-4">
           {producto.descuento > 0 
        ? <div className="pt-1 !text-primary">
            <div className="absolute text-xl top-1 right-1 font-rubik-dirt bg-red-700 text-white rounded-4xl px-3 animate-caret-blink">{producto.descuento}% OFF</div>
            <div className="text-xs line-through">$ {producto.precio}</div>
            <div className="text-2xl tracking-wide font-rubik-dirt">$ {Math.floor(producto.precio * (1 - producto.descuento/100))}</div>
          </div>
        : <div className="text-2xl tracking-wide pt-2 font-rubik-dirt">$ {producto.precio}</div>
        }
          <p className="text-md text-primary">📦 {producto.categoria}</p>
        </div>

        <p className="text-md text-primary">📝 {producto.descripcion}</p>

        <div className="flex flex-wrap items-center gap-4 mt-4">
          <a 
            className="flex items-center rounded-full bg-green-600 hover:bg-green-700 text-black font-bold px-6 py-2 hover:!text-white duration-200"
            href={`https://wa.me/3813676949?text=Hola,%20quiero%20comprar%20${encodeURIComponent('producto.nombre')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Comprar por WhatsApp <FaWhatsapp className="ml-2" />
          </a>

          <button
            onClick={handleAgregar}
            className="!flex !items-center !gap-2 !bg-primary hover:!bg-black-custom !text-black !font-bold !py-2 !px-4 !rounded-full group duration-200"
          >
            <MdAddShoppingCart size={20} className="group-hover:animate-bounce group-hover:!text-white"/>
          </button>
        </div>
      </div>
    </div>

    {/* Productos relacionados */}
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Productos relacionados</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {relacionados.map(p => (
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={`/productos/${p.id_producto}`}
            key={p.id_producto}
            className="bg-black text-yellow-400 rounded-xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg hover:border-yellow-400 border cursor-pointer"
          >
            <img
              src={p.url}
              alt={p.nombre}
              className="w-full h-77 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.nombre}</h3>
               {p.descuento > 0 
        ? <div className="pt-1">
            <div className="absolute text-xl top-1 right-1 font-rubik-dirt bg-red-700 text-white rounded-4xl px-3 animate-caret-blink">{p.descuento}% OFF</div>
            <div className="text-xs line-through">$ {p.precio}</div>
            <div className="text-2xl tracking-wide font-rubik-dirt">$ {Math.floor(p.precio * (1 - p.descuento/100))}</div>
          </div>
        : <div className="text-2xl tracking-wide pt-2 font-rubik-dirt">$ {p.precio}</div>
        }
            </div>
          </Link>
        ))}

        {relacionados.length === 0 && (
          <p className="text-center col-span-full text-gray-500">No hay productos relacionados.</p>
        )}
      </div>
    </div>
  </div>
</>
  );
};
