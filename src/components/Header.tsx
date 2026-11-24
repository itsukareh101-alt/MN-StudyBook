import { Compass, Globe } from 'lucide-react';
import { AppView, PermitType, Language } from '../types';

interface HeaderProps {
  view: AppView;
  setView: (view: AppView) => void;
  permitType: PermitType;
  language: Language;
  onToggleLanguage: (lang: Language) => void;
}

export default function Header({ view, setView, permitType, language, onToggleLanguage }: HeaderProps) {
  const isEs = language === 'es';

  const getBadgeInfo = () => {
    switch (permitType) {
      case 'motorcycle':
        return {
          text: isEs ? 'Manual Clase M' : 'Class M Manual',
          style: 'bg-amber-600 text-amber-50 border-amber-500'
        };
      case 'classD':
        return {
          text: isEs ? 'Manual Clase D (ES)' : 'Class D Manual',
          style: 'bg-indigo-600 text-indigo-50 border-indigo-500'
        };
      case 'cdl':
        return {
          text: isEs ? 'Manual CDL y TPR' : 'CDL & TPR Manual',
          style: 'bg-emerald-600 text-emerald-50 border-emerald-500'
        };
    }
  };

  const badge = getBadgeInfo();

  return (
    <header id="header" className="bg-blue-900 text-white shadow-md sticky top-0 z-50 px-4 py-3.5 transition-all">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div 
          className="flex items-center gap-3 cursor-pointer group active:scale-98 transition-transform" 
          onClick={() => setView('home')}
        >
          <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-blue-900 font-bold shadow-sm group-hover:bg-blue-50 transition-colors">
            <Compass className="w-5.5 h-5.5 text-blue-900 transition-transform duration-700 ease-out group-hover:rotate-180" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm md:text-md font-display font-medium uppercase tracking-wider text-white font-bold">
                MN-StudyBook
              </h1>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase transition-colors ${badge.style}`}>
                {badge.text}
              </span>
            </div>
            <p className="text-[10px] md:text-xs text-blue-200">
              {isEs ? 'Guía de Práctica para Permiso de Minnesota' : 'Minnesota DMV Permit Practice Companion'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          <nav className="flex items-center gap-1 md:gap-2">
            <button
              onClick={() => setView('home')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                view === 'home' 
                  ? 'bg-blue-950 text-white border border-blue-800 shadow-inner' 
                  : 'text-blue-100 hover:text-white hover:bg-blue-805/80 hover:bg-opacity-80'
              }`}
            >
              {isEs ? 'Centro de Pruebas' : 'Test Center'}
            </button>
            <button
              onClick={() => setView('stats')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                view === 'stats' 
                  ? 'bg-blue-950 text-white border border-blue-800 shadow-inner' 
                  : 'text-blue-100 hover:text-white hover:bg-blue-805/80 hover:bg-opacity-80'
              }`}
            >
              {isEs ? 'Mi Historial' : 'My Record'}
            </button>
            <button
              onClick={() => setView('disclaimer')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                view === 'disclaimer' 
                  ? 'bg-blue-950 text-white border border-blue-800 shadow-inner' 
                  : 'text-blue-100 hover:text-white hover:bg-blue-805/80 hover:bg-opacity-80'
              }`}
            >
              {isEs ? 'Aviso Legal' : 'Legal & Rules'}
            </button>
          </nav>

          {/* Language Toggle */}
          <div 
            role="group" 
            aria-label={isEs ? 'Selector de idioma' : 'Language selector'}
            className="flex items-center bg-blue-950/70 p-0.5 rounded-xl border border-blue-800 shadow-inner"
          >
            <span className="pl-2 pr-1 text-blue-300 hidden sm:inline-flex items-center">
              <Globe className="w-3.5 h-3.5" />
            </span>
            <button
              id="btn-lang-en"
              type="button"
              onClick={() => onToggleLanguage('en')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-blue-900 shadow-sm'
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              id="btn-lang-es"
              type="button"
              onClick={() => onToggleLanguage('es')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
                language === 'es'
                  ? 'bg-white text-blue-900 shadow-sm'
                  : 'text-blue-200 hover:text-white'
              }`}
            >
              Español
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
