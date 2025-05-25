// src/components/Navegacion.tsx
"use client";
import Link from "next/link";

const Navegacion = () => (
  <nav className="bg-[#1A3D7C] text-white p-4 flex gap-4 text-sm">
    <Link href="/modulos/finanzas" className="hover:underline">Finanzas</Link>
    <Link href="/modulos/inventarios" className="hover:underline">Inventarios</Link>
    <Link href="/modulos/planos" className="hover:underline">Planos</Link>
    <Link href="/modulos/comunicacion" className="hover:underline">Comunicación</Link>
    <Link href="/" className="ml-auto hover:underline">Inicio</Link>
  </nav>
);

export default Navegacion;