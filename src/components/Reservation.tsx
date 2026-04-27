import { motion } from 'motion/react';
import { Calendar, Users, Clock, ArrowRight } from 'lucide-react';

export default function Reservation() {
  return (
    <section id="reservations" className="py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-16">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-accent/10">
          
          {/* Form Side */}
          <div className="flex-grow p-16 lg:p-24">
            <span className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">
              Tu Mesa
            </span>
            <h2 className="font-serif text-6xl text-dark mb-10 leading-none">
              Reserva tu <span className="italic text-gold">momento</span>
            </h2>
            <p className="text-muted/70 mb-12 font-serif italic text-xl max-w-md">
              Asegura tu lugar bajo el sol mediterráneo. Las reservas online se confirman al instante.
            </p>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent/50" />
                  <input 
                    type="date" 
                    className="w-full pl-12 pr-4 py-4 bg-paper/50 rounded-lg border border-accent/20 focus:border-accent outline-none transition-colors text-sm font-medium text-dark"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent/50" />
                  <select className="w-full pl-12 pr-4 py-4 bg-paper/50 rounded-lg border border-accent/20 focus:border-accent outline-none transition-colors text-sm font-medium appearance-none text-dark">
                    <option>2 Personas</option>
                    <option>4 Personas</option>
                    <option>Más de 6</option>
                  </select>
                </div>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent/50" />
                  <select className="w-full pl-12 pr-4 py-4 bg-paper/50 rounded-lg border border-accent/20 focus:border-accent outline-none transition-colors text-sm font-medium appearance-none text-dark">
                    <option>13:30 (Almuerzo)</option>
                    <option>14:30 (Almuerzo)</option>
                    <option>20:30 (Cena)</option>
                    <option>21:30 (Cena)</option>
                  </select>
                </div>
                <div className="relative flex items-center justify-center">
                   <motion.button
                    whileHover={{ backgroundColor: '#2D2A26' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent text-white py-4 rounded-lg text-[10px] font-bold tracking-[0.3em] uppercase shadow-xl flex items-center justify-center gap-3 transition-colors"
                  >
                    Confirmar Reserva <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </form>
          </div>

          {/* Info Side (Image Background) */}
          <div className="lg:w-1/3 bg-primary relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
              alt="Restaurant table"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest">Horario Almuerzos</h4>
                    <p className="text-white/60 text-xs">Mar - Dom | 13:00 - 16:30</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest">Horario Cenas</h4>
                    <p className="text-white/60 text-xs">Vie - Sáb | 20:30 - 23:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
