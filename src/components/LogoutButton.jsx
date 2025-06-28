import { Link, useNavigate } from "react-router-dom"
import userStore from "../store/storeUsuario"

const LogoutButton = () => {
    //Si existe un usuario conectado hago que aparezca el enlace para ir a /admin y tambien el boton de logout
    const navigate = useNavigate()
    //Remueve el usuario
    const logout = userStore(state => state.logOut)
    //Traigo datos del usuario
    const user = userStore(state => state.getUsuario())

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    return(
        user?.userName && <div className="flex flex-nowrap gap-4 items-center">

        <Link to='/admin' className="!text-primary relative group capitalize !font-rubik-dirt">
            <span className="absolute bottom-0 border-b-2 mx-auto border-b-transparent group-hover:border-b-primary inset-x-0 group-hover:animate-grow"></span>
            {user.userName}
        </Link>

        <button onClick={handleLogout} className="!animate-fade-in !relative !text-primary !bg-black hover:!bg-primary hover:!text-black !p-2 !max-w-80 !w-full !border-2 !rounded-md !m-auto">Logout</button>
        </div>
    )
}

export default LogoutButton