import { useNavigate } from "react-router-dom"
import userStore from "../store/storeUsuario"

const LogoutButton = () => {

    const navigate = useNavigate()
    const logout = userStore(state => state.logOut)
    const user = userStore(state => state.getUsuario())

    const handleLogout = () => {
        logout()
        //localStorage.clear() esta funcion elimina directamente todo
        navigate("/")
    }

    return(
        user?.userName && <button onClick={handleLogout} className="!animate-fade-in !relative !text-primary !bg-black hover:!bg-primary hover:!text-black !p-2 !max-w-80 !w-full !border-2 !rounded-md !m-auto">Logout</button>
    )
}

export default LogoutButton