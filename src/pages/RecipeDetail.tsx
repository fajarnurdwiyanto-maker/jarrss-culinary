import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, ChefHat, Users, Heart, Share2, Star, 
  ChevronRight, CheckCircle2, ShoppingCart, 
  Printer, MessageSquare, Info, Timer 
} from 'lucide-react';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { MOCK_RECIPES } from '../constants';
import CookingTimer from '../components/recipe/CookingTimer';
import { cn } from '../lib/utils';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = MOCK_RECIPES.find(r => r.id === id);
  const [saved, setSaved] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  if (!recipe) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Resep tidak ditemukan.</h1>
        <Link to="/recipes" className="text-brand-600 mt-4 inline-block font-semibold">Kembali ke daftar resep</Link>
      </div>
    );
  }

  const toggleIngredient = (item: string) => {
    setCheckedIngredients(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href,
      });
    } else {
      alert('Tautan disalin ke papan klip!');
    }
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="relative h-[65vh] overflow-hidden border-b-4 border-dark group">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-dark/40" />
        <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex justify-center flex-wrap gap-4 mb-8"
            >
              <span className="bg-brand-500 text-white border-2 border-dark px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-neubrutal-sm">
                {recipe.category}
              </span>
              <span className="bg-white text-dark border-2 border-dark px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-neubrutal-sm">
                {recipe.difficulty}
              </span>
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]"
            >
              {recipe.title}
            </motion.h1>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center items-center gap-10"
            >
              <div className="flex items-center gap-3 text-white font-black uppercase text-sm tracking-widest">
                <Clock className="w-8 h-8 text-brand-500" /> {recipe.cookTime + recipe.prepTime} MIN
              </div>
              <div className="flex items-center gap-3 text-white font-black uppercase text-sm tracking-widest">
                <Users className="w-8 h-8 text-success" /> {recipe.servings} PORSI
              </div>
              <div className="flex items-center gap-3 text-white font-black uppercase text-sm tracking-widest">
                <Star className="w-8 h-8 text-yellow-400 fill-current" /> {recipe.rating}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Description Box */}
            <div className="bg-brand-100 border-2 border-dark rounded-[40 px] p-10 shadow-neubrutal">
              <h3 className="font-black uppercase tracking-widest mb-4 text-dark/40 text-xs italic">Tentang Resep</h3>
              <p className="text-2xl font-bold text-dark leading-relaxed italic">
                "{recipe.description}"
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-white rounded-[32px] border-2 border-dark shadow-neubrutal">
              <div className="flex gap-4">
                <button 
                  onClick={() => setSaved(!saved)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 rounded-2xl transition-all border-2 border-dark font-black text-xs uppercase tracking-widest shadow-neubrutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px]",
                    saved ? "bg-red-500 text-white" : "bg-white text-dark hover:bg-brand-50"
                  )}
                >
                  <Heart className={cn("w-5 h-5", saved && "fill-current")} />
                  {saved ? 'TERSAMPAN' : 'SIMPAN RESEP'}
                </button>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-3 px-6 py-4 bg-white border-2 border-dark rounded-2xl font-black text-xs uppercase tracking-widest shadow-neubrutal-sm hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
                >
                  <Share2 className="w-5 h-5" /> BAGIKAN
                </button>
              </div>
              <button 
                onClick={() => window.print()}
                className="w-12 h-12 border-2 border-dark rounded-xl flex items-center justify-center hover:bg-dark hover:text-white transition-all shadow-neubrutal-sm"
              >
                <Printer className="w-6 h-6" />
              </button>
            </div>

            {/* Ingredients */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-4xl font-black text-dark flex items-center gap-4 uppercase tracking-tighter italic">
                  <ShoppingCart className="w-10 h-10 text-brand-500" /> Bahan-bahan
                </h2>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] bg-white border-2 border-dark px-6 py-2 rounded-full shadow-neubrutal-sm">
                  {checkedIngredients.length} / {recipe.ingredients.length} DIPILIH
                </div>
              </div>
              <div className="bg-[#FDFCF8] rounded-[40px] border-2 border-dark p-10 shadow-neubrutal">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {recipe.ingredients.map((ing, idx) => (
                    <div 
                      key={idx}
                      onClick={() => toggleIngredient(ing.item)}
                      className={cn(
                        "flex items-center justify-between p-6 rounded-3xl border-2 cursor-pointer transition-all shadow-neubrutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px]",
                        checkedIngredients.includes(ing.item) 
                          ? "bg-dark/5 border-dark/20 opacity-50 grayscale" 
                          : "bg-white border-dark hover:bg-brand-50"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-6 h-6 border-2 border-dark rounded-lg flex items-center justify-center",
                          checkedIngredients.includes(ing.item) ? "bg-dark" : "bg-white"
                        )}>
                          {checkedIngredients.includes(ing.item) && <div className="w-2 h-2 bg-white rounded-sm" />}
                        </div>
                        <span className={cn("text-sm font-black uppercase tracking-tight", checkedIngredients.includes(ing.item) && "line-through")}>{ing.item}</span>
                      </div>
                      <span className="text-white font-black bg-brand-500 border-2 border-dark px-3 py-1 rounded-xl text-[10px] shadow-neubrutal-sm">
                        {ing.amount} {ing.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Instructions */}
            <section>
              <h2 className="font-display text-4xl font-black text-dark mb-10 flex items-center gap-4 uppercase tracking-tighter italic">
                <ChefHat className="w-10 h-10 text-success" /> Langkah Masak
              </h2>
              <div className="space-y-10">
                {recipe.instructions.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-8 group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-dark rounded-[24px] flex items-center justify-center font-display text-3xl font-black text-dark shadow-neubrutal-sm group-hover:bg-brand-500 group-hover:text-white transition-all transform group-hover:rotate-6">
                      {idx + 1}
                    </div>
                    <div className="flex-grow pt-4">
                      <div className="text-xl font-bold text-dark leading-relaxed pb-8 border-b-2 border-dark/10 tracking-tight">
                        {step}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Timer Widget */}
            <div className="hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all">
              <CookingTimer initialMinutes={recipe.cookTime} />
            </div>

            {/* Nutrition Box */}
            <div className="bg-white rounded-[40px] border-2 border-dark p-10 shadow-neubrutal">
              <h3 className="font-black uppercase tracking-[0.2em] mb-10 text-dark text-xs italic flex items-center gap-3">
                <Info className="w-6 h-6 text-brand-500" /> Informasi Gizi
              </h3>
              {recipe.nutrition ? (
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { val: recipe.nutrition.calories, label: 'KALORI', bg: 'bg-brand-100' },
                    { val: recipe.nutrition.protein + 'g', label: 'PROTEIN', bg: 'bg-blue-100' },
                    { val: recipe.nutrition.carbs + 'g', label: 'KARBO', bg: 'bg-yellow-100' },
                    { val: recipe.nutrition.fat + 'g', label: 'LEMAK', bg: 'bg-green-100' },
                  ].map((nut, i) => (
                    <div key={i} className={cn("p-6 border-2 border-dark rounded-[32px] text-center shadow-neubrutal-sm", nut.bg)}>
                      <div className="text-2xl font-black text-dark">{nut.val}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-dark/40 mt-1">{nut.label}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-dark/50 text-xs font-bold uppercase italic">Data tidak tersedia.</p>
              )}
            </div>

            {/* Chef Info */}
            <div className="bg-dark rounded-[40px] border-2 border-dark p-10 text-white shadow-neubrutal">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-20 h-20 bg-brand-500 border-2 border-white rounded-[32px] flex items-center justify-center font-display text-4xl font-black rotate-3 shadow-neubrutal-sm">
                  {recipe.authorName[0]}
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase font-black tracking-widest italic mb-1">Resep Oleh</div>
                  <div className="text-2xl font-black uppercase tracking-tight italic">{recipe.authorName}</div>
                </div>
              </div>
              <button className="w-full py-5 bg-white text-dark border-2 border-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-brand-500 hover:text-white transition-all shadow-neubrutal-sm">
                SEMUA RESEP CHEF
              </button>
            </div>
            
            {/* Community Section */}
            <div className="bg-brand-500 rounded-[40px] border-2 border-dark p-10 text-white shadow-neubrutal">
              <h3 className="font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-3 text-xs italic">
                <MessageSquare className="w-6 h-6" /> Komunitas
              </h3>
              <p className="font-bold text-white mb-10 leading-relaxed uppercase text-xs tracking-wider">
                Punya pertanyaan? Bagikan ulasanmu di sini!
              </p>
              <button className="w-full py-5 bg-white text-dark border-2 border-dark rounded-2xl font-black uppercase text-xs tracking-widest shadow-neubrutal-sm hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all">
                TULIS ULASAN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
