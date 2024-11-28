export function Footer() {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Créditos</h3>
          <p className="mt-2 text-base text-gray-500">
            Desarrollado por el Equipo de Parasitología de la Universidad XYZ.<br />
            Imágenes cortesía del Dr. Juan Pérez y la Dra. María González.
          </p>
        </div>
        <div className="mt-4 border-t border-gray-200 pt-4">
          <p className="text-base text-gray-400 text-center">
            &copy; 2023 Atlas de Parasitología. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

