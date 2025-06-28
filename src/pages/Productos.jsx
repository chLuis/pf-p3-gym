import { useEffect, useState } from "react"
import ProductCard from "../components/product-card"
import { BiChevronDown } from "react-icons/bi"
import { fetchCategorias, fetchProductos } from "../services/productos.service"
import { PiBroom } from "react-icons/pi"

export const Productos = () => {
  const [categorias, setCategorias] = useState([])
  const [productos, setProductos] = useState([])
  const [productosFiltered, setProductosFiltered] = useState([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(900000)
  const [isLoading, setIsLoading] = useState(true)
  const [categoryFiter, setCategoryFiter] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const handleRemoveFilters = () => {
    setCategoryFiter([])
    setMinPrice(0)
    setMaxPrice(900000)
  }

  const fetchProductosAction = async () => {
    const {status, data} = await fetchProductos()
    if(status === 200) {
      setProductos(data)
      setProductosFiltered(data)
    }
  }

  const fetchCategoriasAction = async () => {
    const {status, data} = await fetchCategorias()
    if(status === 200) setCategorias(data)
  }

  useEffect(() => {
    fetchProductosAction()
    fetchCategoriasAction()
  },[])

  useEffect(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => {
      const handleFilter = () => {
        categoryFiter.length === 0 
        ? setProductosFiltered(productos.filter(producto => (producto.precio * (1 - producto.descuento/100)) >= minPrice && (producto.precio * (1 - producto.descuento/100)) <= maxPrice))
        : setProductosFiltered(productos.filter(producto => (producto.precio * (1 - producto.descuento/100)) >= minPrice && (producto.precio * (1 - producto.descuento/100)) <= maxPrice && categoryFiter.some(text => text === producto.categoria)))
      }
      handleFilter()
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timeout)
  },[productos, categoryFiter, maxPrice, minPrice])


  const handleMinPrice = (value) => {
    if(+value > maxPrice) {
      setMinPrice(value)
      setMaxPrice(value)
    }
    setMinPrice(value)
  }

  const handleMaxPrice = (value) => {
    setMaxPrice(value)
  }

  const handleCategory = (value) => {
    if(categoryFiter.some(text => text === value)){
      setCategoryFiter(categoryFiter.filter(text => text !== value))
    }else{
      setCategoryFiter([...categoryFiter, value])
    }
  }

  
  return (
    <div className="w-full max-w-7xl mx-auto p-4 grid grid-cols-8 gap-6 !text-primary font-rubik">
    <div className="col-span-8 sm:col-span-3 md:col-span-2 flex flex-col gap-2">
    {!showFilter 
    ? <button className="!border-primary !text-primary !bg-black-custom col-span-8 sm:col-span-3 md:col-span-2 h-fit flex flex-nowrap gap-2 items-center justify-center hover:!bg-primary hover:!text-black" onClick={() => setShowFilter(true)}>
        Filtrar <BiChevronDown className="animate-pulse text-xl stroke-2"/>
      </button>
      :<div className="col-span-8 sm:col-span-3 md:col-span-2 flex flex-col gap-2">
        <div className="border rounded-md flex flex-col gap-2 p-4">
        <p>Filtrar por:</p>
          {categorias.map((categoria, index) =>
          <label key={index} className="flex gap-2 items-center cursor-pointer group" >
            <input type="checkbox" checked={categoryFiter.some(text => text === categoria.nombre)} value={categoria.nombre} onChange={(e) => handleCategory(e.target.value)} className="p-2 border-b accent-primary"/>
            <span className="capitalize group-hover:text-yellow-300">{categoria.nombre}</span>
          </label>
          )}
        </div>
        <div className="border rounded-md flex flex-col gap-2 p-4">
          <p>Rango de precio</p>
          <span>Desde {minPrice}</span>
          <input type="range" className="p-2 border-b accent-primary" defaultValue={0} step={50} min={0} max={50000} onChange={(e) => handleMinPrice(e.target.value)}/>
          <span>Hasta {maxPrice}</span>
          <input type="range" className="p-2 border-b accent-primary" defaultValue={900000} min={minPrice} max={900000} onChange={(e) => handleMaxPrice(e.target.value)}/>

        </div>
        <button className="!border-primary !text-primary !bg-black-custom col-span-8 sm:col-span-3 md:col-span-2 h-fit flex flex-nowrap gap-2 items-center justify-center hover:!bg-primary hover:!text-black" onClick={() => setShowFilter(false)}>Ocultar <BiChevronDown className="rotate-180 animate-pulse text-xl stroke-2"/></button>
      </div>}
      {(categoryFiter.length > 0 || minPrice > 0 || maxPrice < 900000) && <button
      onClick={handleRemoveFilters}
      className="!bg-primary w-full text-black flex flex-nowrap gap-1 justify-center items-center hover:!bg-primary/90 !durartion-200"
      >
      <PiBroom /> Quitar filtros
    </button>}
      </div>
      <div className={`${isLoading ? "opacity-30 pointer-events-none" : ""} h-fit col-span-8 sm:col-span-5 md:col-span-6 grid grid-cols-2 lg:grid-cols-3 gap-7`}>
        {productosFiltered.map((producto, index) =>
          <ProductCard key={index} producto={producto}/>
        )}
      </div>
    </div>
  )
}
