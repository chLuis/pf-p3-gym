import { Link } from "react-router-dom";
import MemberSearch from "./member-search";
import LogoutButton from "./logoutButton";
import { CgShoppingCart } from "react-icons/cg";
import carritoStore from "../store/storeCarrito";
import userStore from "../store/storeUsuario";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import Buscador from "./Buscador";

export const Navbar = () => {
  const carrito = carritoStore(state => state.getCarrito())
  const usuario = userStore(state => state.getUsuario())

  const [buscar, setBuscar] = useState(false)

  const pages = [
    {value: "productos", location: "productos"},
    { value: "contacto", location: "contacto"},
    { value: "nosotros", location: "nosotros"},
    { value: <CgShoppingCart className="text-2xl stroke-1" />, location: "carrito"}
  ]


  return (
    <div className="flex flex-col w-full border-b border-primary" onClick={() => setBuscar(false)}>
    <div className="flex gap-2 items-center justify-between px-4 py-1 w-full font-rubik-dirt">
      <Link to="/" className="flex flex-nowrap gap-1 p-1 items-center">
        <img src="/logo.webp" alt="logo" className="rounded-full aspect-square w-16" />
        <span className="text-4xl text-primary font-rubik-dirt">POWERHOUSE</span>
      </Link>

      <div className="flex gap-4 text-xl items-center">
        <LogoutButton/>
            {(usuario?.userRol === 'administrador' || usuario?.userRol === 'superadmin') && <Link
            className="!text-primary !font-bold relative group capitalize"
            to={`/admin`}
          >
          Admin
          <span className="absolute bottom-0 border-b-2 mx-auto border-b-transparent group-hover:border-b-primary inset-x-0 group-hover:animate-grow"></span>
          </Link>}

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
            {page.location === 'carrito' && carrito.length > 0 && <span className="absolute font-light -top-3 -right-2 bg-blue-700 text-white rounded-full px-2  py-1 text-xs font-rubik">{carrito.length}</span>}
            {page.location !== 'carrito' && <span className="absolute bottom-0 border-b-2 mx-auto border-b-transparent group-hover:border-b-primary inset-x-0 group-hover:animate-grow"></span>}
          </Link>
        ))}
      
        <MemberSearch />
      </div>
    </div>
      {buscar && <Buscador cerrarBusqueda={setBuscar}/>}
    </div>
  );
};
