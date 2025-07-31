"use client"

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import FacebookIcon from "./icons/facebook"
import InstagramIcon from "./icons/instagram"
import MailIcon from "./icons/mail"
import 'animate.css';

export default function FlowingWebsite() {
    const [activeSection, setActiveSection] = useState("INICIO");
    const navItems = ["INICIO", "SERVICIOS", "CONTACTO"];

    const [animationClass, setAnimationClass] = useState("animate__animated animate__bounceInLeft");
    const handleCategoryChange = (item: string) => {
      if (item === activeCategory) return;

      setActiveCategory(item);
      setAnimationClass("");
      setTimeout(() => {
        setAnimationClass("animate__animated animate__bounceInLeft");
      }, 20);
    };


    type Dish = {
    title: string;
    description: string;
    img: string;
  };

  type AllDishes = {
    [key: string]: Dish[];
  };

    const [activeCategory, setActiveCategory] = useState("DESAYUNOS");
    const foodTypes = ["DESAYUNOS", "PRINCIPAL", "GOURMET", "POSTRES"];

 const allDishes : AllDishes = {
  DESAYUNOS: [
    {
      title: "Desayuno 1",
      description: "Huevos fritos con bacon y acelga",
      img: "/dishes/p.png",
    },
    {
      title: "Desayuno 2",
      description: "Tostada con pasta de maní, frutillas, moras y arandanos",
      img: "/dishes/p1.png",
    },
    {
      title: "Desayuno 3",
      description: "Granola, banana, arandanos y yogurt griego",
      img: "/dishes/p3.png",
    },
    {
      title: "Desayuno 4",
      description: "Tostadas con burrata, tomate y albaca",
      img: "/dishes/p4.png",
    }
  ],
  PRINCIPAL: [
    {
      title: "Principal 1",
      description: "Huevos fritos con bacon y acelga",
      img: "/dishes/p.png",
    },
    {
      title: "Principal 2",
      description: "Huevos fritos con bacon y acelga",
      img: "/dishes/p.png",
    },
    {
      title: "Principal 3",
      description: "Huevos fritos con bacon y acelga",
      img: "/dishes/p.png",
    }],
  GOURMET: [
    {
      title: "Gourmet 1",
      description: "Tostada con pasta de maní, frutillas, moras y arandanos",
      img: "/dishes/p1.png",
    },
    {
      title: "Gourmet 2",
      description: "Tostada con pasta de maní, frutillas, moras y arandanos",
      img: "/dishes/p1.png",
    },
  ],
  POSTRES: [
    {
      title: "Postres 1",
      description: "Tostada con pasta de maní, frutillas, moras y arandanos",
      img: "/dishes/p1.png",
    },
    {
      title: "Postres 2",
      description: "Tostada con pasta de maní, frutillas, moras y arandanos",
      img: "/dishes/p1.png",
    },
  ]

};
const dishes = allDishes[activeCategory] ?? [];

console.log("Categoría activa:", activeCategory);


  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <section
        className="relative h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/fondo-2.png')" }}
      >
  {/* Overlay opcional */}
  <div className="absolute inset-0 bg-black/60 z-0" />

  {/* Header integrado */}
  <div className="relative z-10">
  <div className="container mx-auto py-10 grid grid-cols-3 items-center">
    
    {/* LOGO izquierda */}
    <div className="flex justify-start items-center space-x-2">
      <span className="text-white text-3xl font-light font-rieven">FLOWING</span>
    </div>

    {/* NAV centro */}
    <div className="flex justify-center">
              <div className="flex items-center space-x-6 border-2 border-white rounded-full p-8 py-3">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={`font-base transition-colors ${
                      activeSection === item
                        ? "text-[#A66915] text-2xl"
                        : "text-white text-2xl hover:text-[#A66915]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

    {/* REDES derecha */}
    <div className="flex justify-end items-center space-x-4">
      <FacebookIcon className="size-8"/>
      <InstagramIcon className="size-6"/>
      <MailIcon className="size-7"/>
    </div>

  </div>
</div>

  {/* Hero content */}
  <div className="relative z-10 container mx-auto px-6 h-9/12 flex items-center">
    <div className="max-w-2xl text-white">
      <h1 className="text-6xl md:text-8xl font-light font-rieven mb-4">FLOWING</h1>
      <h2 className="text-3xl md:text-5xl font-light font-playfair">Experiencias</h2>
      <h3 className="text-2xl md:text-6xl font-light font-great text-[#A66915]">culinarias</h3>
      <h4 className="text-3xl md:text-5xl font-light font-playfair">excepcionales</h4>
    </div>
  </div>
</section>


      {/* Services Section - NUESTROS Servicios */}
      <section className="py-30 bg-[#E9EAE6]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light font-playfair text-gray-800 mb-4">
              NUESTROS <span className="italic text-[#A66915] font-great">Servicios</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 py-10">
            {/* Boxes */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#A66915] shadow-md flex items-center justify-center">
                <div className="w-8 h-6 border-2 border-[#A66915] rounded-sm" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">BOXES</h3>
              <p className="text-gray-600 leading-relaxed">
                Boxes individuales o para compartir. Enfoque práctico pero gourmet. SOLO boxes y SHARING boxes con
                desayunos, snacks, picadas y almuerzos de autor.
              </p>
            </div>

            {/* Comida de Autor */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#A66915] shadow-md flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-[#A66915]" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">COMIDA DE AUTOR</h3>
              <p className="text-gray-600 leading-relaxed">
                Experiencia gastronómica completa con asistencia a bordo. Ingredientes gourmet: trufas, brie, salmón,
                reducción de malbec. Cada plato incluye instrucciones de presentación.
              </p>
            </div>

            {/* Boxes Personalizadas */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[#A66915] shadow-md flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[#A66915] rounded-sm" />
                <div className="w-4 h-4 border-2 border-[#A66915] rounded-sm -ml-2 mt-2" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">BOXES PERSONALIZADAS</h3>
              <p className="text-gray-600 leading-relaxed">
                Diseñados especialmente para tripulación. Boxes individuales completas con cubiertos, aderezos y postre.
                Ensaladas, wraps, frutas y almuerzos balanceados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jets Privados Section */}
      <section className="relative py-30 bg-gray-900 overflow-hidden"
      style={{ backgroundImage: "url('/fondo-3.png')" }}>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-light mb-4 font-playfair">Minimalismo elegante para</h1>
            <h2 className="text-3xl md:text-6xl font-light italic text-[#8E9371] font-great mb-8">jets privados</h2>

            <p className="text-lg mb-12 text-gray-200 leading-relaxed max-w-3xl">
              Servicio gastronómico de alta gama para dueños de jets privados, empresas de aviación ejecutiva y clientes
              VIP que valoran la gastronomía de autor y el servicio personalizado.
            </p>

            <div className="grid md:grid-cols-1 gap-8 mb-16">
              {/* Cobertura Total */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full border-2 border-[#8E9371] flex items-center justify-center flex-shrink-0 "></div>
                <div>
                  <h3 className="text-xl font-medium mb-2 font-playfair">Cobertura Total</h3>
                  <p className="text-gray-300 text-sm">
                    Entregas en todos los hangares de Buenos Aires de 6 a 22hs, todos los días del año.
                  </p>
                </div>
              </div>

              {/* Adaptabilidad Premium */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full border-2 border-[#8E9371] flex items-center justify-center flex-shrink-0 "></div>
                <div>
                  <h3 className="text-xl font-medium mb-2 font-playfair ">Adaptabilidad Premium</h3>
                  <p className="text-gray-300 text-sm">
                    Opciones gluten free, veggie y veganas. Menús personalizados y boxes de cumpleaños exclusivos.
                  </p>
                </div>
              </div>

              {/* Segmentación Especializada */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full border-2 border-[#8E9371] flex items-center justify-center flex-shrink-0 "></div>
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

      <div className="bg-[#8E9371] w-full h-6"></div>

      {/* Menu Categories Section */}
      <section className="bg-[#2a2a2a] py-30">
  <div className="container mx-auto px-6">

    {/* Botones de categorías */}
    <div className="flex justify-center">
      <div className="flex items-center space-x-6 px-6 py-2">
        {foodTypes.map((item) => (
          <button
            key={item}
            onClick={() => handleCategoryChange(item)}
            className={`font-light text-3xl transition-colors ${
              activeCategory === item
                ? "text-[#A66915] border-b-2 border-[#a66915] duration-150"
                : "text-white hover:text-[#A66915]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>

    {/* Tarjetas de platos */}
    <div className={`flex flex-wrap justify-center gap-10 py-20 ${animationClass}`}>
      {dishes?.map((dish, i) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center"
        >
          <Image
            src={dish.img}
            alt={dish.title}
            width={180}
            height={180}
            className="object-cover w-50 h-50"
          />
          <div className="p-2 min-h-[120px] flex flex-col justify-between">
            <h2 className="text-2xl text-[#a66915] font-playfair mb-2 text-center">
              {dish.title}
            </h2>
            <p className="text-sm text-white text-center w-30">{dish.description}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* Contact Section */}
      <section className="py-30 bg-[#E9EAE6]]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 font-playfair mb-4">
              CONTACTO <span className="italic text-[#8E9371] font-great">Exclusivo</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {/* Teléfono */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 shadow-md border-[#8E9371] flex items-center justify-center">
                <Phone className="w-8 h-8 text-[#8E9371]" />
              </div>
              <h3 className="text-lg font-medium mb-4 text-gray-800">TELÉFONO</h3>
              <p className="text-gray-800 font-medium">+54 11 2233-4455</p>
              <p className="text-gray-600">6:00 - 22:00 hs</p>
            </div>

            {/* Mail */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 shadow-md border-[#8E9371] flex items-center justify-center">
                <Mail className="w-8 h-8 text-[#8E9371]" />
              </div>
              <h3 className="text-lg font-medium mb-4 text-gray-800">MAIL</h3>
              <p className="text-gray-800 font-medium">concierge@flowing.com.ar</p>
              <p className="text-gray-600">Respuesta inmediata</p>
            </div>

            {/* Cobertura */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 shadow-md border-[#8E9371] flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#8E9371]" />
              </div>
              <h3 className="text-lg font-medium mb-4 text-gray-800">COBERTURA</h3>
              <p className="text-gray-800 font-medium">Todos los hangares</p>
              <p className="text-gray-600">Buenos Aires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2a2a2a] py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-white text-xl font-light font-playfair">FLOWING</span>
            </div>

            <p className="text-gray-400 text-sm">Derechos reservados - 2025</p>

            <div className="flex items-center space-x-4">
              <FacebookIcon className="size-8"/>
              <InstagramIcon className="size-8"/>
              <MailIcon className="size-8"/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
