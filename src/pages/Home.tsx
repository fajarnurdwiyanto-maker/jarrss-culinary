import { motion } from 'motion/react';
import { Search, ArrowRight, Star, Clock, ChefHat, Heart, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_RECIPES } from '../constants';
import { cn } from '../lib/utils';

export default function Home() {
  const featuredRecipes = MOCK_RECIPES.filter(r => r.isFeatured).concat(MOCK_RECIPES.filter(r => !r.isFeatured).slice(0, 2));

  return (
    <div className="flex flex-col space-y-20 pb-20">
      {/* Bento Grid Main Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Hero Card (Large Bento Box) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-8 bg-brand-100 border-2 border-dark rounded-[40px] p-8 md:p-12 relative overflow-hidden shadow-neubrutal flex flex-col justify-end min-h-[500px]"
          >
            <div className="absolute top-8 right-8 flex gap-3">
              <span className="bg-white px-4 py-1.5 border-2 border-dark rounded-full text-xs font-black uppercase tracking-widest shadow-neubrutal-sm">POPULER</span>
              <button className="bg-white p-3 border-2 border-dark rounded-full shadow-neubrutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <Heart className="w-5 h-5 text-red-500 fill-current" />
              </button>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-4 text-brand-500">
                <Star className="w-6 h-6 fill-current" />
                <span className="font-black text-2xl text-dark">4.9</span>
                <span className="text-sm font-bold text-dark/40 ml-2 uppercase">(Sabtu • Masak Rendang)</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black text-dark leading-[1.1] mb-6 tracking-tighter uppercase">
                Rendang Daging Sapi Minang
              </h2>
              <p className="text-xl font-medium text-dark/70 mb-8 max-w-xl leading-relaxed">
                Daging sapi yang dimasak perlahan dengan santan dan 21 rempah otentik selama 6 jam untuk tekstur sempurna.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3 font-black text-dark uppercase text-sm">
                  <Clock className="w-6 h-6 text-brand-500" /> 6 Jam
                </div>
                <div className="flex items-center gap-3 font-black text-dark uppercase text-sm">
                  <ChefHat className="w-6 h-6 text-brand-500" /> 8 Porsi
                </div>
                <Link 
                  to="/recipe/rendang-001" 
                  className="bg-brand-500 text-white border-2 border-dark px-8 py-3 rounded-2xl font-black uppercase text-sm shadow-neubrutal-sm hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
                >
                  Masak Sekarang
                </Link>
              </div>
            </div>

            {/* Decorative BG element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Sidebar Boxes */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {/* Categories Box */}
            <div className="bg-[#F1F8E9] border-2 border-dark rounded-[40px] p-8 shadow-neubrutal flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-black uppercase tracking-wider text-dark italic">Kategori</h3>
                <Link to="/recipes" className="text-xs font-black underline hover:text-brand-500 transition-colors uppercase">LIHAT SEMUA</Link>
              </div>
              <div className="grid grid-cols-2 gap-4 flex-1">
                {[
                  { label: 'SOTO', emoji: '🥘', color: 'bg-white', hover: 'hover:bg-green-400' },
                  { label: 'SATE', emoji: '🍢', color: 'bg-white', hover: 'hover:bg-orange-400' },
                  { label: 'NASI', emoji: '🍚', color: 'bg-white', hover: 'hover:bg-yellow-400' },
                  { label: 'SAMBAL', emoji: '🌶️', color: 'bg-white', hover: 'hover:bg-red-400' },
                ].map(cat => (
                  <div key={cat.label} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className={cn("w-full h-24 border-2 border-dark rounded-3xl flex items-center justify-center text-4xl shadow-neubrutal-sm group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all", cat.color, cat.hover)}>
                      {cat.emoji}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit CTA Box */}
            <div className="bg-[#E1F5FE] border-2 border-dark rounded-[40px] p-8 shadow-neubrutal flex flex-col items-center text-center">
              <h3 className="font-black uppercase tracking-wider mb-2 text-dark">Submit Resep</h3>
              <p className="text-xs font-bold text-dark/60 mb-6 uppercase tracking-tight">Bagikan warisan kuliner keluargamu!</p>
              <Link to="/submit" className="w-full flex items-center justify-center gap-3 bg-white border-2 border-dark rounded-2xl py-5 font-black hover:bg-blue-50 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all shadow-neubrutal-sm">
                <Plus className="w-6 h-6" />
                UPLOAD SEKARANG
              </Link>
            </div>
          </div>

          {/* Bottom Bento Boxes */}
          {/* Favorites Snippet */}
          <div className="md:col-span-6 bg-white border-2 border-dark rounded-[40px] p-8 shadow-neubrutal overflow-hidden">
            <h3 className="font-black uppercase tracking-wider mb-6 text-dark italic flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 fill-current" /> Favorit Kamu
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {featuredRecipes.slice(0, 3).map(recipe => (
                <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="flex-shrink-0 w-44 group">
                  <div className="w-full h-28 bg-[#F5F5F5] border-2 border-dark rounded-2xl overflow-hidden mb-3 shadow-neubrutal-sm group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all">
                    <img src={recipe.image} className="w-full h-full object-cover" alt={recipe.title} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-tight block truncate uppercase">{recipe.title}</span>
                </Link>
              ))}
              <div className="flex-shrink-0 w-20 h-28 bg-dark border-2 border-dark rounded-2xl flex items-center justify-center text-white shadow-neubrutal-sm cursor-pointer hover:bg-brand-500 transition-colors">
                <ArrowRight className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Shopping List Box */}
          <div className="md:col-span-3 bg-white border-2 border-dark rounded-[40px] p-8 shadow-neubrutal flex flex-col">
            <h3 className="font-black uppercase tracking-wider mb-4 text-dark">Belanja</h3>
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3 p-3 border-2 border-dark rounded-xl bg-orange-100/50">
                <div className="w-5 h-5 border-2 border-dark rounded bg-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-dark rounded-sm"></div>
                </div>
                <span className="text-xs font-black uppercase tracking-tighter opacity-50 line-through">Daging Sapi 1kg</span>
              </div>
              <div className="flex items-center gap-3 p-3 border-2 border-dark rounded-xl">
                <div className="w-5 h-5 border-2 border-dark rounded bg-white"></div>
                <span className="text-xs font-black uppercase tracking-tighter">Santan Kental</span>
              </div>
            </div>
            <button className="mt-6 w-full py-3 bg-dark text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-500 transition-colors">LIHAT SEMUA</button>
          </div>

          {/* Meal Plan Highlight */}
          <div className="md:col-span-3 bg-[#F3E5F5] border-2 border-dark rounded-[40px] p-8 shadow-neubrutal flex flex-col">
            <h3 className="font-black uppercase tracking-wider mb-4 text-dark">Rencana</h3>
            <div className="bg-white border-2 border-dark rounded-2xl p-6 flex-1 flex flex-col items-center justify-center shadow-neubrutal-sm">
              <span className="text-xs font-black text-purple-600 uppercase tracking-widest mb-1">BESOK • RABU</span>
              <span className="font-black text-dark text-center leading-tight uppercase italic">Nasi Liwet Sunda</span>
              <div className="flex items-center gap-2 mt-4 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black text-purple-700 uppercase tracking-tighter">MAKAN MALAM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Stats / Trust Indicators */}
      <section className="bg-brand-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-display font-bold mb-2">500+</div>
              <div className="text-brand-100/80 text-sm italic">Resep Autentik</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">50k+</div>
              <div className="text-brand-100/80 text-sm italic">Keluarga Memasak</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">100+</div>
              <div className="text-brand-100/80 text-sm italic">Chef Nusantara</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">38</div>
              <div className="text-brand-100/80 text-sm italic">Provinsi Terwakili</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">Eksplorasi Kategori</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Dari makanan berat hingga jajanan pasar, temukan apa pun yang ingin Anda masak hari ini.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          <div className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-3xl">
            <img src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2044&auto=format&fit=crop" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" alt="Daging" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">Olahan Daging</h3>
              <p className="text-white/80 text-sm">Gulai, Rendang, dan Semur untuk hidangan istimewa.</p>
            </div>
          </div>
          <div className="col-span-2 relative group cursor-pointer overflow-hidden rounded-3xl">
            <img src="https://images.unsplash.com/photo-1512058560566-42724afbc2aa?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" alt="Nasi" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold text-white mb-1">Nasi & Mie</h3>
            </div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden rounded-3xl">
            <img src="https://images.unsplash.com/photo-1589113337628-34bcaf1b6815?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" alt="Snack" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-lg font-bold text-white">Jajanan</h3>
            </div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden rounded-3xl">
            <img src="https://images.unsplash.com/photo-1621213322194-e0b484501a35?q=80&w=1935&auto=format&fit=crop" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" alt="Minuman" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-lg font-bold text-white">Minuman</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
