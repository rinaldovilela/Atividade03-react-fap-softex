"use client"

import { Botao } from "./components/Botao";
import { Quadrado } from "./components/Quadrado";
import { Titulo } from "./components/Titulo";

export default function Home() {
  return (
    <main>
      <header>
        <Titulo />
      </header>
      <section className="section-quadrado">
        <Quadrado />
      </section>
      <section className="section-botao">
        <Botao />
      </section>
    </main>
  );
}
