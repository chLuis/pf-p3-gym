import "./nosotros.css"

export const Nosotros = () => {
  return (
    <div style={{backgroundColor:'#000',color:'#FFD700',minHeight:'100vh',padding:'2rem'}}>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Título principal */}
        <div className="text-center">
          <h1 className=" titulo-noso font-rubik-dirt">Sobre Nosotros</h1>
        </div>

        <div className="imagen-nosotros"> 
          

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74wpLBMoZAJlUVXizoauFZqctGNYuMRUrZA&s" alt="Gimnasio" style={{width:"60%" , maxWidth:'600px', height:'auto', borderRadius:'8px' }} />
         
        </div>


        {/* Historia */}
        <section>
          <h2 className="titulo-nosotros text-2xl font-semibold mb-2 text-blue-600">Nuestra Historia</h2>
          <p>
            <strong>PowerHouse</strong> nació en la provincia de <strong>TUCUMAN</strong> en el año <strong>2025</strong>,
            como respuesta a la falta de un gimnasio que cubriera las necesidades de quienes desean
            entrenar su cuerpo y mejorar su salud física.
          </p>
        </section>

        {/* Cómo lo hacemos */}
        <section>
          <h2 className=" titulo-nosotros text-2xl font-semibold mb-2 text-blue-600">¿Cómo lo hacemos?</h2>
          <p>
            Nos apasiona lo que hacemos y amamos el fitness. Por eso creamos un espacio donde promovemos una
            <strong> Cultura Física</strong> que transmite a nuestros clientes la importancia de mantenerse
            activos, mejorar su salud y alcanzar sus metas personales a través del ejercicio.
          </p>
          <p className="mt-2">
            Contamos con <strong>entrenadores certificados</strong> que te guiarán para establecer un plan de
            entrenamiento personalizado y ayudarte a alcanzar tus objetivos de forma segura y efectiva.
          </p>
        </section>

        {/* Por qué lo hacemos */}
        <section> 
          <h2 className="titulo-nosotros text-2xl font-semibold mb-2 text-blue-600">¿Por qué lo hacemos?</h2>
          <p>
            En <strong>PowerHouse</strong> creemos firmemente en el poder del ejercicio para transformar vidas.
            Fomentamos una rutina de entrenamiento constante para mejorar tanto el estado físico como
            el bienestar mental.
          </p>
          <p className="mt-2">
            Te invitamos a ser parte del movimiento <strong>fitness</strong> y transformar tu vida.
          </p>
        </section>

        {/* Servicios */}
        <section>
          <h2 className="titulo-nosotros text-2xl font-semibold mb-2 text-blue-600">Nuestros Servicios</h2>
          <ul className="list-disc list-inside grid grid-cols-2 md:grid-cols-3 gap-2">
            <li>Entrenamiento con pesas</li>
            <li>Clases de Zumba</li>
            <li>Entrenadores personales</li>
            <li>Circuito de abdominales</li>
            <li>Clases de Spinning</li>
            <li>Clases de Step</li>
            <li>Circuito de cardio</li>
            <li>Cafetería</li>
            <li>Venta de ropa deportiva</li>
            <li>Suplementos alimenticios</li>
            <li>Horarios flexibles</li>
            <li>Salones para eventos</li>
          </ul>
        </section>

        {/* Estética y eventos */}
        <section>
          <h2 className="titulo-nosotros text-2xl font-semibold mb-2 text-blue-600">Más que un Gimnasio</h2>
          <p>
            Hemos ampliado nuestras instalaciones para incluir un área de <strong>estética</strong>, donde podrás
            complementar tu rutina de ejercicios con tratamientos corporales para mejores resultados.
          </p>
          <p className="mt-2">
            También ofrecemos <strong>salones para eventos</strong>, ideales para reuniones, fiestas y celebraciones.
            ¡Consultá por los precios!
          </p>
        </section>

        {/* Estadísticas */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="cifras-nosotros ">Nuestras Cifras</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="titulo-nosotros text-3xl font-bold text-blue-700">345</p>
              <p className="titulo-nosotros text-sm">Usuarios del gimnasio</p>
            </div>
            <div>
              <p className=" titulo-nosotros text-3xl font-bold text-blue-700">1900 m²</p>
              <p className="titulo-nosotros text-sm">Área total del gimnasio</p>
            </div>
            <div>
              <p className="titulo-nosotros text-3xl font-bold text-blue-700">6</p>
              <p className="titulo-nosotros text-sm">Entrenadores certificados</p>
            </div>
            <div>
              <p className="titulo-nosotros text-3xl font-bold text-blue-700">7</p>
              <p className="titulo-nosotros text-sm">Días a la semana</p>
            </div>
          </div>
        </section>

        {/* Cierre */}
        <div className="text-center mt-8">
          <h2 className="titulo-noso">¡Unite a la familia <strong>PowerHouse</strong>!</h2>
          <p>Transformá tu cuerpo, mejorá tu mente y viví una vida más saludable.</p>
        </div>
      </div>
    </div>
  );
};
