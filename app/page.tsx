
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-[#2B2B2B] font-sans">
      <header className="bg-[#1A3D7C] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          {typeof window !== "undefined" && (
  <img
    src="/logo-obralink.png"
    alt="ObraLink logo"
    width={120}
    height={120}
    className="mb-4"
  />
)}

          <h1 className="text-5xl font-extrabold">ObraLink</h1>
          <p className="text-xl mt-4 max-w-2xl">
            La plataforma digital que transforma la gestión de obras para arquitectos, contratistas y profesionales del sector.
          </p>
          <Link href="/contacto">
            <button className="mt-6 bg-[#FF7B00] text-white px-6 py-3 rounded hover:bg-orange-600 text-lg">
              Quiero ser usuario beta
            </button>
          </Link>
        </div>
      </header>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué podés hacer con ObraLink?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {[
              { title: "Gestión Financiera", desc: "Controlá gastos, ingresos y flujo de fondos con reportes automáticos." },
              { title: "Inventarios y Pedidos", desc: "Monitoreá tu stock y los pedidos a proveedores en tiempo real." },
              { title: "Planos y Documentación", desc: "Centralizá planos, permisos y documentos críticos en un solo lugar." },
              { title: "Comunicación", desc: "Unificá mensajes entre cliente, arquitecto y contratistas." }
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-[#F5F5F5] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-[#1A3D7C]">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-[#1A3D7C] text-white py-8 text-center">
        <p>© 2025 ObraLink. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
