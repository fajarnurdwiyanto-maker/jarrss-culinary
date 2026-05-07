import { useState } from 'react';
import { User, Settings, Heart, History, LogOut, ChevronRight, Star, Clock, ChefHat } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MOCK_RECIPES } from '../constants';
import { cn } from '../lib/utils';

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const savedRecipes = MOCK_RECIPES.slice(0, 2);

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <div className="bg-white p-8 rounded-3xl border border-brand-100 shadow-xl text-center">
          <div className="inline-flex p-4 bg-brand-50 rounded-full mb-6">
            <User className="w-12 h-12 text-brand-600" />
          </div>
          <h1 className="font-display text-4xl font-bold text-slate-900 mb-4">Masuk Akun</h1>
          <p className="text-slate-600 mb-8">Simpan resep favorit Anda dan rancang meal planner pribadi dengan akun RasaNusantara.</p>
          
          <div className="space-y-4">
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm"
            >
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
              Lanjut dengan Google
            </button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400">Atau</span></div>
            </div>
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="w-full py-4 bg-brand-600 text-white rounded-2xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30"
            >
              Daftar / Masuk
            </button>
          </div>
          <p className="mt-8 text-xs text-slate-400">
            Dengan melanjutkan, Anda menyetujui Ketentuan Layanan dan Kebijakan Privasi kami.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-4">
          <div className="bg-white p-8 rounded-3xl border border-brand-100 shadow-sm text-center">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-brand-600 rounded-full flex items-center justify-center font-display text-3xl font-bold text-white border-4 border-white shadow-lg">
                F
              </div>
              <button className="absolute bottom-0 right-0 p-1.5 bg-white rounded-full shadow-md border border-slate-100">
                <Settings className="w-4 h-4 text-slate-400" />
              </button>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Fajar Nur</h2>
            <p className="text-sm text-slate-500 mb-6">Penjelajah Rasa Sejak 2026</p>
            <button className="flex items-center justify-center gap-2 text-sm font-bold text-red-500 hover:text-red-600 w-full pt-4 border-t border-slate-50">
              <LogOut className="w-4 h-4" /> Keluar Akun
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-brand-100 shadow-sm p-4 space-y-1">
            {[
              { label: 'Resep Tersimpan', icon: Heart, count: 12 },
              { label: 'Aktivitas Memasak', icon: History, count: 45 },
              { label: 'Pengaturan Diet', icon: Settings, count: null },
            ].map((item, idx) => (
              <button key={idx} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-brand-50 transition-all text-slate-700 hover:text-brand-700">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-bold text-sm">{item.label}</span>
                </div>
                {item.count && <span className="bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full text-[10px] font-bold">{item.count}</span>}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Resep Simpan', val: '12' },
              { label: 'Total Ulasan', val: '5' },
              { label: 'Pengikut', val: '128' },
              { label: 'Poin Koki', val: '450' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-brand-100 text-center shadow-sm">
                <div className="text-2xl font-bold text-brand-600">{stat.val}</div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-sans">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Saved Recipes */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display text-2xl font-bold text-slate-900 flex items-center gap-2 italic">
                <Heart className="w-6 h-6 text-brand-600 fill-current" /> Favorit Saya
              </h3>
              <Link to="/recipes" className="text-brand-600 font-bold text-sm flex items-center gap-1">
                Lihat Semua <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedRecipes.map((recipe) => (
                <Link 
                  key={recipe.id} 
                  to={`/recipe/${recipe.id}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-100 flex h-36 hover:shadow-md transition-all"
                >
                  <div className="w-1/3 overflow-hidden">
                    <img src={recipe.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={recipe.title} />
                  </div>
                  <div className="w-2/3 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-[10px] text-brand-600 font-bold mb-1">
                        <Star className="w-3 h-3 fill-current" /> {recipe.rating}
                      </div>
                      <h4 className="font-bold text-slate-900 line-clamp-1">{recipe.title}</h4>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {recipe.cookTime} m</span>
                      <span className="flex items-center gap-1 uppercase">{recipe.difficulty}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Cooking Streak / Gamification */}
          <section className="bg-brand-600 rounded-3xl p-10 text-white relative overflow-hidden shadow-xl shadow-brand-600/20">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30">
                <ChefHat className="w-12 h-12 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Tingkatkan Level Koki Anda!</h3>
                <p className="text-brand-100 leading-relaxed max-w-lg mb-6">
                  Selamat! Anda telah memasak 5 resep baru bulan ini. Masak 2 resep lagi untuk mendapatkan badge <span className="text-white font-bold italic">"Ahli Tumis"</span>.
                </p>
                <div className="w-full bg-white/10 rounded-full h-3 mb-2 overflow-hidden border border-white/10">
                  <div className="bg-white h-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-white/70">
                  <span>Level 5</span>
                  <span>7/10 Resep</span>
                </div>
              </div>
            </div>
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full -ml-10 -mb-10 blur-2xl"></div>
          </section>
        </div>
      </div>
    </div>
  );
}
