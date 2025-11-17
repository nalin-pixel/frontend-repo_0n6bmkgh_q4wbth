import { Facebook, Instagram, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-lg mb-4" />
            <div className="text-white font-bold">Conselho Municipal</div>
            <div className="text-emerald-300/80 text-sm">Cidade de Maputo</div>
            <p className="text-slate-400 text-sm mt-4">Servindo a comunidade com transparência, proximidade e inovação.</p>
            <div className="flex items-center gap-3 mt-4 text-slate-300">
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
              <a href="#" aria-label="Email" className="hover:text-white"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Serviços</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white">Licenças</a></li>
              <li><a href="#" className="hover:text-white">Pagamentos</a></li>
              <li><a href="#" className="hover:text-white">Atendimento</a></li>
              <li><a href="#" className="hover:text-white">Documentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Institucional</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white">Presidência</a></li>
              <li><a href="#" className="hover:text-white">Estrutura</a></li>
              <li><a href="#" className="hover:text-white">Transparência</a></li>
              <li><a href="#" className="hover:text-white">Publicações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contactos</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>Avenida 25 de Setembro, Maputo</li>
              <li>+258 21 000 000</li>
              <li>atendimento@cmmaputo.gov.mz</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Conselho Municipal da Cidade de Maputo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Termos</a>
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Acessibilidade</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
