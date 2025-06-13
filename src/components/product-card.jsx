import { Link } from "react-router-dom";

export default function ProductCard({producto}) {
  return (
    <Link to={`${producto.id}`} className="flex !text-primary flex-col border rounded-md overflow-clip  hover:shadow hover:shadow-primary duration-200">
      <img src="https://http2.mlstatic.com/D_Q_NP_2X_652624-MLA73223130266_122023-E.webp" alt={producto.nombre} className=""/>
      <div className="px-2 pt-1 pb-6">
        <div className="font-semibold">{producto.marca}</div>
        <div>{producto.nombre}</div>
        <div className="capitalize text-sm">{producto.categoria}</div>
        {producto.descuento > 0 
        ? <div>
            <div className="text-xs line-through">$ {producto.precio}</div>
            <div className="text-2xl tracking-wide font-semibold">$ {producto.precio * (1 - producto.descuento/100)}</div>
          </div>
        : <div className="text-2xl tracking-wide pt-2 font-semibold">$ {producto.precio}</div>
        }
        <div className="py-1 text-sm">Mismo precio en 6 cuotas de ${producto.descuento > 0 ? ((producto.precio - (producto.precio * producto.descuento/100))/6).toFixed(2) : producto.precio/6}</div>
        <div className="py-1">Envio gratis</div>
      </div>
    </Link>
  )
}
