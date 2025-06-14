import { Link as ScrollLink} from "react-scroll"

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
        <section className="w-1/2 bg-primary text-black p-6"> {/*Section ocupa el 50% de la pantalla al lado derecho */}
          <h1 className="text-3xl font-bold mb-6">Otro titulo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis harum sit sed atque vel perspiciatis quod pariatur illum nam hic. Ab perspiciatis doloribus facilis distinctio a aliquid porro corporis in.</p>
          <ScrollLink
            to="planes"
            smooth={true}
            duration={900}
            className="!block !mx-auto !rounded-full text-center !bg-blue-800 hover:!bg-blue-700 !text-primary !px-6 !py-3 !text-lg !font-semibold !mt-6 !cursor-pointer"
          > {/*Scroll con animacion hacia los planes */}
            Conocé nuestros planes
          </ScrollLink>
        </section>
      </div>
      <div className="flex">
        <aside className="w-1/3 text-white p-6 sticky top-0 h-fit self-start"> {/*El aside del lado izquierdo se mantiene fijo mientras se hace scroll en la pagina hasta terminar la pagina*/}
          <h1 className="text-3xl font-bold mb-6">Todas las actividades que buscas</h1>
          <p>En Powerhouse tenemos todas las actividades que buscas, combinar distintas actividades es fundamental para mantener la motivacion y disfrutrar al maximo tu rutina deportiva</p>
          <button className="!block !mx-auto !rounded-full !text-center !bg-primary !text-black hover:!bg-amber-200 !px-6 !py-3 !text-lg !font-semibold !mt-6">Asociate</button>
        </aside>
        <section className="w-2/3 text-white p-6 space-y-12"> {/*Agregamos actividad con imagenes y descripcion */}
          <div className="flex items-center gap-6">
            <img src="/musculacion.png" alt="musculacion" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">Trabajá la fuerza y resistencia, desarrollando todos los grupos musculares. Prevení lesiones y mejorá tu calidad de vida. Contamos con +800 gimnasios equipados con la última tecnología.</p>
          </div>
          <div className="flex items-center gap-6 flex-row-reverse">
            <img src="/aire-libre.png" alt="Aire libre" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">Entrená al aire libre en clubes y espacios outdoor. Accedé a la parrilla completa de actividades</p>
          </div>
          <div className="flex items-center gap-6">
            <img src="/natacion.png" alt="Natacion" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">Disfrutá de todos los beneficios de nadar, mejorá tu aparato respiratorio y cardiovascular. +120 piletas cubiertas y al aire libre.</p>
          </div>
          <div className="flex items-center gap-6 flex-row-reverse">
            <img src="/mente.png" alt="Cuerpo y mente" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">Respirá, relajá tu mente y mejorá tu movilidad articular. Pilates, yoga, estiramientos y muchas actividades más, orientadas a encontrar tu bienestar integral.</p>
          </div>
          <div className="flex items-center gap-6">
            <img src="/adultos.png" alt="Adultos mayores" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">Mantenerte activo es sinónimo de salud, ya no hay excusas. Cientos de actividades para estimular tu cuerpo y ralentizar el paso de la edad.</p>
          </div>
          <div className="flex items-center gap-6 flex-row-reverse">
            <img src="/fit.png" alt="Fitness" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">+100 disciplinas orientadas al acondicionamiento físico. GAP, Localizada, Ritmos, SportCycle, SportFunctional, taller de abdominales y más, te están esperando.</p>
          </div>
          <div className="flex items-center gap-6">
            <img src="/kids.png" alt="Kids" className="w-1/2 rounded-xl"/>
            <p className="w-1/2">Actividades para niños, mientras vos entrenás tu hijo/a también puede divertirse y estar en movimiento.</p>
          </div>
        </section>
      </div>
      <section id="planes" className="bg-primary text-black py-16 px-6"> {/*Hasta aqui scrollea la pagina al hacer click en el boton de conocer los planes*/}
        <h2 className="text-black font-extrabold text-3xl text-center mb-20">Conoce nuestros planes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"> {/*Creamos 3 cards con el contenido de cada plan */}
          {/*Card 1 */}
          <div className="bg-amber-100 p-10 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold mb-4 pt-4 pb-4">Plan basico</h3>
            <h5 className="text-center font-extrabold text-4xl p-4">$30.000</h5>
            <p className="mb-6 pt-5 pb-5" >Acceso a sala de musculación, clases grupales básicas y vestuarios. Ideal para comenzar.</p>
            <button className="!bg-blue-700 hover:!bg-blue-900 !text-white !font-semibold !py-2 !px-4 !rounded-full !transition !duration-300">¡Consiguelo ya!</button>
          </div>
          {/*Card 2 */}
          <div className="bg-amber-200 p-10 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold mb-4 pt-4 pb-4">Plan intermedio</h3>
            <h5 className="text-center font-extrabold text-4xl p-4">$40.000</h5>
            <p className="mb-6 pt-5 pb-5">Incluye todo el básico + piscina, entrenamiento funcional y acceso a múltiples sedes.</p>
            <button className="!bg-blue-700 hover:!bg-blue-900 !text-white !font-semibold !py-2 !px-4 !rounded-full !transition !duration-300">¡Consiguelo ya!</button>
          </div>
          {/*Card 3 */}
          <div className="bg-amber-300 p-10 rounded-xl
            shadow-md text-center">
            <h3 className="text-xl font-bold mb-4 pt-4 pb-4">Plan full</h3>
            <h5 className="text-center font-extrabold text-4xl p-4">$50.000</h5>
            <p className="mb-6 pt-5 pb-5">Todos los beneficios, acceso ilimitado, sesiones con entrenador y descuentos especiales.</p>
            <button className="!bg-blue-700 hover:!bg-blue-900 !text-white !font-semibold !py-2 !px-4 !rounded-full !transition !duration-300">¡Consiguelo ya!</button>
          </div>
        </div>
      </section>
    </>
  )
}
