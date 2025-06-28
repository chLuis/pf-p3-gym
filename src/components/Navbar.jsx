import { Link } from "react-router-dom";
import MemberSearch from "./member-search";
import LogoutButton from "./logoutButton";
import { CgShoppingCart } from "react-icons/cg";
import carritoStore from "../store/storeCarrito";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Buscador from "./Buscador";

export const Navbar = () => {
  const carrito = carritoStore(state => state.getCarrito())

  const [buscar, setBuscar] = useState(false)

  //Enlaces que mostraremos en el navbar
  const pages = [
    {value: "productos", location: "productos"},
    { value: "contacto", location: "contacto"},
    { value: "nosotros", location: "nosotros"},
    { value: <CgShoppingCart className="text-2xl stroke-1" />, location: "carrito"}
  ]


  return (
    <div className="flex flex-col w-full border-b border-primary" onClick={() => setBuscar(false)}>
    <div className="flex gap-2 items-center justify-between px-4 py-1 w-full font-rubik-dirt">
      {/* Logo que lleva al home */}
      <Link to="/" className="flex flex-nowrap gap-1 p-1 items-center">
        <img src="/logo.webp" alt="logo" className="rounded-full aspect-square w-16" />
        <span className="text-4xl text-primary font-rubik-dirt">POWERHOUSE</span>
      </Link>

      <div className="flex gap-4 text-xl items-center">
        <button
        onClick={(e) => {
          e.stopPropagation()
          setBuscar(!buscar)}}
          className={`!text-xl !rounded-md hover:!border-primary !border-0 !transition-colors !duration-500 ${buscar ? '!bg-primary !text-black-custom': '!bg-black-custom !text-primary'}`}
        >
          <FaSearch/>
        </button>

        {pages.map((page, index) => (
          <Link
            className="!text-primary relative group capitalize"
            to={`/${page.location}`}
            key={index}
          >
            {page.value}
            {/* Para que se puedan ver la cantidad de items en el carrito */}
            {page.location === 'carrito' && carrito.length > 0 && <span className="absolute font-light -top-3 -right-2 bg-blue-700 text-white rounded-full px-2  py-1 text-xs font-rubik">{carrito.length}</span>}
            {/* Para que el carrito no tenga el hover del resto de los enlaces del navbar */}
            {page.location !== 'carrito' && <span className="absolute bottom-0 border-b-2 mx-auto border-b-transparent group-hover:border-b-primary inset-x-0 group-hover:animate-grow"></span>}
          </Link>
        ))}
      
        <MemberSearch />
        <LogoutButton/>
      </div>
    </div>
    {/* Buscador de articulos por nombre */}
      {buscar && <Buscador cerrarBusqueda={setBuscar}/>}
    </div>
  );
};
