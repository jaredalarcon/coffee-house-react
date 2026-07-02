import { useState } from 'react'

function Contacto() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
      setError('Todos los campos son obligatorios')
      return
    }

    setError('')
    setEnviado(true)
    setNombre('')
    setCorreo('')
    setMensaje('')
  }

  return (
    <div className="bg-white py-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contacto</h2>
          <p className="text-gray-600 mb-8">¿Deseas café al por mayor para tu negocio? Escríbenos.</p>

          {enviado && (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 text-center font-medium">
              ¡Mensaje enviado con éxito! Nos comunicaremos pronto.
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 text-center font-medium">
              {error}
            </div>
          )}

          <form onSubmit={manejarEnvio} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Comercial / Personal</label>
              <input 
                type="text" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <input 
                type="email" 
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje o Pedido</label>
              <textarea 
                rows="4"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2.5 rounded-lg transition-colors">
              Enviar Mensaje
            </button>
          </form>
        </div>

        <div className="hidden md:block h-full min-h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=663" 
            alt="Café en grano Coffee House" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  )
}

export default Contacto