import { Building2, Receipt, Landmark, FileText, MapPin, Handshake } from 'lucide-react'

const services = [
  { icon: Building2, title: 'Licenças de Construção', desc: 'Solicite e acompanhe processos de licenciamento.' },
  { icon: Receipt, title: 'Pagamentos e Taxas', desc: 'Emita guias e efetue pagamentos online.' },
  { icon: Landmark, title: 'Mercados e Feiras', desc: 'Informações sobre alvarás e espaços.' },
  { icon: FileText, title: 'Documentos e Editais', desc: 'Aceda a regulamentos e publicações oficiais.' },
  { icon: MapPin, title: 'Mapa da Cidade', desc: 'Localize serviços e infraestruturas municipais.' },
  { icon: Handshake, title: 'Atendimento ao Munícipe', desc: 'Marcação, balcões e contactos úteis.' },
]

export default function Services() {
  return (
    <section className="py-14 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Serviços Principais</h2>
          <a href="#" className="text-emerald-300 hover:text-emerald-200 text-sm font-semibold">Ver todos</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <a key={title} href="#" className="group rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.04] border border-white/10 p-5 hover:border-emerald-400/40 transition relative overflow-hidden">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-400/10 blur-xl opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-md bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{title}</h3>
                  <p className="text-slate-300/80 text-sm mt-1">{desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
