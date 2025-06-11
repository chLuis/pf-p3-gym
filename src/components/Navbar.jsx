import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="flex gap-2 items-center justify-between px-2 w-full">
    <div className="w-20">
    <Link to="/">home</Link>

    </div>
    <div className="flex gap-4">
    <Link to="/contacto">Contacto</Link>
    <Link to="/login">login</Link>
    <Link to="/nosotros">Nosotros</Link>
    <Link to="/productos">Productos</Link>
    <Link to="/admin">Admin</Link>
    </div>
    </div>
  )
}
