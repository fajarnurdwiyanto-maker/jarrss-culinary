import { useState } from 'react';
import { ChefHat, Plus, Trash2, Image as ImageIcon, CheckCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function SubmitRecipe() {
  const [submitted, setSubmitted] = useState(false);
  const [ingredients, setIngredients] = useState([{ item: '', amount: '', unit: '' }]);
  const [steps, setSteps] = useState(['']);

  const addIngredient = () => setIngredients([...ingredients, { item: '', amount: '', unit: '' }]);
  const removeIngredient = (idx: number) => setIngredients(ingredients.filter((_, i) => i !== idx));
  
  const addStep = () => setSteps([...steps, '']);
  const removeStep = (idx: number) => setSteps(steps.filter((_, i) => i !== idx));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex p-6 bg-green-100 rounded-full mb-8 text-green-600"
        >
          <CheckCircle className="w-16 h-16" />
        </motion.div>
        <h1 className="font-display text-4xl font-bold text-slate-900 mb-4">Resep Berhasil Terkirim!</h1>
        <p className="text-slate-600 mb-10 text-lg">
          Terima kasih telah berbagi cita rasa Nusantara. Tim kami akan meninjau resep Anda sebelum dipublikasikan.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20"
        >
          Kirim Resep Lain
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-display text-4xl font-bold text-slate-900 mb-4">Berbagi Resep Nusantara</h1>
        <p className="text-slate-600">Teruskan warisan kuliner keluarga Anda ke generasi berikutnya.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12 bg-white p-8 md:p-12 rounded-3xl border border-brand-100 shadow-xl">
        {/* Basic Info */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-brand-50 pb-4">
            <Info className="w-5 h-5 text-brand-600" /> Informasi Dasar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Judul Resep</label>
              <input 
                required
                type="text" 
                placeholder="Contoh: Ayam Betutu Gilimanuk"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Kategori</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand-500/10 outline-none">
                <option>Daging</option>
                <option>Nasi</option>
                <option>Unggas</option>
                <option>Snack</option>
                <option>Minuman</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Deskripsi Singkat</label>
            <textarea 
              rows={3}
              placeholder="Ceritakan sejarah singkat resep ini atau keunikannya..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand-500/10 outline-none"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Waktu Masak (min)</label>
              <input type="number" placeholder="30" className="w-full px-4 py-3 rounded-xl border border-slate-200" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Porsi</label>
              <input type="number" placeholder="4" className="w-full px-4 py-3 rounded-xl border border-slate-200" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Kesulitan</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200">
                <option>Mudah</option>
                <option>Sedang</option>
                <option>Sulit</option>
              </select>
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-brand-50 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Plus className="w-5 h-5 text-brand-600" /> Bahan-bahan
            </h2>
            <button 
              type="button" 
              onClick={addIngredient}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 bg-brand-50 px-3 py-1 rounded-full flex items-center gap-1"
            >
              <Plus className="w-3 h-3" /> Tambah Bahan
            </button>
          </div>
          <div className="space-y-4">
            {ingredients.map((ing, idx) => (
              <div key={idx} className="flex gap-4 items-end">
                <div className="flex-grow space-y-2">
                  <input placeholder="Nama Bahan" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50" />
                </div>
                <div className="w-24 space-y-2">
                  <input placeholder="Jumlah" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50" />
                </div>
                <div className="w-24 space-y-2">
                  <input placeholder="Satuan" className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50" />
                </div>
                {ingredients.length > 1 && (
                  <button type="button" onClick={() => removeIngredient(idx)} className="p-3 text-red-400 hover:text-red-600 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-brand-50 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-brand-600" /> Langkah-langkah
            </h2>
            <button 
              type="button" 
              onClick={addStep}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 bg-brand-50 px-3 py-1 rounded-full flex items-center gap-1"
            >
              <Plus className="w-3 h-3" /> Tambah Langkah
            </button>
          </div>
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <div className="flex-grow">
                  <textarea 
                    rows={2} 
                    placeholder="Jelaskan langkah ini secara mendetail..." 
                    className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white transition-colors"
                  />
                </div>
                {steps.length > 1 && (
                  <button type="button" onClick={() => removeStep(idx)} className="p-2 text-slate-300 hover:text-red-500 transition-colors h-fit">
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Photo Upload Placeholder */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-brand-600" /> Foto Masakan
          </h2>
          <div className="border-4 border-dashed border-brand-50 rounded-3xl p-12 text-center hover:border-brand-100 transition-colors cursor-pointer group">
            <div className="mx-auto w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-4 text-brand-400 group-hover:text-brand-600 transition-colors">
              <ImageIcon className="w-8 h-8" />
            </div>
            <p className="text-slate-500 font-medium">Klik atau geser foto ke sini untuk mengunggah</p>
            <p className="text-xs text-slate-400 mt-2">Maksimal 5MB, format JPG atau PNG</p>
          </div>
        </section>

        <button 
          type="submit"
          className="w-full py-5 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-bold text-xl shadow-xl shadow-brand-600/30 transition-all transform hover:-translate-y-1 active:scale-95"
        >
          Publikasikan Resep
        </button>
      </form>
    </div>
  );
}
