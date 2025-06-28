import { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { toast } from 'react-toastify';

export const Contacto = () => {
  const [loading, setLoading] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    //agarra los valores del form
    setLoading(true)
    e.preventDefault();
    //Ejemplo de envio de formulario, con una demora y avisamos al usuario que el formulario se esta enviando y luego finalizamos con un toast de envio exitoso y reseteamos los valores del form
    setTimeout(() => {
      setLoading(false)
      toast.success("Mensaje enviado con exito!")
      setNombre("")
      setEmail("")
      setTel("")
      setMensaje("")
    }, 2000)
    
  }
  return (
    <div
      className="min-h-screen bg-cover bg-center"
    >
      <div className="bg-primary mt-10 bg-transparente bg-opacity-80 max-w-xl mx-auto p-8 rounded-lg shadow-md">
        <div className="mb-8 text-center">
          <h1 className="!text-black text-3xl mb-2 font-rubik-dirt">CONTACTO</h1>
          <h2 className=" !text-black">
            Para consultas, completá el siguiente formulario:
          </h2>
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="nombre" className="block text-xl font-semibold text-gray-700 mb-1">
              Nombre y Apellido
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Juan Perez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              maxLength={30}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 placeholder:!text-gray-700 !text-white !bg-black-custom focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xl font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={50}
              placeholder="nombre@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 placeholder:!text-gray-700 !text-white !bg-black-custom focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="telefono"  className="block text-xl font-semibold text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              maxLength={16}
              placeholder="381 5714845"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 placeholder:!text-gray-700 !text-white !bg-black-custom focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-xl font-semibold text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              maxLength={160}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Mensaje"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 placeholder:!text-gray-700 !text-white !bg-black-custom focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className=" !w-full mt-4 !bg-blue-700 !text-white !font-semibold !py-2 !px-4 !rounded-lg hover:!bg-blue-800 !transition !duration-600"
          >
            {loading ? <VscLoading className='animate-spin text-2xl mx-auto' /> : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
};