import Link from 'next/link'

export default function PrologoPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Prólogo del Atlas de Parasitología</h1>
      <p className="text-lg">
        Bienvenido al Atlas de Parasitología, una herramienta educativa diseñada para estudiantes,
        profesionales de la salud e investigadores interesados en el fascinante mundo de los parásitos intestinales.
      </p>
      <p className="text-lg">
        Este atlas proporciona información detallada sobre una variedad de protozoos y helmintos,
        acompañada de imágenes de alta calidad que ilustran las características morfológicas clave
        de estos organismos.
      </p>
      <p className="text-lg">
        Nuestro objetivo es facilitar el aprendizaje y la identificación de estos importantes
        patógenos, contribuyendo así a mejorar el diagnóstico y tratamiento de las enfermedades
        parasitarias.
      </p>
      <div className="mt-8">
        <Link 
          href="/parasites" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Explorar el Contenido
        </Link>
      </div>
    </div>
  )
}

