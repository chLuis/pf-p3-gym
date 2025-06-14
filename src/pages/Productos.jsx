import { useEffect, useState } from "react"
import ProductCard from "../components/product-card"
import { PRODUCTOS_CONST } from "../lib/productos"
import { BiChevronDown } from "react-icons/bi"

export const Productos = () => {
  const CATEGORIAS = ["toallas","mancuernas","proteinas","guantes","accesorios","suplementos","discos","barras","ropa"]
  
  const [productos, setProductos] = useState(PRODUCTOS_CONST)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10000)
  const [category, setCategory] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showFilter, setShowFilter] = useState(false)


  useEffect(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => {
      const handleFilter = () => {
        category.length === 0 
        ? setProductos(PRODUCTOS_CONST.filter(producto => (producto.precio * (1 - producto.descuento/100)) >= minPrice && (producto.precio * (1 - producto.descuento/100)) <= maxPrice))
        : setProductos(PRODUCTOS_CONST.filter(producto => (producto.precio * (1 - producto.descuento/100)) >= minPrice && (producto.precio * (1 - producto.descuento/100)) <= maxPrice && category.some(text => text === producto.categoria)))
      }
      handleFilter()
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timeout)
  },[category, maxPrice, minPrice])


  const handleMinPrice = (value) => {
    setMinPrice(value)
  }

  const handleMaxPrice = (value) => {
    setMaxPrice(value)
  }

  const handleCategory = (value) => {
    if(category.some(text => text === value)){
      setCategory(category.filter(text => text !== value))
    }else{
      setCategory([...category, value])
    }
  }

  
  return (
    <div className="w-full max-w-7xl mx-auto p-4 grid grid-cols-8 gap-6 !text-primary">
    {!showFilter ?<button className="hover:!border-primary col-span-8 sm:col-span-3 md:col-span-2 h-fit flex flex-nowrap gap-2 items-center justify-center" onClick={() => setShowFilter(true)}>Filtrar <BiChevronDown /></button>
      :<div className="col-span-8 sm:col-span-3 md:col-span-2 flex flex-col gap-2">
        <div className="border rounded-md flex flex-col gap-2 p-4">
        <p>Filtrar por:</p>
          {CATEGORIAS.map((categoria, index) =>
          <label key={index} className="flex gap-2 items-center cursor-pointer group" >
            <input type="checkbox" checked={category.some(text => text === categoria)} value={categoria} onChange={(e) => handleCategory(e.target.value)} className="p-2 border-b"/>
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
        <button className="hover:!border-primary flex flex-nowrap gap-2 items-center justify-center" onClick={() => setShowFilter(false)}>Ocultar <BiChevronDown className="rotate-180"/></button>
      </div>}
      <div className={`${isLoading ? "opacity-30 pointer-events-none" : ""} col-span-8 sm:col-span-5 md:col-span-6 grid grid-cols-2 lg:grid-cols-3 gap-7`}>
        {productos.map((producto, index) =>
          <ProductCard key={index} producto={producto} />
        )}
      </div>
    </div>
  )
}
