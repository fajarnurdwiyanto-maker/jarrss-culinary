import { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Utensils, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MOCK_RECIPES } from '../constants';
import { cn } from '../lib/utils';

const DAYS = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
const MEALS = ['Sarapan', 'Makan Siang', 'Makan Malam'];

export default function MealPlanner() {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  
  // Fake state for planner
  const [plan, setPlan] = useState<{ [day: string]: { [meal: string]: string | null } }>({
    'Senin': { 'Sarapan': 'nasgor-001', 'Makan Siang': null, 'Makan Malam': 'rendang-001' },
    'Selasa': { 'Sarapan': null, 'Makan Siang': 'sate-001', 'Makan Malam': null },
  });

  const getRecipe = (id: string | null) => MOCK_RECIPES.find(r => r.id === id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-display text-4xl font-bold text-slate-900 mb-2">Meal Planner</h1>
          <p className="text-slate-600">Rencanakan hidangan mingguan Anda untuk diet yang lebih teratur.</p>
        </div>
        
        <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-brand-100 shadow-sm">
          <button className="p-2 hover:bg-brand-50 rounded-xl transition-colors"><ChevronLeft className="w-5 h-5 text-slate-600" /></button>
          <span className="font-bold text-slate-900 px-4">Minggu ini, 11 - 17 Mei</span>
          <button className="p-2 hover:bg-brand-50 rounded-xl transition-colors"><ChevronRight className="w-5 h-5 text-slate-600" /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {DAYS.map((day) => (
          <div key={day} className="flex flex-col gap-4">
            <div className="bg-slate-900 text-white rounded-2xl p-4 text-center">
              <span className="font-bold text-sm tracking-widest uppercase">{day}</span>
            </div>
            
            <div className="space-y-3">
              {MEALS.map((meal) => {
                const recipeId = plan[day]?.[meal];
                const recipe = getRecipe(recipeId || null);

                return (
                  <div 
                    key={meal}
                    className={cn(
                      "group relative rounded-2xl border-2 transition-all p-4 min-h-[140px] flex flex-col gap-2",
                      recipe 
                        ? "bg-white border-brand-100 shadow-sm hover:shadow-md" 
                        : "bg-brand-50/50 border-dashed border-brand-100 hover:bg-brand-50"
                    )}
                  >
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                      {meal}
                    </div>
                    
                    {recipe ? (
                      <div className="flex flex-col h-full">
                        <Link to={`/recipe/${recipe.id}`} className="block flex-grow">
                          <img 
                            src={recipe.image} 
                            alt={recipe.title}
                            className="w-full h-20 object-cover rounded-xl mb-2 grayscale group-hover:grayscale-0 transition-all"
                          />
                          <h4 className="text-sm font-bold text-slate-900 leading-tight line-clamp-2 italic">
                            {recipe.title}
                          </h4>
                        </Link>
                        <button className="mt-2 text-[10px] font-bold text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">Hapus</button>
                      </div>
                    ) : (
                      <div className="flex-grow flex flex-col items-center justify-center text-center">
                        <Plus className="w-6 h-6 text-brand-200 mb-1" />
                        <span className="text-[10px] font-bold text-brand-300 uppercase">Tambah</span>
                        <Link 
                          to="/recipes" 
                          className="absolute inset-0 z-10"
                          aria-label={`Tambah ${meal} untuk hari ${day}`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-3xl p-8 border border-brand-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
        <div className="bg-brand-600 p-4 rounded-full text-white shadow-lg shadow-brand-600/30">
          <Info className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-1 italic">Tips Perencanaan Makan</h3>
          <p className="text-slate-600 max-w-2xl">
            Menyusun rencana makan mingguan membantu Anda berhemat, mengurangi limbah makanan, dan memastikan keluarga mendapatkan asupan gizi yang seimbang setiap hari.
          </p>
        </div>
        <button className="bg-brand-50 text-brand-700 px-6 py-3 rounded-xl font-bold border border-brand-100 hover:bg-brand-100 transition-all ml-auto">
          Unduh Daftar Belanja
        </button>
      </div>
    </div>
  );
}
