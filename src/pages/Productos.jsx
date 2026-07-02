import { useState, useEffect } from 'react'
import { obtenerProductos } from '../services/api'

function Productos() {
  const [listaProductos, setListaProductos] = useState([])

  useEffect(() => {
    obtenerProductos().then((datos) => {
      setListaProductos(datos)
    })
  }, [])

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Nuestros Cafés en Grano</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listaProductos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between overflow-hidden">
              
              <div className="h-48 bg-gray-100">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-amber-500 font-semibold text-sm uppercase">
                    Tueste {producto.tueste}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {producto.descripcion}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-4 border-t border-gray-100 pt-4">
                  <span className="text-xl font-bold text-gray-900">
                    S/ {producto.precio.toFixed(2)}
                  </span>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                    Comprar
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Productos