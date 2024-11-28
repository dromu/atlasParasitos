import Link from 'next/link'
import { parasites, ParasiteId } from '../data/parasites'

export default function ParasitesIndexPage() {
  const protozoos = Object.entries(parasites).filter(([_, parasite]) => parasite.type === 'Protozoo')
  const helmintos = Object.entries(parasites).filter(([_, parasite]) => parasite.type === 'Helminto')

  return (
    <div className="space-y-8 max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold">Atlas de Parasitología</h1>
      <h2 className="text-2xl font-semibold">Índice de Parásitos Intestinales</h2>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Protozoos</h3>
        <ul className="space-y-2">
          {protozoos.map(([id, parasite]) => (
            <li key={id} className="border-b border-gray-200 last:border-b-0">
              <Link href={`/parasite/${id}`} className="block py-2 text-blue-600 hover:underline">
                {parasite.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Helmintos</h3>
        <ul className="space-y-2">
          {helmintos.map(([id, parasite]) => (
            <li key={id} className="border-b border-gray-200 last:border-b-0">
              <Link href={`/parasite/${id}`} className="block py-2 text-blue-600 hover:underline">
                {parasite.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex space-x-4">
        <Link href="/prologo" className="text-blue-600 hover:underline">&larr; Volver al prólogo</Link>
        <Link href="/" className="text-blue-600 hover:underline">&larr; Volver a la página de inicio</Link>
      </div>
    </div>
  )
}

