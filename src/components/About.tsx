import { motion } from 'motion/react';
import { Sun, Leaf, Heart } from 'lucide-react';

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200", // Interior
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800", // Dish
  ];

  return (
    <section id="about" className="py-32 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block border-l-2 border-accent pl-4">
              Esencia Mediterránea
            </span>
            <h2 className="font-serif text-6xl md:text-7xl text-dark mb-10 leading-none">
              Más que pasta, <br /> es <span className="italic text-gold">tiempo</span>.
            </h2>
            <div className="space-y-8 text-muted text-xl leading-relaxed font-serif italic max-w-lg">
              <p>
                Pasta y Sol nació de una idea simple: combinar la técnica ancestral de la pasta italiana hecha a mano con los ingredientes más puros de la isla.
              </p>
              <p>
                En nuestro taller, el tiempo se detiene. Cada sémola, cada huevo y cada gesto están pensados para honrar la tradición del mediterráneo bajo la luz eterna de Ibiza.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-12 mt-16 border-t border-accent/10 pt-12">
              <div className="flex flex-col space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent">Origen</span>
                <p className="text-sm font-medium text-dark uppercase">Toscana</p>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent">Materia</span>
                <p className="text-sm font-medium text-dark uppercase">Artesana</p>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent">Alma</span>
                <p className="text-sm font-medium text-dark uppercase">Mediterránea</p>
              </div>
            </div>
          </motion.div>

          {/* Staggered Image Gallery */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl relative z-10"
            >
              <img
                src={images[0]}
                alt="Interior del restaurante"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial={{ x: 50, y: 50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden border-8 border-paper shadow-2xl z-20 hidden md:block"
            >
              <img
                src={images[1]}
                alt="Pasta fresca"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Decorative Lemons (SVG simplified patterns) */}
            <div className="absolute top-0 right-0 w-32 h-32 text-lemon/20 -z-10 translate-x-10 -translate-y-10 rotate-12">
               <Sun className="w-full h-full fill-current" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
