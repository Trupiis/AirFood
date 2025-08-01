"use client";
import { X } from "lucide-react";
import { ReactNode, useState, useEffect } from "react";

import BarsIcon from "../icons/bars";

type SidebarProps = {
  children: ReactNode;
};

export default function Sidebar({ children }: SidebarProps) {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("INICIO");
    const navItems = ["INICIO", "SERVICIOS", "MENÚ", "CONTACTO"];

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.target.id !== activeSection) {
                setActiveSection(entry.target.id);
              }
            });
          },
          { threshold: 0.6 }
        );

    const sectionElements = navItems
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, [navItems, activeSection]);

    const handleClick = (item: string) => {
        setActiveSection(item);
        const section = document.getElementById(item);
        section?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
  };

  return (
    <div className="hidden max-md:flex fixed top-6 left-0 right-0 z-50 justify-between items-center px-6">
        <h2 className="text-white text-2xl font-rieven">FLOWING</h2>
        <button
            className="hidden max-md:block fixed top-6 right-6 z-50 text-white px-4 py-2 rounded"
            onClick={() => setOpen(true)}
        >
            <BarsIcon className="size-7"/>
        </button>

        {open && (
            <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
            />
        )}


        <div
            className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}
            hidden max-md:block`}
        >
            <div className="flex justify-end p-4">
            <button onClick={() => setOpen(false)}>
                <X className="text-gray-800 size-7" />
            </button>
            </div>

        <div className="flex flex-col px-6 space-y-6 mt-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`text-lg text-left transition-colors border-b-2 p-2 border-[#2a2a2a] ${
                activeSection === item
                  ? "text-[#A66915] font-semibold"
                  : "text-gray-800 hover:text-[#A66915]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        </div>
        </div>
  );
}
