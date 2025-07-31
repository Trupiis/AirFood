import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import MailIcon from "../icons/mail";
import { useState } from "react";


function Header () {
    const [activeSection, setActiveSection] = useState("INICIO");
    const navItems = ["INICIO", "SERVICIOS", "MENÚ", "CONTACTO"];
    
    return(
    <div id="INICIO" className="relative z-10">
    <div className="container mx-auto py-10 grid grid-cols-3 items-center">
        
        {/* LOGO izquierda */}
        <div className="flex justify-start items-center space-x-2">
        <span className="text-white text-3xl font-light font-rieven">FLOWING</span>
        </div>

        {/* NAV centro */}
        <div className="flex justify-center">
                <div className="flex items-center space-x-6 border-2 border-white rounded-full p-8 py-2">
                    {navItems.map((item) => (
                    <button
                        key={item}
                        onClick={() => {
                        setActiveSection(item);
                        const section = document.getElementById(item);
                        section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`font-base transition-colors ${
                        activeSection === item
                            ? "text-[#A66915] text-xl"
                            : "text-white text-xl hover:text-[#A66915]"
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
    )
}

export default Header;