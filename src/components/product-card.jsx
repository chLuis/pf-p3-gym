import { Link } from "react-router-dom";

export default function ProductCard({producto}) {
  return (
    <Link to={`${producto.id_producto}`} className={`animate-fade-in-long relative flex !text-primary flex-col border rounded-md overflow-clip hover:shadow-md hover:shadow-primary duration-200 h-auto group`}>
      <div className="h-fit border overflow-clip">
        <img src={producto.url || "https://http2.mlstatic.com/D_Q_NP_2X_652624-MLA73223130266_122023-E.webp"} alt={producto.nombre} className="aspect-square object-cover w-full h-auto group-hover:scale-105 group-hover:rotate-2 duration-200"/>
      </div>
      <div className="px-2 pt-1 pb-6">
        <div className="capitalize text-sm">{producto.categoria}</div>
        <div className="text-lg capitalize">{producto.nombre}</div>
        
        {producto.descuento > 0 
        ? <div className="pt-1">
            <div className="absolute text-xl top-1 right-1 font-rubik-dirt bg-red-700 text-white rounded-4xl px-3 animate-caret-blink">{producto.descuento}% OFF</div>
            <div className="text-xs line-through">$ {producto.precio}</div>
            <div className="text-2xl tracking-wide font-rubik-dirt">$ {Math.floor(producto.precio * (1 - producto.descuento/100))}</div>
          </div>
        : <div className="text-2xl tracking-wide pt-2 font-rubik-dirt">$ {producto.precio}</div>
        }
        <div className="py-1 text-sm">Mismo precio en 6 cuotas de ${producto.descuento > 0 ? ((producto.precio - (producto.precio * producto.descuento/100))/6).toFixed(2) : (producto.precio/6).toFixed(2)}</div>
        {/* <div className="py-1">Envio gratis</div> */}
      </div>
    </Link>
  )
}
