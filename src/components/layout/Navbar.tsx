import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed, Calendar, User, Heart, PlusCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils'; // I will create this utility

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Cari Resep', href: '/recipes', icon: Search },
    { name: 'Meal Planner', href: '/planner', icon: Calendar },
    { name: 'Makananku', href: '/favorites', icon: Heart },
    { name: 'Bagi Resep', href: '/submit', icon: PlusCircle },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-50 border-b-2 border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-500 border-2 border-dark rounded-xl flex items-center justify-center text-white shadow-neubrutal-sm">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <span className="font-display text-2xl font-black text-dark tracking-tighter uppercase">
                Rasa<span className="text-brand-500">Nusantara</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all border-2 border-transparent",
                  location.pathname === link.href
                    ? "bg-white border-dark text-dark shadow-neubrutal-sm translate-x-[-2px] translate-y-[-2px]"
                    : "text-dark/60 hover:text-dark hover:bg-white hover:border-dark hover:shadow-neubrutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px]"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/profile"
              className="ml-4 w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center bg-success text-white font-bold shadow-neubrutal-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              RN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-brand-600 hover:bg-brand-50"
              id="mobile-menu-button"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3",
                    location.pathname === link.href
                      ? "bg-brand-100 text-brand-700"
                      : "text-slate-600 hover:text-brand-600 hover:bg-brand-50"
                  )}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              ))}
              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3 text-slate-600 hover:text-brand-600 hover:bg-brand-50"
              >
                <User className="w-5 h-5" />
                Profil Saya
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
