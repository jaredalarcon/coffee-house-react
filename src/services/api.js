const URL_BASE = "http://localhost:3007"

export const obtenerProductos = async () => {
  const respuesta = await fetch(`${URL_BASE}/productos`)
  const datos = await respuesta.json()
  return datos
}