import { useState } from 'react'
import { Menu, ChevronDown, Search } from 'lucide-react'

const NavItem = ({ label, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 px-3 py-2 rounded-md text-slate-100/90 hover:text-white hover:bg-white/10 transition">
        <span className="text-sm font-medium tracking-wide">{label}</span>
        {children ? <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} /> : null}
      </button>
      {children && open && (
        <div className="absolute left-0 mt-2 w-56 rounded-xl bg-white/95 backdrop-blur-sm shadow-xl ring-1 ring-slate-900/5 p-2 z-40">
          {children}
        </div>
      )}
    </div>
  )
}

const DropdownLink = ({ label, desc }) => (
  <a href="#" className="block p-3 rounded-lg hover:bg-slate-100">
    <div className="text-sm font-semibold text-slate-800">{label}</div>
    {desc && <div className="text-xs text-slate-500 mt-0.5">{desc}</div>}
  </a>
)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-lg" />
            <div className="leading-tight">
              <div className="text-white font-bold tracking-wide">Conselho Municipal</div>
              <div className="text-emerald-300/80 text-xs uppercase tracking-wider">Cidade de Maputo</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            <NavItem label="Institucional">
              <DropdownLink label="Presidência" desc="Mensagem e agenda do Presidente" />
              <DropdownLink label="Estrutura" desc="Conselho e direções municipais" />
              <DropdownLink label="Documentos" desc="Relatórios e regulamentos" />
            </NavItem>
            <NavItem label="Serviços">
              <DropdownLink label="Licenças" desc="Construção, comércio e mais" />
              <DropdownLink label="Pagamentos" desc="Taxas municipais online" />
              <DropdownLink label="Atendimento" desc="Marcação e balcões" />
            </NavItem>
            <NavItem label="Cidadão">
              <DropdownLink label="Participação" desc="Queixas, sugestões e consultas" />
              <DropdownLink label="Projetos" desc="Obras e iniciativas em curso" />
            </NavItem>
            <NavItem label="Transparência">
              <DropdownLink label="Orçamento" />
              <DropdownLink label="Contratações" />
              <DropdownLink label="Publicações" />
            </NavItem>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <Search className="h-4 w-4 text-white/70 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Pesquisar" className="pl-9 pr-3 py-2 text-sm rounded-md bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
            </div>
            <a href="#" className="px-3 py-2 rounded-md bg-emerald-500 text-white text-sm font-semibold shadow hover:bg-emerald-400 transition">Portal do Munícipe</a>
          </div>

          <button onClick={() => setMobileOpen(v => !v)} className="lg:hidden text-white/90 p-2 rounded-md hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 space-y-2">
            {['Institucional','Serviços','Cidadão','Transparência'].map(i => (
              <a key={i} href="#" className="block px-2 py-2 rounded-md text-white/90 hover:bg-white/10">{i}</a>
            ))}
            <div className="pt-2">
              <a href="#" className="block w-full text-center px-3 py-2 rounded-md bg-emerald-500 text-white text-sm font-semibold shadow hover:bg-emerald-400 transition">Portal do Munícipe</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
