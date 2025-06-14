
export const Home = () => {
  //AGUSTIN
  return (
    <>
      <div> {/*Caja para poner la imagen de portada. ocupa todo el ancho y 120 de altura */}
        <img src="/home.png" alt="Home" className="w-full h-120"/>
      </div>
      <div className="flex h-screen"> {/*Caja para dividir la pantalla */}
        <aside className="w-1/2 bg-gray-800 text-white p-6"> {/*Aside ocupa el 50% de la pantalla al lado izquierdo */}
          <h1 className="text-3xl font-bold text-yellow-600 mb-6">Titulo</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam voluptatem laudantium, praesentium, ut, illo culpa repellendus vel nemo quasi esse soluta eligendi blanditiis vitae perspiciatis! Ipsum ea aliquam ullam.</p>
        </aside>
        <section className="w-1/2 bg-amber-200 text-black p-6">
          <h1 className="text-3xl font-bold mb-6">Otro titulo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis harum sit sed atque vel perspiciatis quod pariatur illum nam hic. Ab perspiciatis doloribus facilis distinctio a aliquid porro corporis in.</p>
          <button className="block mx-auto !rounded-full text-center !bg-blue-800 hover:!bg-blue-700 !text-primary !px-6 !py-3 !text-lg !font-semibold mt-6">Conoce nuestos planes</button>
        </section>
      </div>
      <div className="flex">
        <aside className="w-1/3 text-white p-6 sticky top-0 h-fit self-start">
          <h1 className="text-3xl font-bold mb-6">Todas las actividades que buscas</h1>
          <p>En Powerhouse tenemos todas las actividades que buscas, combinar distintas actividades es fundamental para mantener la motivacion y disfrutrar al maximo tu rutina deportiva</p>
          <button className="block mx-auto rounded-full text-center bg-amber-900 text-black hover:bg-amber-200 px-6 py-3 text-lg font-semibold mt-6">Asociate</button>
        </aside>
        <section className="w-2/3 text-white p-6 space-y-12">
          <div className="flex items-center gap-6">
            <img src="https://www.sportclub.com.ar/assets/Actividades1-6de739b8.png" alt="musculacion" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">Trabajá la fuerza y resistencia, desarrollando todos los grupos musculares. Prevení lesiones y mejorá tu calidad de vida. Contamos con +800 gimnasios equipados con la última tecnología.</p>
          </div>
          <div className="flex items-center gap-6 flex-row-reverse">
            <img src="https://www.sportclub.com.ar/assets/Actividades2-c59beb83.png" alt="Aire libre" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">Entrená al aire libre en clubes y espacios outdoor. Accedé a la parrilla completa de actividades</p>
          </div>
          <div className="flex items-center gap-6">
            <img src="https://www.sportclub.com.ar/assets/Actividades3-b45df7c7.png" alt="Natacion" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">Disfrutá de todos los beneficios de nadar, mejorá tu aparato respiratorio y cardiovascular. +120 piletas cubiertas y al aire libre.</p>
          </div>
          <div className="flex items-center gap-6 flex-row-reverse">
            <img src="https://www.sportclub.com.ar/assets/Actividades4-1e782808.png" alt="Cuerpo y mente" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">Respirá, relajá tu mente y mejorá tu movilidad articular. Pilates, yoga, estiramientos y muchas actividades más, orientadas a encontrar tu bienestar integral.</p>
          </div>
          <div className="flex items-center gap-6">
            <img src="https://www.sportclub.com.ar/assets/Actividades5-edd74cb3.png" alt="Adultos mayores" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">Mantenerte activo es sinónimo de salud, ya no hay excusas. Cientos de actividades para estimular tu cuerpo y ralentizar el paso de la edad.</p>
          </div>
          <div className="flex items-center gap-6 flex-row-reverse">
            <img src="https://www.sportclub.com.ar/assets/Actividades6-7665c36f.png" alt="Fitness" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">+100 disciplinas orientadas al acondicionamiento físico. GAP, Localizada, Ritmos, SportCycle, SportFunctional, taller de abdominales y más, te están esperando.</p>
          </div>
          <div className="flex items-center gap-6">
            <img src="https://www.sportclub.com.ar/assets/Actividades7-f32c6e5a.png" alt="Kids" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">Actividades para niños, mientras vos entrenás tu hijo/a también puede divertirse y estar en movimiento.</p>
          </div>
        </section>
      </div>
      <section className="bg-yellow-200 text-black py-16 px-6">
        <h2 className="text-black font-extrabold text-3xl text-center mb-12">Conoce nuestros planes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-amber-100 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Plan basico</h3>
            <p>Acceso a sala de musculación, clases grupales básicas y vestuarios. Ideal para comenzar.</p>
            <button>¡Consiguelo ya!</button>
          </div>
          <div className="bg-amber-200 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Plan intermedio</h3>
            <p>Incluye todo el básico + piscina, entrenamiento funcional y acceso a múltiples sedes.</p>
            <button>¡Consiguelo ya!</button>
          </div>
          <div className="bg-amber-300 p-6 rounded-xl
            shadow-md text-center">
            <h3 className="text-xl font-bold mb-4">Plan full</h3>
            <p>Todos los beneficios, acceso ilimitado, sesiones con entrenador y descuentos especiales.</p>
            <button>¡Consiguelo ya!</button>
          </div>
        </div>
      </section>
    </>
  )
}
