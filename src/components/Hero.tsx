import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[768px] h-screen bg-paper flex flex-col overflow-hidden">
      {/* Background Decorative Element: Large Sun Circle */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#F9E8D2] opacity-40 z-0"></div>

      <main className="relative z-10 flex-1 grid grid-cols-12 gap-0 items-center px-16 pt-24">
        {/* Left Side: Typography */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <p className="text-accent font-serif italic text-3xl">Auténtica cocina italiana</p>
            <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] text-dark tracking-tight">
              Tradición <br/> que <span className="text-gold">brilla.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-md text-xl leading-relaxed text-muted font-serif italic"
          >
            Pasta artesanal elaborada cada mañana bajo el cálido sol del mediterráneo. Un encuentro entre la herencia de la Toscana y los ingredientes de nuestra propia huerta.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center space-x-6 pt-4"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="uppercase text-[10px] tracking-[0.4em] font-bold text-primary">Sant Antoni de Portmany — Ibiza</span>
          </motion.div>

          <div className="flex gap-6">
            <button className="px-10 py-4 bg-dark text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent transition-colors">
              Ver Carta
            </button>
             <button className="px-10 py-4 border border-dark text-dark text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-dark hover:text-white transition-all">
              Sobre Nosotros
            </button>
          </div>
        </div>

        {/* Right Side: Visual Centerpiece */}
        <div className="hidden lg:col-span-6 relative lg:flex justify-center items-center h-full">
          {/* Stylized Plate/Sun Graphic */}
          <div className="relative w-[500px] h-[500px] flex justify-center items-center">
            {/* Outer Ring */}
            <motion.div 
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-accent/30"
            ></motion.div>
            {/* Middle Ring with Dash */}
            <div className="absolute inset-12 rounded-full border-2 border-dashed border-gold/50"></div>
            
            {/* Pasta Imagery Placeholder with artistic feel */}
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-80 h-80 bg-white rounded-full shadow-2xl overflow-hidden border-8 border-white flex items-center justify-center relative group"
            >
               <img 
                 src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800" 
                 className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                 alt="Pasta fresca"
               />
               <div className="relative z-10 text-center bg-white/70 backdrop-blur-md p-6 rounded-full">
                 <span className="block text-4xl mb-1 italic font-serif text-dark">Tagliatelle</span>
                 <span className="block text-[10px] uppercase tracking-widest text-accent font-bold">al Limone e Sole</span>
               </div>
            </motion.div>

            {/* Rotating Micro-Label */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 w-28 h-28 bg-dark rounded-full flex items-center justify-center p-4"
            >
              <span className="text-white text-[9px] text-center font-bold uppercase tracking-widest leading-tight">
                Pasta<br/>Fatta a<br/>Mano
              </span>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Side Text: Artistic Verticality */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="[writing-mode:vertical-lr] rotate-180 uppercase text-[9px] tracking-[0.5em] text-accent font-bold opacity-60 italic">
          DAL SOLE ALLA TAVOLA — DAL SOLE ALLA TAVOLA
        </span>
      </div>
    </section>
  );
}
