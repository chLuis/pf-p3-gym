import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-6 px-4">
      <hr className="border-t border-gray-600 mb-6 w-11/12 mx-auto" /> {/*Linea que divide el contenido */}
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 md:gap-12">
          <p className="text-sm mb-4 md:mb-0">© 2025 Powerhouse. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-3xl"> {/*Utilizamos react-icons para los botones de sus respectivos iconos */}
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:!text-pink-500"><FaInstagram/></a>
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:!text-green-500"><FaWhatsapp/></a>
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:!text-blue-400"><FaPhoneAlt/></a>
          </div>
      </div>
    </footer>
  )
}
