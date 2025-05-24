
export default function Contacto() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-[#2B2B2B] font-sans px-6 py-16">
      <div className="max-w-xl mx-auto bg-white shadow p-8 rounded">
        <h1 className="text-3xl font-bold text-[#1A3D7C] mb-6 text-center">¿Querés probar ObraLink?</h1>
        <p className="text-gray-700 mb-6 text-center">
          Dejanos tus datos y te contactamos para sumarte como usuario beta.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nombre</label>
            <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded p-2" placeholder="nombre@ejemplo.com" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Mensaje</label>
            <textarea className="w-full border border-gray-300 rounded p-2" rows={4} placeholder="Contanos en qué obra trabajás o por qué te interesa"></textarea>
          </div>
          <button type="submit" className="w-full bg-[#FF7B00] text-white py-2 rounded hover:bg-orange-600 transition">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
