import { Link as ScrollLink} from "react-scroll"

export const Home = () => {
  //AGUSTIN
  return (
    <>
      <div className="max-h-[80dvh] h-[60dvh] sm:h-[80dvh] relative flex flex-col justify-start pt-24 sm:justify-center sm:pt-0 gap-2 bg-[url('/home.jpg')] bg-cover bg-bottom"> 
        {/* <img src="/home.webp" alt="Home" className="absolute inset-0 w-full h-auto object-contain"/> */}
          <div className="flex flex-col px-4 mx-auto sm:mx-0 text-4xl sm:text-6xl lg:text-[90px] font-rubik-dirt min-w-0 w-fit bg-gradient-to-r from-primary/70 to-primary/10 rounded-sm">
            <div>POWERHOUSE</div>
            <div className="text-center text-black">GYM</div>
          </div>
          <div className="text-center sm:text-start sm:text-xl md:text-2xl max-w-[600px] px-4 py-2 font-anton">
            La mejor sede de gimnasios de Tucumán, te acompañarán los mejores profesionales deportivos y médicos para cuidarte. No esperes más para empezar.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 overflow-clip px-2">
          
            <div className="bg-primary/50 w-fit p-2 !text-2xl font-rubik-dirt -skew-x-12">
              <div className="skew-x-12">Llamanos ahora</div>
            </div>
            <a href="tel:3811625520" target="_blank" className="group hover:bg-primary bg-primary/30 !text-white w-fit p-2 !text-2xl font-rubik-dirt -skew-x-12 duration-200">
              <div className="group-hover:text-black skew-x-12">381-162-5520</div>
            </a>
          </div>
      </div>
      <div className="border-y-4 py-6 border-y-black-custom grid grid-cols-1 lg:grid-cols-2 font-rubik bg-[url('/home-2.webp')] bg-cover"> {/*Caja para dividir la pantalla */}
        <aside className="bg-gradient-to-r from-primary/80 to-primary/50 text-black p-12 h-fit m-6 border-2 border-black-custom rounded-md"> {/*Aside ocupa el 50% de la pantalla al lado izquierdo */}
          <h1 className="text-xl lg:text-4xl font-bold text-black text-center mb-6 font-rubik-dirt">Entrenamiento personalizado</h1>
          <p className="text-base md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam voluptatem laudantium, praesentium, ut, illo culpa repellendus vel nemo quasi esse soluta eligendi blanditiis vitae perspiciatis! Ipsum ea aliquam ullam.</p>
        </aside>
        <section className="text-black p-6 flex flex-col justify-between min-h-[500px]"> {/*Section ocupa el 50% de la pantalla al lado derecho */}
          <div className="bg-primary/90 border-2 border-black p-12 rounded-md">

          <h1 className="text-xl lg:text-4xl font-bold mb-6 text-center font-rubik-dirt">Conocé nuestros planes</h1>
          <div className="text-base md:text-lg flex flex-col gap-4 text-center">
            <p>En Powerhouse Gym nos dedicamos a transformar tu bienestar en una experiencia integral. Nuestras instalaciones están diseñadas para adaptarse a todos los niveles y objetivos, desde quienes recién comienzan hasta quienes ya llevan tiempo entrenando. </p>
            <p>Ofrecemos un espacio moderno y totalmente equipado con máquinas de última generación, amplias salas de musculación, entrenamiento funcional, clases grupales, piscina, actividades al aire libre y propuestas específicas para adultos mayores y niños. Además, contamos con entrenadores profesionales que te acompañan en cada etapa, guiándote y motivándote para que logres tus metas de forma saludable y sostenida. </p>
            <p>Sabemos que cada persona es única, en Powerhouse podés elegir el plan que mejor se adapte a vos, combinando comodidad, variedad de disciplinas y acceso a múltiples sedes. Tu bienestar empieza hoy, y estamos acá para acompañarte en ese camino.</p>
          </div>
          <ScrollLink
            to="planes"
            smooth={true}
            duration={900}
            className="!block !mx-auto !rounded-full text-center !bg-blue-800 hover:!bg-blue-700 !text-primary !px-6 !py-3 !text-lg !font-semibold !mt-6 !cursor-pointer"
          > {/*Scroll con animacion hacia los planes */}
            Ver planes y precios
          </ScrollLink>
          </div>
        </section>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full font-rubik">
        <aside className="col-span-1 text-white p-6 sticky bg-black-custom top-0 h-fit self-start"> {/*El aside del lado izquierdo se mantiene fijo mientras se hace scroll en la pagina hasta terminar la pagina*/}
          <h1 className="!text-2xl text-center lg:text-start lg:!text-4xl font-bold mb-6 font-rubik-dirt">Todas las actividades que buscas</h1>
          <p className="text-center lg:text-start">En Powerhouse tenemos todas las actividades que buscas, combinar distintas actividades es fundamental para mantener la motivacion y disfrutrar al maximo tu rutina deportiva</p>
          <button className="!block !mx-auto !rounded-full !text-center !bg-primary !text-black hover:!bg-amber-200 !px-6 !py-3 !text-lg !font-semibold !mt-6">Asociate</button>
        </aside>
        <section className="col-span-2 text-white p-6 space-y-12"> {/*Agregamos actividad con imagenes y descripcion */}
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
        <h2 className="text-black font-extrabold text-4xl sm:text-6xl text-center mb-12 font-rubik-dirt">Conoce nuestros planes</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"> {/*Creamos 3 cards con el contenido de cada plan */}
          {/*Card 1 */}
          <div className="bg-amber-100 max-w-96 p-10 pt-10 rounded-xl shadow-md shadow-black/50 hover:shadow-lg text-center mx-auto duration-200">
            <h3 className="text-2xl font-bold pt-4 font-rubik-dirt capitalize">Plan basico</h3>
            <div className="-mt-2">Mensual</div>
            <h5 className="text-center font-extrabold text-4xl p-3">$30.000</h5>
            <p className="mb-6 pt-5 pb-5 font-rubik" >Acceso a sala de musculación, clases grupales básicas y vestuarios. Ideal para comenzar.</p>
            <button className="!bg-blue-700 hover:!bg-blue-900 !text-white !font-semibold !py-2 !px-4 !rounded-full !transition !duration-300">¡Consiguelo ya!</button>
          </div>
          {/*Card 2 */}
          <div className="bg-amber-200 max-w-96 p-10 pt-10 rounded-xl shadow-md shadow-black/50 hover:shadow-lg text-center mx-auto duration-200">
            <h3 className="text-2xl font-bold pt-4 font-rubik-dirt capitalize">Plan premium</h3>
            <div className="-mt-2">Mensual</div>
            <h5 className="text-center font-extrabold text-4xl p-3">$40.000</h5>
            <p className="mb-6 pt-5 pb-5 font-rubik">Incluye todo el básico + piscina, entrenamiento funcional y acceso a múltiples sedes.</p>
            <button className="!bg-blue-700 hover:!bg-blue-900 !text-white !font-semibold !py-2 !px-4 !rounded-full !transition !duration-300">¡Consiguelo ya!</button>
          </div>
          {/*Card 3 */}
          <div className="bg-amber-300 max-w-96 p-10 pt-10 rounded-xl shadow-md shadow-black/50 hover:shadow-lg text-center mx-auto duration-200">
            <h3 className="text-2xl font-bold pt-4 font-rubik-dirt capitalize">Plan exclusivo</h3>
            <div className="-mt-2">Mensual</div>
            <h5 className="text-center font-extrabold text-4xl p-3">$50.000</h5>
            <p className="mb-6 pt-5 pb-5 font-rubik">Todos los beneficios, acceso ilimitado, sesiones con entrenador y descuentos especiales.</p>
            <button className="!bg-blue-700 hover:!bg-blue-900 !text-white !font-semibold !py-2 !px-4 !rounded-full !transition !duration-300">¡Consiguelo ya!</button>
          </div>
        </div>
      </section>
    </>
  )
}
