import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const Buscador = ({cerrarBusqueda}) => {

    const [busqueda, setBusqueda] = useState("") //Estado para escribir la busqueda
    const [resultados, setResultados] = useState([]) //Estado para mostrar los resultados
    const [sinResultados, setSinResultados] = useState(false) // Estado para determinar si ya se realizó la consulta

    //Funcion para realizar la busqueda de productos
    const buscarProd = async () => { 

        //Si el resultado de la busqueda es 0 no se busca nada
        if (busqueda.length < 1) return setResultados([])

        try {
            const {data} = await axios.get(`${import.meta.env.VITE_BACK}/productos/buscar/${busqueda}`)
            if(data.data.length === 0) setSinResultados(true)
            setResultados(data.data)
        } catch (error) {
            console.error("Error", error)
        }
        }

    return(
        <div className="relative w-full px-4 py-3 bg-black-custom animate-fade-down" onClick={(e) => e.stopPropagation()}>
            <div className="relative max-w-xl mx-auto flex items-center gap-2">
            <input
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" ? buscarProd() : setSinResultados(false)}
                className="w-full p-2 rounded-md border border-primary bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button className="bg-primary hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md" onClick={buscarProd}>Buscar...</button>
        {resultados.length > 0 && (
            <div className="absolute flex flex-col gap-1 top-11 bg-white w-full shadow max-h-60 overflow-auto mt-1 rounded-md z-10">
                {/*Cuando clickeamos el producto nos lo muestra */}
            {resultados.map((producto, index) => (
                <Link
                key={index}
                className="p-2 hover:bg-yellow-100 cursor-pointer flex flex-nowrap gap-1 items-center"
                onClick={() => cerrarBusqueda(false)}
                to={`/productos/${producto.id_producto}`}
                >
                    <img src={producto.url} alt={producto.nombre} className="h-16 w-16 object-contain" />
                    {producto.nombre}
                </Link>
            ))}
            </div>
        )}
        {/*Si el resultado de la busqueda no coincide se muestra un mensaje */}
        {sinResultados && resultados.length === 0 && (
            <div className="absolute top-11 !bg-white w-full shadow max-h-60 overflow-auto mt-1 rounded-md z-10">
            <p className="p-2 !text-gray-600 italic">No se encontraron resultados para ' {busqueda} '.</p>
            </div>
        )}
        </div>

        
    </div>
    )
}

export default Buscador