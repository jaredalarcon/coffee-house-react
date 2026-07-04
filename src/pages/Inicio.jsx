import { Link } from "react-router-dom";
import imagenCafe from "../assets/CAFE.jpg";
function Inicio() {
  return (
    <div className="bg-stone-100 py-16 px-4 text-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bienvenido a Coffee House
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Proveedores del mejor café en grano. Descubre la intensidad ideal para
        tu taza diaria con nuestra selección exclusiva de tuestes.
      </p>
      <div className="mt-10 px-4 md:px-8 mx-auto overflow-hidden rounded-2xl shadow-xl border-4 border-stone-900">
        <img
          src={imagenCafe}
          alt="Cafés de orígenes"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-12 mb-6 w-full bg-stone-900 text-amber-400 py-5 px-6 rounded-xl flex items-center justify-center gap-3">
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-wider">
          Lo Más Vendido
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto my-10 px-4">
        
        <div className="bg-amber-200 rounded-2xl shadow-md overflow-hidden flex flex-col justify-between text-left transition-shadow hover:shadow-lg">
          <div className="h-64 overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1675237625867-faddf7f858b7?q=80&w=387"
              alt="Café Aroma Ligero"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-stone-900 leading-tight">
                  Café Aroma Ligero
                </h3>
                <span className="bg-amber-50 text-amber-800 border border-amber-200 font-bold text-xs uppercase px-2.5 py-1 rounded-full">
                  Tueste: Suave
                </span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Notas cítricas y florales, ideal para las primeras horas de la
                mañana.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-stone-100">
              <span className="text-2xl font-extrabold text-stone-900">
                S/ 35.00
              </span>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-sm">
                Añadir
              </button>
            </div>
          </div>
        </div>

        <div className="bg-amber-200 rounded-2xl shadow-md overflow-hidden flex flex-col justify-between text-left transition-shadow hover:shadow-lg">
          <div className="h-64 overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1673637380658-4144fd3fa160?q=80&w=870"
              alt="Café Equilibrio Perfecto"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-stone-900 leading-tight">
                  Café Equilibrio Perfecto
                </h3>
                <span className="bg-amber-50 text-amber-800 border border-amber-200 font-bold text-xs uppercase px-2.5 py-1 rounded-full">
                  Tueste: Medio
                </span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Balance ideal con sutiles notas de chocolate y frutos secos.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-stone-100">
              <span className="text-2xl font-extrabold text-stone-900">
                S/ 40.00
              </span>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-sm">
                Añadir
              </button>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/productos"
        className="inline-block mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl border-3 border-amber-600 transition-all transform  hover:scale-110"
      >
        Ver Catálogo
      </Link>
    </div>
  );
}

export default Inicio;
