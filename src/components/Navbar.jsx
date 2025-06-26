import { Link } from "react-router-dom";
import MemberSearch from "./member-search";
import LogoutButton from "./logoutButton";
import { CgShoppingCart } from "react-icons/cg";

export const Navbar = () => {
  const pages = [
    {value: "productos", location: "productos"},
    { value: "contacto", location: "contacto"},
    { value: "nosotros", location: "nosotros"},
    { value: "admin", location: "admin"},
    { value: <CgShoppingCart />, location: "carrito"}
  ]
  const usuario = JSON.parse(localStorage.getItem('usuarioPowerhouse'))
  //console.log(usuario);


  return (
    <div className="flex gap-2 items-center justify-between px-4 py-1 w-full border-b font-rubik-dirt border-b-primary">
      <Link to="/" className="flex flex-nowrap gap-1 p-1 items-center">
        <img src="/logo.webp" alt="logo" className="rounded-full aspect-square w-16" />
        <span className="text-4xl font-semibold text-primary font-rubik-dirt">POWERHOUSE</span>
      </Link>

      <div className="flex gap-4 text-xl items-center">
        <LogoutButton/>
        {pages.map((page, index) => (
          <Link
            className="!text-primary !font-bold relative group capitalize"
            to={`/${page.location}`}
            key={index}
          >
            {page.value}
            {page.location !== 'carrito' && <span className="absolute bottom-0 border-b-2 mx-auto border-b-transparent group-hover:border-b-primary inset-x-0 group-hover:animate-grow"></span>}
          </Link>
        ))}
          {(usuario?.userRol === 'administrador' || usuario?.userRol === 'superadmin') && <Link
            className="!text-primary !font-bold relative group capitalize"
            to={`/admin`}
          >
          Admin
          <span className="absolute bottom-0 border-b-2 mx-auto border-b-transparent group-hover:border-b-primary inset-x-0 group-hover:animate-grow"></span>
          </Link>}
        
        <MemberSearch />
      </div>
    </div>
  );
};
