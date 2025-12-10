import React from 'react';
import { TOPICS } from '../types';
import { BookOpen, Brain, MessageSquare, Wrench, Scale, ShieldAlert, HeartHandshake, Bot, Briefcase, ArrowLeft } from 'lucide-react';

interface TrainingSetupProps {
  onStart: (context: string, topicId: string) => void;
  onBack: () => void;
}

const TrainingSetup: React.FC<TrainingSetupProps> = ({ onStart, onBack }) => {
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'Scale': return <Scale className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <button onClick={onBack} className="group text-slate-400 hover:text-white mb-8 font-medium flex items-center gap-2 transition-colors text-sm uppercase tracking-wider">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Zurück zur Übersicht
      </button>

      <div className="mb-12">
        <h2 className="text-3xl font-black text-white mb-3">Wissensgebiet wählen</h2>
        <p className="text-slate-400 max-w-2xl text-lg font-light">Wähle einen Fokusbereich für dein heutiges KI-Training. Startet sofort.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TOPICS.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onStart("", topic.id)}
            className="bg-[#11284b] hover:bg-[#162e55] border border-white/5 hover:border-[#DC2626] p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col items-start text-left group h-full relative overflow-hidden"
          >
            <div className="w-10 h-10 bg-[#0B1F3F] rounded-lg flex items-center justify-center mb-4 text-slate-400 group-hover:text-white group-hover:bg-[#DC2626] transition-all duration-300">
              {getIcon(topic.icon)}
            </div>
            <span className="font-bold text-slate-200 group-hover:text-white text-sm md:text-base leading-tight mb-2">{topic.label}</span>
            <div className="mt-auto w-8 h-0.5 bg-[#DC2626] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrainingSetup;