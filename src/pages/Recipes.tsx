import { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, Star, Clock, ChefHat, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { MOCK_RECIPES } from '../constants';
import { cn } from '../lib/utils';

const CATEGORIES = ['Semua', 'Daging', 'Nasi', 'Unggas', 'Snack', 'Minuman', 'Soto & Sup'];
const DIFFICULTIES = ['Semua', 'Mudah', 'Sedang', 'Sulit'];

export default function Recipes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Semua');
  const [showFilters, setShowFilters] = useState(false);

  const filteredRecipes = useMemo(() => {
    return MOCK_RECIPES.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.ingredients.some(i => i.item.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'Semua' || recipe.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'Semua' || recipe.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="font-display text-5xl font-black text-dark mb-4 text-center tracking-tighter uppercase italic">Telusuri Resep</h1>
        <p className="text-dark/60 text-center max-w-2xl mx-auto font-bold uppercase text-xs tracking-widest">
          Temukan resep sempurna berdasarkan bahan yang Anda miliki.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="mb-8 flex flex-col md:flex-row gap-6 items-center">
        <div className="relative flex-grow w-full">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-dark w-6 h-6 z-10" />
          <input
            type="text"
            placeholder="Cari berdasarkan nama resep atau bahan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-16 pr-6 py-5 bg-white rounded-full border-2 border-dark focus:outline-none shadow-neubrutal-sm transition-all text-dark font-bold placeholder:text-dark/30"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            "flex items-center gap-2 px-8 py-5 rounded-full border-2 border-dark transition-all font-black uppercase text-sm w-full md:w-auto justify-center shadow-neubrutal-sm hover:translate-x-[-4px] hover:translate-y-[-4px]",
            showFilters ? "bg-brand-500 text-white" : "bg-white text-dark hover:bg-brand-100"
          )}
        >
          {showFilters ? <X className="w-5 h-5" /> : <SlidersHorizontal className="w-5 h-5" />}
          Filter
        </button>
      </div>

      {/* Mobile/Toggleable Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-12 p-8 bg-[#FDFCF8] rounded-[40px] border-2 border-dark shadow-neubrutal overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Categories */}
              <div>
                <h3 className="text-xs font-black text-dark uppercase tracking-[0.2em] mb-6 flex items-center gap-2 italic">
                  <Filter className="w-4 h-4 text-brand-500" /> Kategori
                </h3>
                <div className="flex flex-wrap gap-3">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "px-5 py-2 rounded-xl text-xs font-black transition-all border-2",
                        selectedCategory === cat 
                          ? "bg-dark border-dark text-white shadow-neubrutal-sm translate-x-[-2px] translate-y-[-2px]" 
                          : "bg-white border-dark text-dark hover:bg-brand-50"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <h3 className="text-xs font-black text-dark uppercase tracking-[0.2em] mb-6 flex items-center gap-2 italic">
                  <ChefHat className="w-4 h-4 text-brand-500" /> Kesulitan
                </h3>
                <div className="flex flex-wrap gap-3">
                  {DIFFICULTIES.map(diff => (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={cn(
                        "px-5 py-2 rounded-xl text-xs font-black transition-all border-2",
                        selectedDifficulty === diff 
                          ? "bg-dark border-dark text-white shadow-neubrutal-sm translate-x-[-2px] translate-y-[-2px]" 
                          : "bg-white border-dark text-dark hover:bg-brand-50"
                      )}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats Box */}
              <div className="bg-brand-100 p-8 rounded-[32px] flex flex-col justify-center border-2 border-dark shadow-neubrutal-sm">
                <div className="text-dark/40 text-[10px] mb-1 uppercase font-black tracking-widest italic">Hasil Pencarian</div>
                <div className="text-5xl font-display font-black text-dark">{filteredRecipes.length}</div>
                <div className="text-dark/60 text-[10px] font-bold uppercase mt-2">Resep ditemukan</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              layout
              className="group bg-white rounded-[32px] overflow-hidden border-2 border-dark shadow-neubrutal hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all"
            >
              <Link to={`/recipe/${recipe.id}`} className="block relative h-60 overflow-hidden border-b-2 border-dark">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white border-2 border-dark rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-wider text-dark shadow-neubrutal-sm">
                  {recipe.category}
                </div>
              </Link>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-black text-brand-500 italic">
                    <Star className="w-4 h-4 fill-current" /> {recipe.rating}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-black text-dark/40">
                    {recipe.difficulty}
                  </div>
                </div>
                <h3 className="text-xl font-black text-dark group-hover:text-brand-500 transition-colors line-clamp-1 mb-4 uppercase tracking-tight italic">
                  {recipe.title}
                </h3>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-dark/60">
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {recipe.cookTime} MIN</span>
                  <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
                  <span>{recipe.ingredients.length} BAHAN</span>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <div className="inline-flex p-6 bg-brand-50 rounded-full mb-6">
              <Search className="w-12 h-12 text-brand-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Resep tidak ditemukan</h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Maaf, kami tidak menemukan resep yang cocok dengan kata kunci atau filter Anda. Coba kata kunci lain!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
