import { motion } from 'motion/react';
import { useState } from 'react';

const dishes = [
  {
    id: 1,
    name: 'Pappardelle al Cinghiale',
    description: 'Pasta ancha artesanal con ragú de jabalí estofado durante 12 horas.',
    price: '22',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Spaghetti allo Scoglio',
    description: 'Frutos del mar frescos, ajo, guindilla y un toque de tomate San Marzano.',
    price: '26',
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Tortelloni de Ricotta y Limón',
    description: 'Pasta rellena con ricotta de búfala y ralladura de limones de nuestra huerta.',
    price: '19',
    category: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Tagliolini Tartufato',
    description: 'Trufa negra fresca, mantequilla artesana y lascas de Parmigiano Reggiano 24 meses.',
    price: '28',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Menu() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Pasta', 'Seafood', 'Vegetarian'];

  const filteredDishes = filter === 'All' 
    ? dishes 
    : dishes.filter(d => d.category === filter);

  return (
    <section id="menu" className="py-32 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-paper to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-16 relative z-10">
        <div className="text-center mb-24">
          <span className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">
            Nuestra Colección
          </span>
          <h2 className="font-serif text-7xl md:text-8xl text-dark mb-16 leading-none">
            Hecho a <span className="italic text-gold">Mano</span>
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] px-8 py-3 transition-all border ${
                  filter === cat 
                  ? 'bg-dark text-white border-dark' 
                  : 'bg-transparent text-muted/60 border-accent/20 hover:border-accent hover:text-accent'
                }`}
              >
                {cat === 'All' ? 'Ver Todo' : cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16"
        >
          {filteredDishes.map((dish) => (
            <motion.div
              layout
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col sm:flex-row gap-10 items-start border-b border-accent/10 pb-12"
            >
              <div className="w-full sm:w-40 aspect-square flex-shrink-0 overflow-hidden rounded-full border-4 border-paper shadow-xl">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow pt-2">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-3xl text-dark group-hover:text-accent transition-colors italic">
                    {dish.name}
                  </h3>
                  <span className="font-serif text-2xl text-accent pl-4">{dish.price}€</span>
                </div>
                <p className="text-muted/80 text-base leading-relaxed font-serif italic mb-6">
                  {dish.description}
                </p>
                <div className="flex items-center gap-3">
                   <div className="h-[1px] w-8 bg-accent/30"></div>
                   <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent/60">
                     {dish.category}
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-24 text-center">
           <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-5 bg-dark text-white text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl hover:bg-accent transition-colors"
            >
              Descargar Carta PDF
            </motion.button>
        </div>
      </div>
    </section>
  );
}
