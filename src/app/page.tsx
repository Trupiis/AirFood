"use client"

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

/* Iconos */
import FacebookIcon from "./icons/facebook"
import InstagramIcon from "./icons/instagram"
import MailIcon from "./icons/mail"
import 'animate.css';

//Componentes
import Footer from "./Components/Footer"
import Jets from "./Components/Jets"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Sidebar from "./Components/SideBar"

import Services from "./Components/Services"
import CardServices from "./Components/CardServices"
import Contact from "./Components/Contact"
import CardContact from "./Components/CardContact"
import ClockIcon from "./icons/clock"

export default function FlowingWebsite() {

    const [animationClass, setAnimationClass] = useState("animate__animated animate__fadeInLeft");
    const handleCategoryChange = (item: string) => {
      if (item === activeCategory) return;

      setActiveCategory(item);
      setAnimationClass("");
      setTimeout(() => {
        setAnimationClass("animate__animated animate__fadeInLeft");
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
      img: "/dishes/p.webp",
    },
    {
      title: "Desayuno 2",
      description: "Tostada con pasta de maní, frutillas, moras y arandanos",
      img: "/dishes/p1.webp",
    },
    {
      title: "Desayuno 3",
      description: "Granola, banana, arandanos y yogurt griego",
      img: "/dishes/p3.webp",
    },
    {
      title: "Desayuno 4",
      description: "Tostadas con burrata, tomate y albaca",
      img: "/dishes/p4.webp",
    }
  ],
  PRINCIPAL: [
    {
      title: "Principal 1",
      description: "Huevos fritos con bacon y acelga",
      img: "/dishes/p.webp",
    },
    {
      title: "Principal 2",
      description: "Huevos fritos con bacon y acelga",
      img: "/dishes/p.webp",
    },
    {
      title: "Principal 3",
      description: "Huevos fritos con bacon y acelga",
      img: "/dishes/p.webp",
    }],
  GOURMET: [
    {
      title: "Gourmet 1",
      description: "Tostada con pasta de maní, frutillas, moras y arandanos",
      img: "/dishes/p1.webp",
    },
    {
      title: "Gourmet 2",
      description: "Tostada con pasta de maní, frutillas, moras y arandanos",
      img: "/dishes/p1.webp",
    },
  ],
  POSTRES: [
    {
      title: "Postres 1",
      description: "Tostada con pasta de maní, frutillas, moras y arandanos",
      img: "/dishes/p1.webp",
    },
    {
      title: "Postres 2",
      description: "Tostada con pasta de maní, frutillas, moras y arandanos",
      img: "/dishes/p1.webp",
    },
  ]

};
const dishes = allDishes[activeCategory] ?? [];

  return (

    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      

<section id="INICIO"
   className="relative h-screen bg-cover bg-center text-white"
   style={{ backgroundImage: "url('/fondo-2.webp')" }}
>

  {/* Overlay opcional */}
  <div className="absolute inset-0 bg-black/60 z-0" />

  <Header/>
  <Sidebar>
  <ul className="space-y-4">
    <li className="text-lg text-gray-800">Inicio</li>
    <li className="text-lg text-gray-800">Servicios</li>
    <li className="text-lg text-gray-800">Menú</li>
    <li className="text-lg text-gray-800">Contacto</li>
  </ul>
</Sidebar>
  <Hero/>
</section>

<section id="SERVICIOS" className="py-30 bg-[#E9EAE6]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light font-playfair text-gray-800 mb-4">
          NUESTROS <span className="italic text-[#A66915] font-great">Servicios</span>
        </h2>
      </div>
          
      <Services>
        <CardServices>
          <h3 className="font-semibold mb-3">BOXES</h3>
          <p className="leading-relaxed">Boxes individuales o para compartir. Enfoque práctico pero gourmet. SOLO boxes y SHARING boxes con
                  desayunos, snacks, picadas y almuerzos de autor.</p>
        </CardServices>

        <CardServices>
          <h3 className="font-semibold mb-3">COMIDA DE AUTOR</h3>
          <p>Experiencia gastronómica completa con asistencia a bordo. Ingredientes gourmet: trufas, brie, salmón,
                      reducción de malbec. Cada plato incluye instrucciones de presentación.</p>
        </CardServices>

        <CardServices>
          <h3 className="font-semibold mb-3">BOXES PERSONALIZADAS</h3>
          <p>Diseñados especialmente para tripulación. Boxes individuales completas con cubiertos, aderezos y postre.
                      Ensaladas, wraps, frutas y almuerzos balanceados.</p>
        </CardServices>
      </Services>
      
      </div>
    </section>

      <Jets/>

      <div className="bg-[#8E9371] w-full h-6"></div> {/* DIVISION DE LAS PAGINAS */}
      
      
      
      {/* Menu Categories Section */}
    <section id="MENÚ" className="bg-[#2a2a2a] py-30">
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
      <section id="CONTACTO" className="py-30 bg-[#E9EAE6]]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 font-playfair mb-4">
              CONTACTO <span className="italic text-[#8E9371] font-great">Exclusivo</span>
            </h2>
          </div>

        <Contact>
          <CardContact icon={<Phone className="w-8 h-8 text-[#8E9371]" />} title="TELÉFONO">
            <p>+54 11 2233-4455</p>
            <p className="text-gray-600 font-normal">6:00 - 22:00 hs</p>
          </CardContact>

          <CardContact icon={<Mail className="w-8 h-8 text-[#8E9371]" />} title="MAIL">
            <p>concierge@flowing.com.ar</p>
            <p className="text-gray-600 font-normal">Respuesta inmediata</p>
          </CardContact>

          <CardContact icon={<Phone className="w-8 h-8 text-[#8E9371]" />} title="COBERTURA">
            <p>Todos los hangares</p>
            <p className="text-gray-600 font-normal">Buenos Aires</p>
          </CardContact>
        </Contact>
        </div>
      </section>
      <Footer/>
    </div>

  )
}
