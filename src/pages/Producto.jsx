import { useNavigate, useParams,Link } from "react-router-dom";
import {PRODUCTOS_CONST} from "../lib/productos";

import ProductCard from "../components/product-card";
export const Producto = () => {
  const { id } = useParams();
const producto=PRODUCTOS_CONST.find(p=>p.id===parseInt(id))
const navigate=useNavigate()
 
  if (!producto) {
    return <div className="text-center text-red-500 text-xl">Producto no encontrado</div>;
  }

  
const relacionados=PRODUCTOS_CONST.filter(p=>p.categoria===producto.categoria&& p.id!=producto.id)

  return (
    <div className="max-w-5xl mx-auto p-6 grid gap-8 bg-yellow-300">
     
      <div className="p-4 border rounded shadow">
        <img src={ProductCard.img} alt={producto.nombre} />
        <h1 className="text-2xl font-bold">{producto.nombre}</h1>
        <p className="text-lg">Precio: ${producto.precio}</p>
        
        <p className="text-gray-600">Categoría: {producto.categoria}</p>
        <p className="text-lg">descripcion: {producto.descripcion}</p>
      <button
  className="btn btn-success"
  onClick={() =>
    window.location.href = `https://wa.me/3813676949?text=Hola,%20quiero%20comprar%20${encodeURIComponent(producto.nombre)}`
  }
>
  Comprar por WhatsApp
</button>

      </div>

    
<div>

  <h2 className="text-xl font-semibold mb-4">Productos relacionados</h2>

  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    
    
    {relacionados.map(p => (
      <div
        key={p.id} 
        className="p-4 border rounded hover:shadow cursor-pointer"
       
        onClick={()=>navigate(`/productos/${p.id}`)}
        
      >
        <img src={p.imagen} alt={p.nombre} />
        
        <h3 className="text-lg font-bold">{p.nombre}</h3>
      
        <p>Precio: ${p.precio}</p>
      </div>
    ))}

 
    {relacionados.length === 0 && <p>No hay productos relacionados.</p>}
  </div>
</div>

    </div>
  );
};
