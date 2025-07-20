"use client";
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function MenuPage() {
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({})

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pavi-grisclaro to-white flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - igual que en Inicio */}
        <section className="bg-yellow-200 py-10 px-2 md:px-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 relative">
            {/* Imagen principal aún más grande y protagonista */}
            <div className="flex-1 flex justify-center items-center min-w-0">
              <div className="relative w-[90vw] max-w-[38rem] h-[90vw] max-h-[38rem] md:w-full md:max-w-[44rem] md:h-[38rem] md:max-h-[44rem] bg-gray-200 rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                <Image src="/Imagenes/1.jpg" alt="Pollo asado entero" fill style={{objectFit: 'cover'}} className="rounded-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/10 rounded-full" />
              </div>
            </div>
            {/* Derecha: Texto y productos centrados */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 min-w-0">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">PAVI POLLO</h1>
              <p className="text-gray-800 text-lg max-w-lg">ABIERTO PARA LLEVAR Y RECOGIDA</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Pollo Asado Entero</h2>
              <p className="text-gray-700 max-w-md">Disfruta de nuestro icónico pollo asado, dorado a la perfección con la receta original desde 1980. Sabor y tradición en cada bocado.</p>
              <div className="flex items-center gap-4 justify-center">
                <span className="text-3xl font-bold text-red-600">$15</span>
                <span className="text-sm text-gray-600">Entrega gratis en Loja</span>
              </div>
              <a href="https://wa.me/593939572067" target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold shadow-md rounded-lg">Pedir online</a>
              {/* Productos destacados centrados */}
              <div className="flex flex-wrap justify-center gap-4 mt-6 w-full">
                {/* Tarjeta 1 */}
                <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center w-40 p-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                    <Image src="/Imagenes/2.jpg" alt="Pollo asado" width={80} height={80} style={{objectFit: 'cover'}} />
                  </div>
                  <span className="font-bold text-gray-900">Pollo Asado</span>
                  <span className="text-red-600 font-bold">$7</span>
                  <span className="text-xs text-gray-500">Best Seller</span>
                </div>
                {/* Tarjeta 2 */}
                <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center w-40 p-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                    <Image src="/Imagenes/3.jpg" alt="Papas fritas" width={80} height={80} style={{objectFit: 'cover'}} />
                  </div>
                  <span className="font-bold text-gray-900">Papas Fritas</span>
                  <span className="text-red-600 font-bold">$3</span>
                  <span className="text-xs text-gray-500">Acompañante</span>
                </div>
                {/* Tarjeta 3 */}
                <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center w-40 p-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                    <Image src="/Imagenes/4.jpg" alt="Arroz moro" width={80} height={80} style={{objectFit: 'cover'}} />
                  </div>
                  <span className="font-bold text-gray-900">Arroz Moro</span>
                  <span className="text-red-600 font-bold">$2</span>
                  <span className="text-xs text-gray-500">Acompañante</span>
                </div>
                {/* Tarjeta 4 */}
                <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center w-40 p-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                    <Image src="/Imagenes/5.jpg" alt="Consomé" width={80} height={80} style={{objectFit: 'cover'}} />
                  </div>
                  <span className="font-bold text-gray-900">Consomé</span>
                  <span className="text-red-600 font-bold">$2</span>
                  <span className="text-xs text-gray-500">Sopa</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Content */}
        <section className="py-16 px-4 -mt-8">
          <div className="container mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-10">
                  {/* POLLO A LA BRASA */}
                  <div className="bg-gradient-to-br from-pavi-grisclaro to-white rounded-xl p-6 shadow-lg border border-pavi-rojo/10">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-8 bg-pavi-rojo rounded-full mr-4"></div>
                      <h3 className="text-3xl font-bold text-pavi-marron">POLLO A LA BRASA</h3>
                    </div>
                    <div className="space-y-6">
                      <div 
                        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
                        onClick={() => toggleCard('pollo-1-4')}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg text-pavi-grisoscuro">1/4 Pollo (Pierna o Pechuga)</h4>
                          <span className="font-bold text-xl text-pavi-naranja bg-pavi-naranja/10 px-3 py-1 rounded-full">$5.50</span>
                        </div>
                        <p className="text-sm text-pavi-grisoscuro leading-relaxed">Nuestro jugoso y tradicional pollo a la brasa, perfecto para una persona.</p>
                                                 {expandedCards['pollo-1-4'] && (
                           <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/8.jpg" alt="1/4 Pollo a la brasa" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                      <div 
                        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
                        onClick={() => toggleCard('pollo-1-2')}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg text-pavi-grisoscuro">1/2 Pollo</h4>
                          <span className="font-bold text-xl text-pavi-naranja bg-pavi-naranja/10 px-3 py-1 rounded-full">$10.00</span>
                        </div>
                        <p className="text-sm text-pavi-grisoscuro leading-relaxed">Media porción de nuestro pollo a la brasa, ideal para compartir o un gran apetito.</p>
                                                 {expandedCards['pollo-1-2'] && (
                           <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/1.jpg" alt="1/2 Pollo a la brasa" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                    </div>
                  </div>

                  {/* COMPLEMENTOS INDIVIDUALES */}
                  <div className="bg-gradient-to-br from-pavi-grisclaro to-white rounded-xl p-6 shadow-lg border border-pavi-rojo/10">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-8 bg-pavi-naranja rounded-full mr-4"></div>
                      <h3 className="text-3xl font-bold text-pavi-marron">COMPLEMENTOS INDIVIDUALES</h3>
                    </div>
                    <div className="space-y-6">
                      <div 
                        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
                        onClick={() => toggleCard('arroz-moro')}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg text-pavi-grisoscuro">Porción de Arroz Moro</h4>
                          <span className="font-bold text-xl text-pavi-naranja bg-pavi-naranja/10 px-3 py-1 rounded-full">$2.50</span>
                        </div>
                        <p className="text-sm text-pavi-grisoscuro leading-relaxed">Nuestro famoso arroz moro, cremoso y lleno de sabor.</p>
                                                 {expandedCards['arroz-moro'] && (
                           <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/9.jpg" alt="Arroz Moro" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                      <div 
                        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
                        onClick={() => toggleCard('papas-fritas')}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg text-pavi-grisoscuro">Porción de Papas Fritas</h4>
                          <span className="font-bold text-xl text-pavi-naranja bg-pavi-naranja/10 px-3 py-1 rounded-full">$2.00</span>
                        </div>
                        <p className="text-sm text-pavi-grisoscuro leading-relaxed">Crujientes papas fritas, el acompañamiento perfecto para tu pollo.</p>
                                                 {expandedCards['papas-fritas'] && (
                           <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/10.jpg" alt="Papas Fritas" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                    </div>
                  </div>

                  {/* SOPAS Y CALDOS */}
                  <div className="bg-gradient-to-br from-pavi-grisclaro to-white rounded-xl p-6 shadow-lg border border-pavi-rojo/10">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-8 bg-pavi-amarillo rounded-full mr-4"></div>
                      <h3 className="text-3xl font-bold text-pavi-marron">SOPAS Y CALDOS</h3>
                    </div>
                    <div className="space-y-6">
                      <div 
                        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
                        onClick={() => toggleCard('consome-grande')}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg text-pavi-grisoscuro">Consomé de Pollo Grande</h4>
                          <span className="font-bold text-xl text-pavi-naranja bg-pavi-naranja/10 px-3 py-1 rounded-full">$3.00</span>
                        </div>
                        <p className="text-sm text-pavi-grisoscuro leading-relaxed">Reconfortante consomé de pollo casero, ideal para empezar tu comida.</p>
                                                 {expandedCards['consome-grande'] && (
                           <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/5.jpg" alt="Consomé de Pollo Grande" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                      <div 
                        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
                        onClick={() => toggleCard('consome-pequeno')}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg text-pavi-grisoscuro">Consomé de Pollo Pequeño</h4>
                          <span className="font-bold text-xl text-pavi-naranja bg-pavi-naranja/10 px-3 py-1 rounded-full">$2.00</span>
                        </div>
                        <p className="text-sm text-pavi-grisoscuro leading-relaxed">Una porción más pequeña de nuestro delicioso consomé.</p>
                                                 {expandedCards['consome-pequeno'] && (
                           <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/5.jpg" alt="Consomé de Pollo Pequeño" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-10">
                  {/* OFERTAS ESPECIALES */}
                  <div className="bg-gradient-to-br from-pavi-grisclaro to-white rounded-xl p-6 shadow-lg border border-pavi-rojo/10">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-8 bg-pavi-rojo rounded-full mr-4"></div>
                      <h3 className="text-3xl font-bold text-pavi-marron">OFERTAS ESPECIALES</h3>
                    </div>
                    <div className="space-y-6">
                      <div 
                        className="bg-gradient-to-r from-pavi-rojo/5 to-pavi-naranja/5 rounded-lg p-4 shadow-md hover:shadow-lg transition-all cursor-pointer border border-pavi-rojo/20"
                        onClick={() => toggleCard('combo-familiar')}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg text-pavi-grisoscuro">Combo Familiar Pavi Pollo</h4>
                          <span className="font-bold text-xl text-pavi-rojo bg-pavi-rojo/10 px-3 py-1 rounded-full">$20.00</span>
                        </div>
                        <p className="text-sm text-pavi-grisoscuro leading-relaxed">Pollo entero a la brasa con acompañamientos grandes. Pregunta por las opciones.</p>
                                                 {expandedCards['combo-familiar'] && (
                           <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/1.jpg" alt="Combo Familiar" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                      <div 
                        className="bg-gradient-to-r from-pavi-rojo/5 to-pavi-naranja/5 rounded-lg p-4 shadow-md hover:shadow-lg transition-all cursor-pointer border border-pavi-rojo/20"
                        onClick={() => toggleCard('combo-personal')}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg text-pavi-grisoscuro">Combo Personal Pavi Pollo</h4>
                          <span className="font-bold text-xl text-pavi-rojo bg-pavi-rojo/10 px-3 py-1 rounded-full">$7.50</span>
                        </div>
                        <p className="text-sm text-pavi-grisoscuro leading-relaxed">1/4 de pollo a la brasa con tu acompañamiento favorito y bebida.</p>
                                                 {expandedCards['combo-personal'] && (
                           <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/8.jpg" alt="Combo Personal" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                    </div>
                  </div>

                  {/* EXTRAS */}
                  <div className="bg-gradient-to-br from-pavi-grisclaro to-white rounded-xl p-6 shadow-lg border border-pavi-rojo/10">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-8 bg-pavi-naranja rounded-full mr-4"></div>
                      <h3 className="text-3xl font-bold text-pavi-marron">EXTRAS</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div 
                        className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                        onClick={() => toggleCard('juguito-natural')}
                      >
                        <h4 className="font-semibold text-pavi-grisoscuro mb-1">Juguito Natural</h4>
                        <span className="font-bold text-pavi-naranja">$1.50</span>
                                                 {expandedCards['juguito-natural'] && (
                           <div className="mt-3 relative h-32 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/3.jpg" alt="Juguito Natural" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                      <div 
                        className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                        onClick={() => toggleCard('gaseosa-pequena')}
                      >
                        <h4 className="font-semibold text-pavi-grisoscuro mb-1">Gaseosa Pequeña</h4>
                        <span className="font-bold text-pavi-naranja">$1.00</span>
                                                 {expandedCards['gaseosa-pequena'] && (
                           <div className="mt-3 relative h-32 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/4.jpg" alt="Gaseosa Pequeña" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                      <div 
                        className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                        onClick={() => toggleCard('gaseosa-grande')}
                      >
                        <h4 className="font-semibold text-pavi-grisoscuro mb-1">Gaseosa Grande</h4>
                        <span className="font-bold text-pavi-naranja">$2.50</span>
                                                 {expandedCards['gaseosa-grande'] && (
                           <div className="mt-3 relative h-32 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/4.jpg" alt="Gaseosa Grande" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                      <div 
                        className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                        onClick={() => toggleCard('salsas-adicionales')}
                      >
                        <h4 className="font-semibold text-pavi-grisoscuro mb-1">Salsas Adicionales</h4>
                        <span className="font-bold text-pavi-naranja">$0.50</span>
                                                 {expandedCards['salsas-adicionales'] && (
                           <div className="mt-3 relative h-32 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/2.jpg" alt="Salsas Adicionales" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                    </div>
                  </div>

                  {/* POSTRES */}
                  <div className="bg-gradient-to-br from-pavi-grisclaro to-white rounded-xl p-6 shadow-lg border border-pavi-rojo/10">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-8 bg-pavi-amarillo rounded-full mr-4"></div>
                      <h3 className="text-3xl font-bold text-pavi-marron">POSTRES</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div 
                        className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                        onClick={() => toggleCard('flan-casero')}
                      >
                        <h4 className="font-semibold text-pavi-grisoscuro mb-1">Flan Casero</h4>
                        <span className="font-bold text-pavi-naranja">$2.50</span>
                                                 {expandedCards['flan-casero'] && (
                           <div className="mt-3 relative h-32 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/6.jpg" alt="Flan Casero" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                      <div 
                        className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                        onClick={() => toggleCard('helado')}
                      >
                        <h4 className="font-semibold text-pavi-grisoscuro mb-1">Helado (sabor del día)</h4>
                        <span className="font-bold text-pavi-naranja">$3.00</span>
                                                 {expandedCards['helado'] && (
                           <div className="mt-3 relative h-32 rounded-lg overflow-hidden">
                             <Image src="/Imagenes/7.jpg" alt="Helado" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                           </div>
                         )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-pavi-rojo text-white py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-2">
            <Link href="#" className="hover:underline">
              Términos y Condiciones
            </Link>
            <Link href="#" className="hover:underline">
              Política de Privacidad
            </Link>
          </div>
          <p className="text-sm">© 2025 Creado por Pavi Pollo</p>
        </div>
      </footer>
    </div>
  )
} 