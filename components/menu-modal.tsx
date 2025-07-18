"use client";
import { useState, useEffect } from "react"
import { X, Calendar, Clock, Star, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface MenuModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const [currentDate, setCurrentDate] = useState("")
  const [currentDay, setCurrentDay] = useState("")

  useEffect(() => {
    const now = new Date()
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    
    setCurrentDay(days[now.getDay()])
    setCurrentDate(`${now.getDate()} de ${months[now.getMonth()]} del ${now.getFullYear()}`)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-pavi-rojo to-pavi-naranja rounded-t-2xl p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-pavi-amarillo transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center justify-center mb-4">
            <Star className="w-8 h-8 text-pavi-amarillo fill-current mr-3" />
            <h2 className="text-3xl font-bold">¡El Sabor del Día te Espera!</h2>
            <Star className="w-8 h-8 text-pavi-amarillo fill-current ml-3" />
          </div>
          <p className="text-center text-white/90">Pavi Pollo - Loja, Ecuador</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Date Info */}
          <div className="flex items-center justify-center mb-6 bg-pavi-grisclaro rounded-lg p-4">
            <Calendar className="w-5 h-5 text-pavi-rojo mr-2" />
            <span className="text-pavi-grisoscuro font-semibold">
              Válido solo por hoy, {currentDay}, {currentDate}
            </span>
          </div>

          {/* Main Image */}
          <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-64 bg-gradient-to-br from-pavi-rojo/20 to-pavi-naranja/20 flex items-center justify-center">
              <Image 
                src="/Imagenes/1.jpg" 
                alt="Menú del día - Pollo a la brasa" 
                fill 
                style={{objectFit: 'cover'}}
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">MENÚ DEL DÍA</h3>
                <p className="text-white/90">Especial de la casa</p>
              </div>
            </div>
          </div>

          {/* Menu Details */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pavi-rojo/5 to-pavi-naranja/5 rounded-xl p-6 border border-pavi-rojo/20">
              <h4 className="text-xl font-bold text-pavi-grisoscuro mb-3 flex items-center">
                <Star className="w-5 h-5 text-pavi-amarillo fill-current mr-2" />
                Nuestro Especial
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pavi-naranja rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-pavi-grisoscuro">1/4 de Pollo a la Brasa (Pierna/Pechuga)</p>
                    <p className="text-sm text-pavi-grisoscuro/80">con Arroz Moro y Papas Fritas</p>
                  </div>
                </div>
                <p className="text-sm text-pavi-grisoscuro italic">Un clásico completo para satisfacer tu apetito.</p>
              </div>
            </div>

            <div className="bg-pavi-grisclaro rounded-xl p-6">
              <h4 className="text-lg font-bold text-pavi-grisoscuro mb-3 flex items-center">
                <Clock className="w-5 h-5 text-pavi-rojo mr-2" />
                Incluye
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pavi-naranja rounded-full mr-2"></div>
                  <span className="text-pavi-grisoscuro">Consomé del día</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pavi-naranja rounded-full mr-2"></div>
                  <span className="text-pavi-grisoscuro">Juguito Natural</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="text-center bg-gradient-to-r from-pavi-rojo to-pavi-naranja rounded-xl p-6 text-white">
              <p className="text-sm opacity-90 mb-2">Precio Especial</p>
              <p className="text-4xl font-bold">$8.50</p>
              <p className="text-sm opacity-90 mt-1">¡No te lo pierdas!</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://wa.me/593939572067?text=Hola! Quiero pedir el Menú del Día de Pavi Pollo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Pedir por WhatsApp
            </a>
            <Link
              href="/menu"
              onClick={onClose}
              className="flex-1 bg-pavi-rojo hover:bg-pavi-naranja text-white font-bold py-3 px-6 rounded-xl transition-colors text-center"
            >
              Ver Menú Completo
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-pavi-grisoscuro/70">
            <p>Horario: Lunes - Domingo 10:30 AM - 10:00 PM</p>
            <p>Mercadillo entre Sucre y 18 de Noviembre, Loja</p>
          </div>
        </div>
      </div>
    </div>
  )
} 