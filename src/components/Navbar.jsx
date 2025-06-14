import { Link } from "react-router-dom";
import MemberSearch from "./member-search";

export const Navbar = () => {
  const pages = ["productos", "contacto", "nosotros", "admin"];

  return (
    <div className="flex gap-2 items-center justify-between px-4 py-1 w-full border-b font-anton border-b-primary">
      <Link to="/" className="flex flex-nowrap gap-1 items-center">
        <img src="/logo.webp" alt="logo" className="rounded-full aspect-square w-20" />
        <span className="text-4xl font-semibold text-primary font-anton">POWERHOUSE</span>
      </Link>

      <div className="flex gap-4 text-xl items-center">
        {pages.map((page, index) => (
          <Link
            className="!text-primary !font-bold relative group capitalize"
            to={`/${page}`}
            key={index}
          >
            {page}
            <span className="absolute bottom-0 border-b-2 mx-auto border-b-transparent group-hover:border-b-primary inset-x-0 group-hover:animate-grow"></span>
          </Link>
        ))}
        <MemberSearch />
      </div>
    </div>
  );
};
