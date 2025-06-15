import React from "react";


export const Contacto = () => {
  return (
    <div
      className="min-h-screen bg-[url('')] bg-cover bg-center"
    >
      <div className="bg-transparente bg-opacity-80 max-w-xl mx-auto p-8 rounded-lg shadow-md">
        <div className="mb-8 text-center">
          <h1 className="contac-cambio text-3xl font-bold mb-2">CONTACTO</h1>
          <h2 className="contac-cambio ">
            Para consultas, completá el siguiente formulario:
          </h2>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="nombre" className="contac-cambio block font-semibold">
              Nombre y Apellido
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="contac-cambio block font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="telefono" className="contac-cambio block font-semibold">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="contac-cambio block font-semibold">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              className="w-full border rounded p-2"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};