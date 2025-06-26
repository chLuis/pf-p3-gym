const Actividades = () => {
    
    return(
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full font-rubik">
                {/*El aside del lado izquierdo se mantiene fijo mientras se hace scroll en la pagina hasta terminar el contenedor*/}
                <aside className="col-span-1 text-white p-6 sticky bg-black-custom top-0 h-fit self-start">
                    <h1 className="!text-2xl text-center lg:text-start lg:!text-4xl mb-6 font-rubik-dirt">Todas las actividades que buscas</h1>
                    <p className="text-center lg:text-start">En Powerhouse tenemos todas las actividades que buscas, combinar distintas actividades es fundamental para mantener la motivacion y disfrutrar al maximo tu rutina deportiva</p>
                    <button className="!block !mx-auto !rounded-full !text-center !bg-primary !text-black hover:!bg-amber-200 !px-6 !py-3 !text-lg !font-semibold !mt-6">Asociate</button>
                </aside>
                {/*Cargamos las opciones de actividades a la derecha */}
                <section className="col-span-2 text-white p-6 space-y-12">
                {opciones.map((opcion, index) => (
                    <div key={index} className={`flex items-center gap-6 ${index % 2 !== 0 ? "flex-row-reverse" : "" }`}>
                        {/*Agregamos actividad con imagenes y descripcion */}
                                <img src={opcion.foto} alt={opcion.nombre} className="w-1/2 rounded-xl object-contain"/>
                                <p className="w-1/2">{opcion.descripcion}</p>
                            </div> 
                ))}
                </section>
            </div>
        </>
    )
}

export default Actividades

const opciones = [
        {
            nombre: "Musculacion",
            foto: "/musculacion.png",
            descripcion: "Trabajá la fuerza y resistencia, desarrollando todos los grupos musculares. Prevení lesiones y mejorá tu calidad de vida. Contamos con +800 gimnasios equipados con la última tecnología."
        },
        {
            nombre: "Aire Libre",
            foto: "/aire-libre.png",
            descripcion: "Entrená al aire libre en clubes y espacios outdoor. Accedé a la parrilla completa de actividades"
        },
        {
            nombre: "Natacion",
            foto: "/natacion.png",
            descripcion: "Disfrutá de todos los beneficios de nadar, mejorá tu aparato respiratorio y cardiovascular. +120 piletas cubiertas y al aire libre."
        },
        {
            nombre: "Cuerpo y mente",
            foto: "/mente.png",
            descripcion: "Respirá, relajá tu mente y mejorá tu movilidad articular. Pilates, yoga, estiramientos y muchas actividades más, orientadas a encontrar tu bienestar integral."
        },
        {
            nombre: "Adultos mayores",
            foto: "/adultos.png",
            descripcion: "Mantenerte activo es sinónimo de salud, ya no hay excusas. Cientos de actividades para estimular tu cuerpo y ralentizar el paso de la edad."
        },
        {
            nombre: "Fittness",
            foto: "/fit.png",
            descripcion: "+100 disciplinas orientadas al acondicionamiento físico. GAP, Localizada, Ritmos, SportCycle, SportFunctional, taller de abdominales y más, te están esperando."
        },
        {
            nombre: "Niños",
            foto: "/kids.png",
            descripcion: "Actividades para niños, mientras vos entrenás tu hijo/a también puede divertirse y estar en movimiento."
        }
    ]