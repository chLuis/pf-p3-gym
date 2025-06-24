import { useNavigate } from "react-router-dom"

const LogoutButton = () => {

    const navigate = useNavigate()
    const user = localStorage.getItem("usuarioPowerhouse")
    console.log(user);

    const handleLogout = () => {
        localStorage.removeItem("usuarioPowerhouse")
        //localStorage.clear() esta funcion elimina directamente todo
        navigate("/")
    }

    return(
        user && <button onClick={handleLogout} className="!animate-fade-in !relative !bg-black !p-4 !max-w-80 !w-full !border-2 !rounded-md !m-auto">Logout</button>
    )
}

export default LogoutButton