import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-amber-500">
          Coffee <span className="text-gray-100">House</span>
        </Link>
        <div className="space-x-6 font-medium text-gray-100">
          <Link to="/" className="hover:text-amber-500 transition-colors">Inicio</Link>
          <Link to="/productos" className="hover:text-amber-500 transition-colors">Productos</Link>
          <Link to="/contacto" className="hover:text-amber-500 transition-colors">Contacto</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar