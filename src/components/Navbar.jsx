import { Link } from "react-router-dom";

export const Navbar = () => {
  const pages = ["contacto", "nosotros", "productos", "admin"]
  return (
    <div className="flex gap-2 items-center justify-between pe-4 w-full border-b border-b-primary">
    
    <Link to="/" className="w-28">
      <img src="/logo.webp" alt="logo" className="w-full"/>
      <span className="uppercase font-extrabold text- text-primary">powerhouse</span>
    </Link>

    
    <div className="flex gap-4 text-2xl">
    {pages.map((page, index) =>
    <Link className="!text-primary !font-bold relative group capitalize" to={`/${page}`} key={index}>
      {page}
      <span className="absolute bottom-0 border-b-2 mx-auto border-b-transparent group-hover:border-b-primary inset-x-0 group-hover:animate-grow"></span>
    </Link>
    )}
    
    </div>
    </div>
  )
}
