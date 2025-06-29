import { Link } from "react-router-dom"

export const Error404 = () => {
  return (
    <div className="text-primary flex-1 flex flex-col pt-24 gap-4 justify-center items-center">
      <h4>Parece que te perdiste, esta página no existe, vuelve al inicio</h4>
      <Link to="/" className="text-primary text-3xl font-rubik-dirt border-b-2 border-b-transparent hover:border-b-primary uppercase">Volver</Link>
    </div>
  )
}
