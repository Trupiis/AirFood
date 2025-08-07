import ClockIcon from "../icons/clock";
import ShieldIcon from "../icons/shield";
import PersonsIcon from "../icons/persons";

function Jets () {
    return(
<section className="relative py-30 bg-gray-900 overflow-hidden"
      style={{ backgroundImage: "url('/fondo-3.webp')" }}>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-light mb-4 font-playfair">Minimalismo elegante para</h1>
            <h2 className="text-5xl md:text-6xl font-light italic text-[#8E9371] font-great max-md:ml-5 mb-8">jets privados</h2>

            <p className="text-lg mb-12 text-gray-200 leading-relaxed max-w-3xl">
              Servicio gastronómico de alta gama para dueños de jets privados, empresas de aviación ejecutiva y clientes
              VIP que valoran la gastronomía de autor y el servicio personalizado.
            </p>

            <div className="grid md:grid-cols-1 gap-8 mb-16">
              {/* Cobertura Total */}
              <div className="flex items-start space-x-4">
                <ClockIcon className="size-7"></ClockIcon>
                <div>
                  <h3 className="text-xl font-medium mb-2 font-playfair">Cobertura Total</h3>
                  <p className="text-gray-300 text-sm">
                    Entregas en todos los hangares de Buenos Aires de 6 a 22hs, todos los días del año.
                  </p>
                </div>
              </div>

              {/* Adaptabilidad Premium */}
              <div className="flex items-start space-x-4">
                <ShieldIcon className="size-7"></ShieldIcon>
                <div>
                  <h3 className="text-xl font-medium mb-2 font-playfair ">Adaptabilidad Premium</h3>
                  <p className="text-gray-300 text-sm">
                    Opciones gluten free, veggie y veganas. Menús personalizados y boxes de cumpleaños exclusivos.
                  </p>
                </div>
              </div>

              {/* Segmentación Especializada */}
              <div className="flex items-start space-x-4">
                <PersonsIcon className="size-7"></PersonsIcon>
                <div>
                  <h3 className="text-xl font-medium mb-2 font-playfair">Segmentación Especializada</h3>
                  <p className="text-gray-300 text-sm">
                    Servicios diferenciados para pasajeros VIP, tripulación y asistentes de vuelo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Jets;