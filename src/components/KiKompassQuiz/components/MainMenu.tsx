import React from 'react';
import { QuizMode } from '../types';
import { Compass, Brain, Trophy, Activity, Scale, Shield, ArrowRight } from 'lucide-react';

interface MainMenuProps {
  onSelectMode: (mode: QuizMode) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onSelectMode }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-6 py-12 font-sans">
      
      {/* HEADER SECTION */}
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center justify-center p-5 bg-[#DC2626]/10 rounded-full mb-8 ring-1 ring-[#DC2626]/30 shadow-[0_0_30px_rgba(220,38,38,0.2)] backdrop-blur-sm">
          <Compass className="w-16 h-16 text-[#DC2626]" />
        </div>
        
        <h2 className="text-xs md:text-sm font-bold text-[#DC2626] uppercase tracking-[0.3em] mb-4">
          KI KOMPASS VIENNA
        </h2>
        
        <h1 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
          Der strategische <br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">KI-Check</span> für <br className="hidden md:block"/> Geschäftsführung.
        </h1>
        
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Ermittle deinen KI-Reifegrad, prüfe deine Compliance-Fitness <br className="hidden md:block"/> und identifiziere Potenziale für dein Unternehmen.
        </p>
      </div>

      {/* MAIN GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
        
        {/* 1. KI STATUS TEST (Qualification) */}
        <button
          onClick={() => onSelectMode(QuizMode.STATUS_INTRO)}
          className="group relative bg-[#11284b]/80 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-[#DC2626] transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] text-left flex flex-col h-full hover:-translate-y-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div className="absolute top-0 right-0 bg-[#DC2626] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-lg">Start</div>
          
          <div className="w-14 h-14 bg-[#0B1F3F] rounded-xl flex items-center justify-center mb-6 border border-white/10 text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-all duration-300 shadow-inner">
            <Activity className="w-7 h-7" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#DC2626] transition-colors">KI Status Test</h3>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow border-l-2 border-white/10 pl-4 group-hover:border-[#DC2626] transition-colors">
            Wo steht dein Unternehmen wirklich? Beantworte 11 Fragen zu Strategie, Team und Sicherheit.
          </p>
          
          <div className="mt-auto flex items-center text-[#DC2626] font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors bg-[#DC2626]/10 group-hover:bg-[#DC2626] py-3 px-4 rounded-lg w-fit">
            Status ermitteln <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </button>

        {/* 2. LERNMODUS (Training) */}
        <button
          onClick={() => onSelectMode(QuizMode.TRAINING_SETUP)}
          className="group relative bg-[#11284b]/80 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(96,165,250,0.15)] text-left flex flex-col h-full hover:-translate-y-2"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          
          <div className="w-14 h-14 bg-[#0B1F3F] rounded-xl flex items-center justify-center mb-6 border border-white/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-inner">
            <Brain className="w-7 h-7" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Lernmodus</h3>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow border-l-2 border-white/10 pl-4 group-hover:border-blue-400 transition-colors">
            Gezieltes Training in 8 Kernbereichen: Von Prompting-Strategien bis zu Business-Tools.
          </p>
          
          <div className="mt-auto flex items-center text-blue-400 font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors bg-blue-500/10 group-hover:bg-blue-500 py-3 px-4 rounded-lg w-fit">
            Training starten <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </button>

        {/* 3. PROFI CHALLENGE */}
        <button
          onClick={() => onSelectMode(QuizMode.CHALLENGE_INTRO)}
          className="group relative bg-[#11284b]/80 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-amber-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] text-left flex flex-col h-full hover:-translate-y-2"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          
           <div className="w-14 h-14 bg-[#0B1F3F] rounded-xl flex items-center justify-center mb-6 border border-white/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-inner">
            <Trophy className="w-7 h-7" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">Expert Challenge</h3>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow border-l-2 border-white/10 pl-4 group-hover:border-amber-500 transition-colors">
            Harte Fakten unter Zeitdruck. Teste dein Expertenwissen auf höchstem Niveau.
          </p>
          
          <div className="mt-auto flex items-center text-amber-500 font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors bg-amber-500/10 group-hover:bg-amber-500 py-3 px-4 rounded-lg w-fit">
            Challenge annehmen <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </button>

      </div>

      {/* AI ACT SPECIAL SECTION */}
      <div className="w-full border-t border-white/5 pt-12 relative">
        <div className="flex items-center justify-center gap-4 mb-10 opacity-80">
            <div className="h-px bg-gradient-to-r from-transparent to-[#DC2626] w-24"></div>
            <h3 className="text-center text-slate-300 text-xs font-bold uppercase tracking-[0.3em] px-4 py-2 bg-[#0B1F3F] rounded border border-white/10">EU AI Act Spezial</h3>
            <div className="h-px bg-gradient-to-l from-transparent to-[#DC2626] w-24"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* 4. AI ACT LERNEN */}
          <button
            onClick={() => onSelectMode(QuizMode.AIACT_LEARNING)}
            className="group relative bg-[#0B1F3F]/50 p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-[#0f2b57] text-left flex items-center gap-6 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="w-14 h-14 bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-400 flex-shrink-0 border border-purple-500/20 group-hover:scale-110 transition-transform">
              <Scale className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Compliance Wissen</h3>
              <p className="text-slate-400 text-sm">Risikoklassen, Pflichten & Fristen verstehen.</p>
            </div>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
              <ArrowRight className="w-5 h-5 text-purple-400" />
            </div>
          </button>

          {/* 5. AI ACT CHALLENGE */}
          <button
            onClick={() => onSelectMode(QuizMode.AIACT_CHALLENGE)}
            className="group relative bg-[#0B1F3F]/50 p-6 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:bg-[#0f2b57] text-left flex items-center gap-6 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="w-14 h-14 bg-red-900/20 rounded-xl flex items-center justify-center text-red-500 flex-shrink-0 border border-red-500/20 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">Rechtssicherheit Prüfung</h3>
              <p className="text-slate-400 text-sm">Teste dein Wissen zur EU-Verordnung.</p>
            </div>
             <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
              <ArrowRight className="w-5 h-5 text-red-500" />
            </div>
          </button>

        </div>
      </div>
    </div>
  );
};

export default MainMenu;