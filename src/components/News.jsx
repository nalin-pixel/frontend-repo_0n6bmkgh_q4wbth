import { CalendarDays, ArrowRight } from 'lucide-react'

const news = [
  { title: 'Campanha de Limpeza Urbana', date: '12 Nov 2025', excerpt: 'Município lança ação comunitária para limpeza de bairros e recolha de resíduos.' },
  { title: 'Reabilitação de Vias', date: '08 Nov 2025', excerpt: 'Novas obras para melhorar a mobilidade e segurança nas principais avenidas.' },
  { title: 'Feira do Empreendedor', date: '03 Nov 2025', excerpt: 'Oportunidades para negócios locais e capacitação de jovens.' },
]

export default function News() {
  return (
    <section className="py-14 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Notícias</h2>
          <a href="#" className="text-emerald-300 hover:text-emerald-200 text-sm font-semibold">Ver mais</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((n) => (
            <article key={n.title} className="group rounded-2xl bg-white/[0.06] border border-white/10 overflow-hidden hover:border-emerald-400/40 transition">
              <div className="aspect-video bg-gradient-to-br from-emerald-700 to-slate-800" />
              <div className="p-5">
                <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                  <CalendarDays className="h-4 w-4" />
                  {n.date}
                </div>
                <h3 className="mt-2 text-white font-semibold group-hover:text-emerald-300 transition">{n.title}</h3>
                <p className="mt-1 text-slate-300/80 text-sm">{n.excerpt}</p>
                <a href="#" className="mt-3 inline-flex items-center gap-1 text-emerald-300 text-sm font-semibold group-hover:gap-2 transition">
                  Ler mais <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
