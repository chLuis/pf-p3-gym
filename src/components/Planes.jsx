const Planes = () => {

    const membresias = [
        {
            plan: "Plan básico",
            tiempo: "Mensual",
            precio: 30000,
            descripcion: "Acceso a sala de musculación, clases grupales básicas y vestuarios. Ideal para comenzar.",
            color: "bg-amber-100",
        },
        {
            plan: "Plan premium",
            tiempo: "Mensual",
            precio: 40000,
            descripcion: "Incluye todo el básico + piscina, entrenamiento funcional y acceso a múltiples sedes.",
            color: "bg-amber-200",
        },
        {
            plan: "Plan excluisvo",
            tiempo: "Mensual",
            precio: 50000,
            descripcion: "Todos los beneficios, acceso ilimitado, sesiones con entrenador y descuentos especiales.",
            color: "bg-amber-300",
        }
    ]

    return(
        <>
            <h2 className="text-black text-4xl sm:text-6xl text-center mb-12 font-rubik-dirt">Conoce nuestros planes</h2>
            {/*Creamos 3 cards con el contenido de cada plan */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {membresias.map((membresia, index) => (
                    <div key={index}
                    className={`${membresia.color} max-w-96 p-10 pt-10 rounded-xl shadow-md shadow-black/50 hover:shadow-lg text-center mx-auto duration-200`}
                    >
                        <h3 className="text-2xl pt-4 font-rubik-dirt capitalize">{membresia.plan}</h3>
                        <div className="-mt-2">{membresia.tiempo}</div>
                        <h5 className="text-center font-rubik-dirt text-4xl p-3">
                            ${membresia.precio.toLocaleString()}
                        </h5>
                        <p className="mb-6 pt-5 pb-5 font-rubik" >{membresia.descripcion}</p>
                        <a
                        className="!bg-blue-700 hover:!bg-blue-900 !text-white !font-semibold !py-2 !px-4 !rounded-full !transition !duration-300"
                        href={`https://wa.me/3813676949?text=Hola,%20quiero%20comprar%20el%20${encodeURIComponent(membresia.plan)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            ¡Conseguílo ya!
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Planes