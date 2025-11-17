import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -inset-24 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-900" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-200 border border-emerald-400/20 text-xs font-semibold uppercase tracking-wider">Cidade de Maputo</div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Portal Oficial da Cidade de Maputo
          </h1>
          <p className="mt-4 text-lg text-slate-200 max-w-2xl">
            Informações, serviços e notícias do município, com uma experiência moderna e acessível.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="px-5 py-3 rounded-lg bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-400 transition">Serviços Online</a>
            <a href="#" className="px-5 py-3 rounded-lg bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition">Notícias</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[120%] h-24 bg-white/5 blur-2xl rounded-full" />
    </section>
  )
}
