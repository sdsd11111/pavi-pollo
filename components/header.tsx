"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Star, Menu, X } from "lucide-react"
import { useState } from "react"
import MenuModal from "./menu-modal"

export default function Header() {
  const pathname = usePathname()
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-pavi-rojo">PAVI POLLO</span>
            <Star className="w-6 h-6 text-pavi-amarillo fill-current" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${pathname === "/" ? "text-pavi-rojo font-bold" : "text-pavi-grisoscuro hover:text-pavi-naranja"}`}>Inicio</Link>
            <Link href="/menu" className={`${pathname === "/menu" ? "text-pavi-rojo font-bold" : "text-pavi-grisoscuro hover:text-pavi-naranja"}`}>Menú</Link>
            <Link href="/#contacto" className={`${pathname === "/#contacto" ? "text-pavi-rojo font-bold" : "text-pavi-grisoscuro hover:text-pavi-naranja"}`}>Contacto</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-pavi-rojo" />
            ) : (
              <Menu className="w-6 h-6 text-pavi-rojo" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className={`block py-3 px-4 rounded-lg transition-colors ${pathname === "/" ? "bg-pavi-rojo text-white font-bold" : "text-pavi-grisoscuro hover:bg-gray-100"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/menu" 
                className={`block py-3 px-4 rounded-lg transition-colors ${pathname === "/menu" ? "bg-pavi-rojo text-white font-bold" : "text-pavi-grisoscuro hover:bg-gray-100"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menú
              </Link>
              <Link 
                href="/#contacto" 
                className={`block py-3 px-4 rounded-lg transition-colors ${pathname === "/#contacto" ? "bg-pavi-rojo text-white font-bold" : "text-pavi-grisoscuro hover:bg-gray-100"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Barra "Menú del día" - Responsive */}
      <button 
        onClick={() => setIsMenuModalOpen(true)}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 h-32 w-12 md:top-0 md:transform-none md:h-screen md:w-16 bg-pavi-rojo flex items-center justify-center hover:bg-pavi-naranja transition-all duration-300 cursor-pointer group z-40 shadow-lg hover:shadow-xl"
      >
        <span className="text-white font-bold transform -rotate-90 whitespace-nowrap group-hover:scale-105 transition-transform text-xs md:text-base">Menú del día</span>
      </button>
      
      <MenuModal 
        isOpen={isMenuModalOpen} 
        onClose={() => setIsMenuModalOpen(false)} 
      />
    </>
  )
} 