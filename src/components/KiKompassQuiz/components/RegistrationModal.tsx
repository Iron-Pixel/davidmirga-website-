import React, { useState } from 'react';
import { Lock, Check, ArrowRight } from 'lucide-react';

interface RegistrationModalProps {
  onRegister: () => void;
  onCancel: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ onRegister, onCancel }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onRegister();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3F]/95 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-2xl max-w-sm w-full shadow-2xl overflow-hidden relative">
        
        <div className="bg-[#DC2626] p-8 text-center relative z-10">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md shadow-lg border border-white/30">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-black text-white tracking-tight uppercase">Analyse Freischalten</h2>
          <p className="text-white/80 text-xs mt-2 font-medium">
            Kostenlos fortfahren & Ergebnis sichern.
          </p>
        </div>

        <div className="p-8 relative z-10 bg-white">
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-xs text-slate-600 font-medium">
              <Check className="w-4 h-4 text-[#DC2626]" />
              <span>Vollständiger <strong>Trainingszugriff</strong></span>
            </li>
            <li className="flex items-start gap-3 text-xs text-slate-600 font-medium">
              <Check className="w-4 h-4 text-[#DC2626]" />
              <span>Detaillierte <strong>Strategie-Empfehlung</strong></span>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">E-Mail Adresse</label>
              <input 
                type="email" 
                placeholder="name@unternehmen.com" 
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            <div className="flex items-start gap-2 my-4">
               <input type="checkbox" required className="mt-0.5 rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626]" />
               <span className="text-[10px] text-slate-400 leading-tight">Ich stimme der Datenschutzerklärung zu und möchte die Auswertung erhalten.</span>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0B1F3F] hover:bg-[#162e55] text-white font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg transform hover:-translate-y-0.5 text-sm uppercase tracking-wider"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                   <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                   Wird verarbeitet...
                </span>
              ) : (
                <>
                  <span>Ergebnis ansehen</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <button 
            onClick={onCancel}
            className="w-full mt-4 text-slate-400 text-[10px] hover:text-[#DC2626] transition-colors font-medium uppercase tracking-wider"
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;