'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface ImageModalProps {
  imageUrl: string
  alt: string
  description: string
}

export function ImageModal({ imageUrl, alt, description }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const isExternalImage = imageUrl.startsWith('http') || imageUrl.startsWith('https')

  return (
    <>
      {imageError ? (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
          Imagen no disponible
        </div>
      ) : (
        <div className="relative w-full h-64">
          <Image 
            src={imageUrl} 
            alt={alt} 
            fill
            style={{ objectFit: 'cover' }}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
            onError={handleImageError}
            unoptimized={isExternalImage}
          />
        </div>
      )}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{alt}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            {imageError ? (
              <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-gray-500">
                Imagen no disponible
              </div>
            ) : (
              <div className="relative w-full h-[400px]">
                <Image 
                  src={imageUrl} 
                  alt={alt} 
                  fill
                  style={{ objectFit: 'contain' }}
                  onError={handleImageError}
                  unoptimized={isExternalImage}
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

