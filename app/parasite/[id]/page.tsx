import Link from 'next/link'
import { notFound } from 'next/navigation'
import { parasites, ParasiteId } from '../../data/parasites'
import { ImageModal } from '../../../components/ImageModal'

export default function ParasitePage({ params }: { params: { id: string } }) {
  const parasite = parasites[params.id as ParasiteId]

  if (!parasite) {
    notFound()
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto p-4">
      <Link href="/parasites" className="inline-flex items-center text-blue-600 hover:underline mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Volver al índice</span>
      </Link>
      <h2 className="text-3xl font-bold">{parasite.name}</h2>
      <p className="text-xl text-gray-600">{parasite.type}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {parasite.images.map((image, index) => (
          <div key={index} className="space-y-4">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <ImageModal 
                imageUrl={image.url} 
                alt={`${parasite.name} - Imagen ${index + 1}`}
                description={image.description}
              />
            </div>
            <p className="text-sm text-gray-600">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

