import React, { useEffect, useState } from 'react';
import { QuizMode, FitnessLevel } from '../types';
import { analyzeFitnessResult } from '../services/geminiService';
import { Trophy, TrendingUp, Award, CalendarCheck, BookOpen, Home } from 'lucide-react';

interface ResultsViewProps {
  score: number;
  total: number;
  mode: QuizMode;
  answers: any[];
  onHome: () => void;
  onRetry: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ score, total, mode, answers, onHome, onRetry }) => {
  const [analysis, setAnalysis] = useState<{ level: FitnessLevel; text: string } | null>(null);

  useEffect(() => {
    if (mode === QuizMode.STATUS) {
      analyzeFitnessResult(score, total, answers).then((res) => {
        setAnalysis(res);
      });
    }
  }, [mode, score, total, answers]);

  const getStatusBadge = (level: FitnessLevel) => {
    const levels = {
      1: { title: "KI-Neuling", desc: "Digitales Fundament aufbauen", color: "text-slate-300", bg: "bg-slate-800" },
      2: { title: "Anwender", desc: "Erste Tools im Einsatz", color: "text-blue-300", bg: "bg-blue-900/40" },
      3: { title: "Professional", desc: "Effiziente Nutzung etabliert", color: "text-indigo-300", bg: "bg-indigo-900/40" },
      4: { title: "Experte", desc: "Hohe Compliance & Sicherheit", color: "text-[#DC2626]", bg: "bg-red-900/30" },
      5: { title: "Strategist", desc: "Orchestrator & Visionär", color: "text-emerald-300", bg: "bg-emerald-900/30" }
    };
    // @ts-ignore
    const current = levels[level] || levels[1];
    
    return (
      <div className={`p-8 rounded-xl ${current.bg} border border-white/10 mb-8 w-full animate-fade-in`}>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-[#0B1F3F] rounded-full mb-4 ring-1 ring-white/10">
            <TrendingUp className={`w-10 h-10 ${current.color}`} />
          </div>
          <span className="text-slate-400 text-xs uppercase tracking-[0.2em] font-bold mb-2">Dein KI-Reifegrad</span>
          <h2 className={`text-4xl font-black text-white mb-1`}>{current.title}</h2>
          <p className={`${current.color} font-medium text-sm`}>{current.desc}</p>
        </div>
      </div>
    );
  };

  const handleConsultingClick = () => {
    const levelName = analysis ? FitnessLevel[analysis.level] : 'Unbekannt';
    const tallyUrl = `https://tally.so/r/Y5PdoB?score=${score}&max=${total}&level=${levelName}`;
    window.open(tallyUrl, '_blank');
  };

  const handleBookDownload = () => {
    alert("Hier würde der Download des Buches 'Der ultimative KI-Kompass' starten.");
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 animate-fade-in">
      
      {/* CARD */}
      <div className="bg-[#11284b] rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC2626]/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32"></div>

        <div className="relative z-10 text-center">
          
          {mode === QuizMode.CHALLENGE || mode === QuizMode.AIACT_CHALLENGE ? (
             <div className="mb-6 inline-flex p-4 bg-[#0B1F3F] rounded-2xl border border-white/10 shadow-lg">
                <Trophy className="w-12 h-12 text-amber-500" />
             </div>
          ) : (
             <div className="mb-6 inline-flex p-4 bg-[#0B1F3F] rounded-2xl border border-white/10 shadow-lg">
                <Award className="w-12 h-12 text-[#DC2626]" />
             </div>
          )}

          <h1 className="text-2xl font-bold text-white mb-2">Analyse abgeschlossen</h1>
          <p className="text-slate-400 text-sm mb-10">Vielen Dank für deine Teilnahme am KI Kompass Test.</p>
          
          {mode !== QuizMode.STATUS && (
              <div className="flex flex-col items-center justify-center mb-10">
                <div className="text-7xl font-black text-white tracking-tighter">
                  {score}<span className="text-3xl text-slate-500 font-medium">/{total}</span>
                </div>
                <div className="text-[#DC2626] font-bold text-sm uppercase tracking-widest mt-2">Punkte erreicht</div>
              </div>
          )}

          {mode === QuizMode.STATUS && analysis ? (
            <div className="text-left">
              {getStatusBadge(analysis.level)}
              <div className="bg-[#0B1F3F] p-8 rounded-xl border-l-4 border-[#DC2626] mb-12">
                <h3 className="text-white font-bold mb-3 text-lg">Erste Einschätzung:</h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {analysis.text}
                </p>
              </div>
            </div>
          ) : null}

          {/* --- STRATEGIC UPSELL SECTION --- */}
          <div className="mt-8 pt-10 border-t border-white/5">
            <h3 className="text-slate-300 text-xs font-bold uppercase tracking-widest mb-8">
              {mode === QuizMode.STATUS ? "Dein nächster Schritt zur KI-Strategie" : "Wie geht es jetzt weiter?"}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Option 1: Consulting (TALLY LINK) */}
              <button 
                onClick={handleConsultingClick}
                className={`group bg-[#DC2626] hover:bg-[#B91C1C] p-6 rounded-xl text-left transition-all hover:-translate-y-1 shadow-lg hover:shadow-red-900/20 flex flex-col h-full relative overflow-hidden ${mode === QuizMode.STATUS ? 'ring-2 ring-white/20' : ''}`}
              >
                {mode === QuizMode.STATUS && (
                  <div className="absolute top-0 right-0 bg-white/20 text-white text-[9px] font-bold px-2 py-1 rounded-bl uppercase">Empfohlen</div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/10 rounded-lg text-white">
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  {mode === QuizMode.STATUS ? "Deep Dive Analyse anfordern" : "Tiefen-Analyse & Gespräch"}
                </h4>
                <p className="text-red-100 text-xs mb-4 flex-grow leading-relaxed">
                  {mode === QuizMode.STATUS 
                    ? "Dies war nur der erste Check. Erhalte jetzt deine individuelle Roadmap im kostenlosen Strategie-Gespräch."
                    : "Buche jetzt dein kostenloses Strategie-Gespräch & fülle den detaillierten Fragebogen aus."}
                </p>
                <div className="flex items-center text-white font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all mt-auto">
                  Termin sichern <span>→</span>
                </div>
              </button>

              {/* Option 2: Book Download */}
              <button 
                onClick={handleBookDownload}
                className="group bg-[#0B1F3F] hover:bg-[#162e55] border border-white/10 p-6 rounded-xl text-left transition-all hover:-translate-y-1 flex flex-col h-full"
              >
                 <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-white transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">KI-Kompass Buch</h4>
                <p className="text-slate-400 text-xs mb-4 flex-grow leading-relaxed">
                  Lade dir das Standardwerk herunter und lies dich in Ruhe in die Themen Orchestrierung & AI Act ein.
                </p>
                <div className="flex items-center text-slate-300 font-bold text-xs uppercase tracking-wider group-hover:text-white transition-colors mt-auto">
                  Zum Download <span>→</span>
                </div>
              </button>

            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={onHome}
              className="text-slate-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Zurück zur Startseite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;