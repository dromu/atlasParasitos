import Link from 'next/link'
import Image from 'next/image'

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white p-4">
      <main className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Bienvenido al Atlas de Parasitología</h1>
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Icono representativo de parasitología"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />
        <p className="text-xl mb-8">
          Explora nuestro compendio interactivo de parásitos intestinales, 
          diseñado para estudiantes, profesionales de la salud e investigadores.
        </p>
        <p className="text-lg mb-8">
          Descubre información detallada sobre protozoos y helmintos, 
          incluyendo imágenes de alta calidad y descripciones precisas.
        </p>
        <Link 
          href="/prologo" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Explorar el Atlas
        </Link>
      </main>
      <footer className="mt-12 text-sm text-gray-600">
        © 2023 Atlas de Parasitología. Todos los derechos reservados.
      </footer>
    </div>
  )
}

