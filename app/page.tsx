"use client";
import Image from "next/image";
import Link from "next/link";
import Navegacion from "@/components/Navegacion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1A3D7C]">
      <Navegacion />
      <div className="p-8 text-center">
        <Image src="/logo-obralink.png" alt="ObraLink logo" width={150} height={150} className="mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Bienvenido a ObraLink</h1>
        <p className="mb-8 text-lg">Gestión de obras profesional, centralizada y colaborativa.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/modulos/finanzas" className="border p-6 rounded hover:shadow transition">
            <h2 className="text-xl font-semibold mb-2">Finanzas</h2>
            <p>Control de ingresos, egresos y presupuestos.</p>
          </Link>
          <Link href="/modulos/inventarios" className="border p-6 rounded hover:shadow transition">
            <h2 className="text-xl font-semibold mb-2">Inventarios</h2>
            <p>Gestión de materiales y pedidos.</p>
          </Link>
          <Link href="/modulos/planos" className="border p-6 rounded hover:shadow transition">
            <h2 className="text-xl font-semibold mb-2">Planos</h2>
            <p>Almacenamiento y visualización de documentos.</p>
          </Link>
          <Link href="/modulos/comunicacion" className="border p-6 rounded hover:shadow transition">
            <h2 className="text-xl font-semibold mb-2">Comunicación</h2>
            <p>Mensajería interna con todos los actores del proyecto.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
