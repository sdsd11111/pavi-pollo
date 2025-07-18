import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Star,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  User,
  Smartphone,
  Bell,
  ShoppingBag,
} from "lucide-react"
import Header from "@/components/header"
import Image from "next/image"

export default function PaviPolloHome() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-yellow-200 py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-800 mb-4">ABIERTO PARA LLEVAR Y RECOGIDA</p>
                <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">PAVI POLLO</h1>
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                  <a href="https://wa.me/593939572067" target="_blank" rel="noopener noreferrer">Pedir online</a>
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center relative">
                  <Image src="/Imagenes/1.jpg" alt="Pollo asado entero" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Food Gallery */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-2 h-64">
              <div className="bg-gray-200 rounded-lg flex items-center justify-center relative">
                <Image src="/Imagenes/2.jpg" alt="Pollo asado" fill style={{objectFit: 'cover'}} className="rounded-lg" />
              </div>
              <div className="bg-gray-200 rounded-lg flex items-center justify-center relative">
                <Image src="/Imagenes/3.jpg" alt="Papas fritas" fill style={{objectFit: 'cover'}} className="rounded-lg" />
              </div>
              <div className="bg-gray-200 rounded-lg flex items-center justify-center relative">
                <Image src="/Imagenes/4.jpg" alt="Arroz moro" fill style={{objectFit: 'cover'}} className="rounded-lg" />
              </div>
              <div className="bg-gray-200 rounded-lg flex items-center justify-center relative">
                <Image src="/Imagenes/5.jpg" alt="Consomé" fill style={{objectFit: 'cover'}} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Special Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-yellow-500 fill-current mr-2" />
                  <h2 className="text-2xl font-bold">🌟 ESPECIAL DE LA SEMANA 🌟</h2>
                  <Star className="w-6 h-6 text-yellow-500 fill-current ml-2" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Descubre cada semana una nueva delicia o promoción especial. ¡Tu antojo favorito al mejor precio!</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  {/* Aquí puedes agregar más detalles de la promoción si lo deseas */}
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center relative">
                  <Image src="/Imagenes/6.jpg" alt="Especial de la semana" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Section */}
        <section className="py-16 bg-yellow-200">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center relative">
                  <Image src="/Imagenes/7.jpg" alt="Facilidad de pedido o entrega" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">PEDIDOS FÁCILES</h2>
                <h3 className="text-xl font-semibold mb-4">SATISFACER TU ANTOJO ES MÁS FÁCIL</h3>
                <p className="text-gray-700 mb-6">
                  En Pavi Pollo, queremos que disfrutes de tu comida favorita sin complicaciones. Visítanos o contáctanos para hacer tu pedido.
                </p>
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                  <a href="https://wa.me/593939572067" target="_blank" rel="noopener noreferrer">Pedir online</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-300 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Smartphone className="w-12 h-12 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold mb-4">PIDE EN EL CAMINO</h3>
                <p className="text-gray-600">
                  Haz tu pedido con antelación y recógelo en nuestro local. ¡Rápido y sin esperas!
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-300 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Bell className="w-12 h-12 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold mb-4">ENTREGA A TU PUERTA</h3>
                <p className="text-gray-600">
                  Saborea Pavi Pollo desde la comodidad de tu hogar. Consulta nuestras opciones de entrega.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-300 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <ShoppingBag className="w-12 h-12 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold mb-4">PUNTOS DE ENTREGA</h3>
                <p className="text-gray-600">
                  Encuéntranos fácilmente en Durán. Nuestro local central está listo para atenderte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-6xl font-bold text-red-600 mb-4">RECETA ORIGINAL</h2>
            <h3 className="text-4xl font-bold text-red-600 mb-16">DESDE 1980</h3>

            <div className="mb-12">
              <div className="flex items-center justify-center mb-8">
                <Star className="w-6 h-6 text-yellow-500 fill-current mr-2" />
                <h4 className="text-2xl font-bold">🌟 SIEMPRE FAVORITOS 🌟</h4>
                <Star className="w-6 h-6 text-yellow-500 fill-current ml-2" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center relative">
                    <Image src="/Imagenes/8.jpg" alt="Pollo a la brasa" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                  </div>
                  <h5 className="font-bold">POLLO A LA BRASA</h5>
                  <p className="text-gray-600">Nuestro icónico pollo, dorado a la perfección con la receta de la casa.</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center relative">
                    <Image src="/Imagenes/9.jpg" alt="Arroz moro" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                  </div>
                  <h5 className="font-bold">ARROZ MORO</h5>
                  <p className="text-gray-600">Acompaña tu pollo con nuestro delicioso arroz moro casero.</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center relative">
                    <Image src="/Imagenes/10.jpg" alt="Papas fritas" fill style={{objectFit: 'cover'}} className="rounded-lg" />
                  </div>
                  <h5 className="font-bold">PAPAS FRITAS</h5>
                  <p className="text-gray-600">Crujientes por fuera, suaves por dentro. El complemento perfecto.</p>
                </div>
              </div>

              <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 mt-8">
                <Link href="/menu">Menú completo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-4">CONTÁCTANOS</h2>
                <p className="text-gray-600 mb-8">ESCRÍBENOS Y TE CONTACTAREMOS PRONTO</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Nombre"
                        className="border-b-2 border-gray-300 rounded-none border-t-0 border-l-0 border-r-0 bg-transparent"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Apellido"
                        className="border-b-2 border-gray-300 rounded-none border-t-0 border-l-0 border-r-0 bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Email *"
                        className="border-b-2 border-gray-300 rounded-none border-t-0 border-l-0 border-r-0 bg-transparent"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Asunto"
                        className="border-b-2 border-gray-300 rounded-none border-t-0 border-l-0 border-r-0 bg-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Déjanos un mensaje..."
                      className="border-b-2 border-gray-300 rounded-none border-t-0 border-l-0 border-r-0 bg-transparent resize-none"
                      rows={3}
                    />
                  </div>
                  <Button className="bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-2">
                    Enviar
                  </Button>
                </form>
              </div>

              {/* Business Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">HORARIO</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3" />
                    <span>Lunes - Domingo: 10:30 AM - 10:00 PM</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3" />
                    <div>
                      <p>Mercadillo entre Sucre y 18 de Noviembre,</p>
                      <p>Loja, Ecuador</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>WhatsApp: 0939572067</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <a href="https://www.facebook.com/profile.php?id=100066759086525&locale=es_LA" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                    </a>
                    <a href="https://www.instagram.com/pavipolloprincipal_oficial/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-600 cursor-pointer" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {/* TikTok placeholder */}
                      <span className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer">TikTok</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-4 mt-auto">
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
