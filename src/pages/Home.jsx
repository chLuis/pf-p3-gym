import { Link as ScrollLink} from "react-scroll"
import Planes from "../components/Planes"
import Actividades from "../components/Actividades"

export const Home = () => {
  //AGUSTIN
  return (
    <>
      <div className="max-h-[80dvh] h-[60dvh] sm:h-[80dvh] relative flex flex-col justify-start pt-24 sm:justify-center sm:pt-0 gap-2 bg-[url('/home.jpg')] bg-cover bg-bottom"> 
          <div className="flex flex-col px-4 mx-auto sm:mx-0 text-4xl sm:text-6xl lg:text-[90px] font-rubik-dirt min-w-0 w-fit bg-gradient-to-r from-primary/70 to-primary/10 rounded-sm animate-from-left">
            <div className="text-white">POWERHOUSE</div>
            <div className="text-center text-black">GYM</div>
          </div>
          <div className="text-center text-white sm:text-start sm:text-xl md:text-2xl max-w-[600px] px-4 py-2 font-anton animate-fade-in-verylong">
            La mejor sede de gimnasios de Tucumán, te acompañarán los mejores profesionales deportivos y médicos para cuidarte. No esperes más para empezar.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 overflow-clip px-2 animate-from-rigth">
          
            <div className="bg-primary/50 w-fit p-2 !text-2xl font-rubik-dirt -skew-x-12 animate-fade-in">
              <div className="skew-x-12 text-white">Llamanos ahora</div>
            </div>
            <a href="tel:3811625520" target="_blank" className="group hover:bg-primary bg-primary/30 !text-white w-fit p-2 !text-2xl font-rubik-dirt -skew-x-12 animate-fade-in duration-200">
              <div className="group-hover:text-black skew-x-12">381-162-5520</div>
            </a>
          </div>
      </div>
      <div className="border-y-4 py-6 border-y-black-custom grid grid-cols-1 lg:grid-cols-2 font-rubik bg-[url('/home-2.webp')] bg-cover">
      {/*Aside ocupa el 50% de la pantalla al lado izquierdo */}
        <aside className="bg-gradient-to-r from-primary/80 to-primary/50 text-black p-12 h-fit m-6 border-2 border-black-custom rounded-md"> 
          <h1 className="text-xl lg:text-4xl text-black text-center mb-6 font-rubik-dirt">Entrenamiento personalizado</h1>
          <p className="text-base md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam voluptatem laudantium, praesentium, ut, illo culpa repellendus vel nemo quasi esse soluta eligendi blanditiis vitae perspiciatis! Ipsum ea aliquam ullam.</p>
        </aside>
        {/*Section ocupa el 50% de la pantalla al lado derecho */}
        <section className="text-black p-6 flex flex-col justify-between min-h-[500px]"> 
          <div className="bg-primary/90 border-2 border-black p-12 rounded-md">

          <h1 className="text-xl lg:text-4xl mb-6 text-center font-rubik-dirt">Conocé nuestros planes</h1>
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
      <Actividades/>
      {/*Hasta aqui scrollea la pagina al hacer click en el boton de conocer los planes*/}
      <section id="planes" className="bg-primary text-black py-16 px-6">
        <Planes/>
      </section>
    </>
  )
}
