import { Sun, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-10">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <div className="w-5 h-5 border border-white rounded-full"></div>
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight italic">Pasta y Sol</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-10 font-serif italic">
              Donde la tradición italiana encuentra la luz del mediterráneo. Pasta hecha a mano con alma de Ibiza.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs uppercase tracking-widest hover:text-accent transition-colors font-bold">Instagram</a>
              <a href="#" className="text-xs uppercase tracking-widest hover:text-accent transition-colors font-bold">Twitter</a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-accent">Menú</h4>
            <ul className="space-y-6 text-xs font-bold uppercase tracking-widest text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Carta</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#reservations" className="hover:text-white transition-colors">Reservas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-accent">Contacto</h4>
            <ul className="space-y-6 text-sm text-white/50 font-serif italic">
              <li>Carrer de Mallorca, 240</li>
              <li>Sant Antoni, Ibiza</li>
              <li>+34 971 00 00 00</li>
              <li>ciao@pastaysol.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-accent">Eventos</h4>
            <p className="text-xs text-white/40 mb-8 uppercase tracking-widest font-bold">Suscríbete para cenas exclusivas.</p>
            <form className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="bg-transparent border-none outline-none px-0 py-2 text-[10px] tracking-widest flex-grow text-white placeholder:text-white/20 font-bold"
              />
              <button className="px-4 py-2 hover:text-accent transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] uppercase font-bold tracking-[0.4em] text-white/20">
          <p>© 2026 PASTA Y SOL — DAL SOLE ALLA TAVOLA.</p>
          <div className="flex gap-12 italic">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  )
}
