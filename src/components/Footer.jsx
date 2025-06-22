import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import MemberSearch from "./member-search"

export const Footer = () => {
    return (

    <footer className="mt-16">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link to={"/"} className="flex items-center">
                        <img src="/logo.webp" className="h-8 me-3 rounded-full" alt="Powerhouse Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Powerhouse</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Nuestros productos</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <Link to={"/productos"} className="hover:underline">Productos</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Conocenos</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <Link to={"/nosotros"} className="hover:underline ">Nosotros</Link>
                            </li>
                            <li>
                                <Link to={"/contacto"} className="hover:underline">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-fit">
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Socios</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <MemberSearch />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center ">© 2025 <Link to={"/"} className="hover:underline">Powerhouse™</Link>. Todos los derechos reservados.
                </span>
                <div className="flex gap-6 text-3xl"> {/*Utilizamos react-icons para los botones de sus respectivos iconos */}
                <a href="#" className="hover:!text-pink-500"><FaInstagram/></a>
                <a href="#" className="hover:!text-green-500"><FaWhatsapp/></a>
                <a href="#" className="hover:!text-blue-400"><FaPhoneAlt/></a>
                </div>
            </div>
        </div>
    </footer>
    )
}
