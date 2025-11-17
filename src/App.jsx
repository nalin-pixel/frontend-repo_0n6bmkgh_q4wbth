import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <News />

      <section className="py-14 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <h3 className="text-white font-semibold">Avisos e Editais</h3>
              <ul className="mt-4 space-y-3 text-slate-300 text-sm">
                <li><a href="#" className="hover:text-emerald-300">Consulta pública: Plano Diretor</a></li>
                <li><a href="#" className="hover:text-emerald-300">Edital: Licitações em aberto</a></li>
                <li><a href="#" className="hover:text-emerald-300">Aviso: Manutenção programada</a></li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <h3 className="text-white font-semibold">Projetos em Curso</h3>
              <p className="mt-2 text-slate-300/80 text-sm">Acompanhe obras de reabilitação de vias, saneamento e espaços públicos.</p>
              <a href="#" className="mt-4 inline-block px-4 py-2 rounded-md bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-400 transition">Saber mais</a>
            </div>
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <h3 className="text-white font-semibold">Participação Cívica</h3>
              <p className="mt-2 text-slate-300/80 text-sm">Envie sugestões, reporte problemas e participe nas consultas públicas.</p>
              <a href="#" className="mt-4 inline-block px-4 py-2 rounded-md bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition">Participar</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
