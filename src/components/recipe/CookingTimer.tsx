import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CookingTimerProps {
  initialMinutes: number;
}

export default function CookingTimer({ initialMinutes }: CookingTimerProps) {
  const [seconds, setSeconds] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      // Could add a notification sound here
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setSeconds(initialMinutes * 60);
    setIsActive(false);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-brand-50 border border-brand-100 rounded-3xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4 text-brand-700 font-bold uppercase tracking-wider text-xs">
        <Timer className="w-5 h-5" /> Pengatur Waktu Masak
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-4xl font-mono font-bold text-slate-900 tracking-tighter">
          {formatTime(seconds)}
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={toggle}
            className={cn(
              "p-3 rounded-xl transition-all shadow-lg shadow-brand-200",
              isActive ? "bg-slate-800 text-white" : "bg-brand-600 text-white hover:bg-brand-700"
            )}
          >
            {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button
            onClick={reset}
            className="p-3 bg-white text-slate-600 rounded-xl border border-brand-100 hover:bg-brand-50 transition-all shadow-sm"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
