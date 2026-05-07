import { UtensilsCrossed, Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-50 border-t-2 border-dark text-dark mt-20">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-500 border-2 border-dark rounded-xl flex items-center justify-center text-white shadow-neubrutal-sm">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <span className="font-display text-2xl font-black text-dark tracking-tighter uppercase">
                Rasa<span className="text-brand-500">Nusantara</span>
              </span>
            </Link>
            <p className="text-xs font-bold uppercase tracking-widest leading-loose text-dark/60">
              Membawa cita rasa tradisional Indonesia ke dapur modern Anda. Autentik dari Sabang sampai Merauke.
            </p>
            <div className="flex space-x-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border-2 border-dark rounded-xl flex items-center justify-center hover:bg-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neubrutal-sm transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black uppercase tracking-[0.2em] mb-8 text-dark text-sm italic">Navigasi</h3>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest">
              <li><Link to="/recipes" className="hover:text-brand-500 transition-colors">Cari Resep</Link></li>
              <li><Link to="/planner" className="hover:text-brand-500 transition-colors">Meal Planner</Link></li>
              <li><Link to="/submit" className="hover:text-brand-500 transition-colors">Kirim Resep</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-500 transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black uppercase tracking-[0.2em] mb-8 text-dark text-sm italic">Populer</h3>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest">
              <li><Link to="/recipes?category=Daging" className="hover:text-brand-500 transition-colors">Olahan Daging</Link></li>
              <li><Link to="/recipes?category=Nasi" className="hover:text-brand-500 transition-colors">Nasi & Mie</Link></li>
              <li><Link to="/recipes?category=Snack" className="hover:text-brand-500 transition-colors">Jajanan Pasar</Link></li>
              <li><Link to="/recipes?category=Minuman" className="hover:text-brand-500 transition-colors">Minuman Tradisional</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black uppercase tracking-[0.2em] mb-8 text-dark text-sm italic">Newsletter</h3>
            <p className="text-xs font-bold uppercase tracking-widest mb-6 text-dark/60">Dapatkan update resep terbaru.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ANDA"
                className="w-full bg-white border-2 border-dark rounded-xl px-4 py-4 text-xs font-black uppercase tracking-widest focus:outline-none shadow-neubrutal-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-500 text-white px-4 rounded-lg border-2 border-dark hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-neubrutal-sm transition-all">
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t-2 border-dark/10 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-dark/40 italic">© 2026 RasaNusantara • Dibuat dengan rempah asli Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
