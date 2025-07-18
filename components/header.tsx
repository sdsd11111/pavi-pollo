"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Star } from "lucide-react"
import { useState } from "react"
import MenuModal from "./menu-modal"

export default function Header() {
  const pathname = usePathname()
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-pavi-rojo">PAVI POLLO</span>
            <Star className="w-6 h-6 text-pavi-amarillo fill-current" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${pathname === "/" ? "text-pavi-rojo font-bold" : "text-pavi-grisoscuro hover:text-pavi-naranja"}`}>Inicio</Link>
            <Link href="/menu" className={`${pathname === "/menu" ? "text-pavi-rojo font-bold" : "text-pavi-grisoscuro hover:text-pavi-naranja"}`}>Menú</Link>
            <Link href="/#contacto" className={`${pathname === "/#contacto" ? "text-pavi-rojo font-bold" : "text-pavi-grisoscuro hover:text-pavi-naranja"}`}>Contacto</Link>
          </nav>
          <button 
            onClick={() => setIsMenuModalOpen(true)}
            className="fixed right-0 top-0 h-full w-16 bg-pavi-rojo flex items-center justify-center hover:bg-pavi-naranja transition-colors cursor-pointer group"
          >
            <span className="text-white font-bold transform -rotate-90 whitespace-nowrap group-hover:scale-105 transition-transform">Menú del día</span>
          </button>
        </div>
      </header>
      
      <MenuModal 
        isOpen={isMenuModalOpen} 
        onClose={() => setIsMenuModalOpen(false)} 
      />
    </>
  )
} 