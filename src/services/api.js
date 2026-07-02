const URL_BASE = "https://my-json-server.typicode.com/jaredalarcon/coffee-house-react"

export const obtenerProductos = async () => {
  const respuesta = await fetch(`${URL_BASE}/productos`)
  const datos = await respuesta.json()
  return datos
}