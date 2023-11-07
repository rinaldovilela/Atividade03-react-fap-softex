'use client'

import { Botao } from './components/Botao'
import { Cabecalho } from './components/Cabecalho'
import { Footer } from './components/Footer'
import { Imagem } from './components/Imagem'
import { ListaItens } from './components/ListaItens'
import { Paragrafo } from './components/Paragrafo'
import { Quadrado } from './components/Quadrado'
import { Titulo } from './components/Titulo'

export default function Home() {
    return (
        <main>
          <Cabecalho/>
            <section>
                <Titulo />
            </section>
            <section className="section-quadrado">
                <p>Quadrado = &gt; </p>
                <Quadrado />
            </section>
            <section className="section-botao">
                <p>Botão = &gt;</p>
                <Botao />
            </section>
            <section className="section-listaItens">
                <p>Lista de Itens = &gt;</p>
                <ListaItens />
            </section>
            <section className="section-imagem">
                <p>Imagem = &gt;</p>
                <Imagem />
            </section>
            <section className="section-paragrafo">
                <p>Parágrafo = &gt;</p>
                <Paragrafo />
            </section>
            <footer>
                <Footer />
            </footer>
                  
        </main>
    )
}
