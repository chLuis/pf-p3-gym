import { useState } from "react"

export const Login = () => {

  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    //Simulacion de error
    setError("Usuario o contraseña incorrectos")

    //Ocultamos el mesaje de error despues de un determinado tiempo
    setTimeout(() => {
      setError("")
    }, 4000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className=" max-w-md w-full rounded-2xl shadow-lg p-8 border border-gray-200 bg-primary">
        <h1 className="!text-2xl !text-center !font-bold !text-gray-800 !mb-6">Ingreso Admin Powerhouse</h1>
        <form action="" className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="text-left">
            <label htmlFor="" className="block text-sm font-semibold text-gray-700 mb-1">Usuario o email</label>
            <input type="text" placeholder="user" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="text-left">
            <label htmlFor="" className="block text-sm font-semibold text-gray-700 mb-1">Contraseña</label>
            <input type="password" placeholder="contraseña" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          {error && (<p className="text-red-600 text-sm text-center font-semibold">{error}</p>)}
          <button type="submit" className="!w-full !bg-blue-700 !text-white !font-semibold !py-2 !px-4 !rounded-lg hover:!bg-blue-800 !transition !duration-600">Ingresar</button>
        </form>
      </div>
    </div>
  )
}
