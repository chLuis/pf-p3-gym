import { useEffect, useState } from "react"
import ProductCard from "../components/product-card"
import { PRODUCTOS_CONST } from "../lib/productos"

export const Productos = () => {
  //LUIS
const CATEGORIAS = ["toallas","mancuernas","proteinas","guantes","accesorios","suplementos","discos","barras","ropa"]
  const [productos, setProductos] = useState(PRODUCTOS_CONST)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10000)
  const [category, setCategory] = useState([])

  useEffect(() => {
    category.length === 0 
    ? setProductos(PRODUCTOS_CONST)
    : setProductos(PRODUCTOS_CONST.filter(producto => category.some(text => text === producto.categoria)))
  },[category])
  const handleMinPrice = (value) => {
    setMinPrice(value)
  }

  const handleMaxPrice = (value) => {
    setMaxPrice(value)
  }
  // producto.precio >= minPrice && producto.precio <= maxPrice && 

  
  return (
    <div className="w-full max-w-7xl mx-auto p-4 grid grid-cols-8 gap-6">
      <div className="col-span-2 flex flex-col gap-2 px-12">
        <div className="border rounded-md flex flex-col gap-2 p-4">
        <p>Filtrar por:</p>
          {CATEGORIAS.map((categoria, index) =>
          <label key={index} className="flex gap-2 items-center cursor-pointer group" >
            <input type="checkbox" checked={category.some(text => text === categoria)} value={categoria} onChange={(e) => setCategory([e.target.value])} className="p-2 border-b"/>
            <span className="capitalize group-hover:text-yellow-300">{categoria}</span>
          </label>
          )}
        </div>
        <div className="border rounded-md flex flex-col gap-2 p-4">
        <p>Rango de precio</p>
          <span>Desde {minPrice}</span>
          <input type="range" className="p-2 border-b" defaultValue={0} step={50} min={0} max={10000} onChange={(e) => handleMinPrice(e.target.value)}/>
          <span>Hasta {maxPrice}</span>
          <input type="range" className="p-2 border-b" defaultValue={10000} min={minPrice} max={10000} onChange={(e) => handleMaxPrice(e.target.value)}/>

        </div>
      </div>
      <div className="col-span-6 grid grid-cols-3 gap-7">
        {productos.map((producto, index) =>
          <ProductCard key={index} producto={producto} />
        )}
      </div>
    </div>
  )
}
