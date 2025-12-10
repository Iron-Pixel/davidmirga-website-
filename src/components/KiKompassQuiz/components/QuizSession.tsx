import React, { useState, useEffect } from 'react';
import { QuizMode } from '../types';
import type { Question } from '../types';
import { Clock, CheckCircle, XCircle, ArrowRight, Lock } from 'lucide-react';
import RegistrationModal from './RegistrationModal';

interface QuizSessionProps {
  mode: QuizMode;
  questions: Question[];
  onComplete: (score: number, answers: any[]) => void;
  onExit: () => void;
}

const QuizSession: React.FC<QuizSessionProps> = ({ mode, questions, onComplete, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [timeLeft, setTimeLeft] = useState(45);
  
  const [showGate, setShowGate] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const FREE_QUESTION_LIMIT = 3; 

  const isChallenge = mode === QuizMode.CHALLENGE || mode === QuizMode.AIACT_CHALLENGE;
  const isTraining = mode === QuizMode.TRAINING || mode === QuizMode.AIACT_LEARNING;
  const isStatus = mode === QuizMode.STATUS;

  useEffect(() => {
    if (!isChallenge || isAnswered || showGate) return;

    setTimeLeft(45);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, isChallenge, isAnswered, showGate]);

  const handleTimeOut = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedOption(-1);
  };

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    let points = 0;
    let isCorrect = false;

    if (isStatus) {
       const weights = questions[currentIndex].weights || {};
       points = weights[index] || 0;
       setScore(prev => prev + points);
    } else {
       isCorrect = index === questions[currentIndex].correctIndex;
       if (isCorrect) {
         setScore(prev => prev + 1);
       }
    }

    setAnswers(prev => [...prev, {
      questionId: questions[currentIndex].id,
      selectedIndex: index,
      correct: isCorrect,
      points: points
    }]);
  };

  const handleNext = () => {
    if ((isTraining) && !isRegistered && currentIndex === (FREE_QUESTION_LIMIT - 1)) {
      setShowGate(true);
      return;
    }
    proceedToNextQuestion();
  };

  const proceedToNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onComplete(score, answers);
    }
  }

  const handleRegisterSuccess = () => {
    setIsRegistered(true);
    setShowGate(false);
    proceedToNextQuestion();
  };

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  if (!currentQuestion) return null;

  return (
    <>
      {showGate && (
        <RegistrationModal 
          onRegister={handleRegisterSuccess}
          onCancel={onExit}
        />
      )}

      <div className={`w-full max-w-3xl mx-auto px-4 py-8 ${showGate ? 'blur-sm pointer-events-none' : ''} transition-all duration-300 animate-fade-in`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6 text-slate-300">
          <div className="flex items-center gap-3">
            <span className="bg-[#DC2626]/10 px-3 py-1 rounded text-[10px] font-bold text-[#DC2626] uppercase tracking-widest border border-[#DC2626]/20">
              {currentQuestion.category}
            </span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Frage {currentIndex + 1} / {questions.length}
            </span>
          </div>
          {isChallenge && (
            <div className={`flex items-center gap-2 font-mono text-lg font-bold ${timeLeft < 10 ? 'text-[#DC2626]' : 'text-slate-400'}`}>
              <Clock className="w-4 h-4" />
              <span>{timeLeft}s</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#11284b] h-1 rounded-full mb-8 overflow-hidden">
          <div 
            className="bg-[#DC2626] h-full rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_#DC2626]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Question Card */}
        <div className="bg-[#11284b] p-6 md:p-10 rounded-2xl shadow-xl border border-white/5 mb-6 relative overflow-hidden">
          
          <h2 className="text-xl md:text-2xl font-bold text-white mb-8 leading-snug relative z-10">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3 relative z-10">
            {currentQuestion.options.map((option, idx) => {
              let btnClass = "w-full text-left p-5 rounded-xl border transition-all duration-200 flex justify-between items-center group relative ";
              
              if (!isAnswered) {
                btnClass += "border-white/10 bg-[#0B1F3F] hover:border-[#DC2626] hover:bg-[#162e55] text-slate-300 hover:text-white";
              } else {
                if (isStatus) {
                   if (idx === selectedOption) btnClass += "border-[#DC2626] bg-[#DC2626]/10 text-white shadow-[0_0_15px_rgba(220,38,38,0.2)]";
                   else btnClass += "border-transparent opacity-40 text-slate-500";
                } else {
                   if (idx === currentQuestion.correctIndex) {
                     btnClass += "border-emerald-500/50 bg-emerald-900/20 text-emerald-100";
                   } else if (idx === selectedOption) {
                     btnClass += "border-[#DC2626] bg-[#DC2626]/10 text-red-100";
                   } else {
                     btnClass += "border-transparent opacity-40 text-slate-500";
                   }
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isAnswered}
                  className={btnClass}
                >
                  <span className="flex-1 relative z-10 font-medium text-sm md:text-base">{option}</span>
                  {isAnswered && !isStatus && idx === currentQuestion.correctIndex && (
                    <CheckCircle className="w-5 h-5 text-emerald-500 ml-3 flex-shrink-0" />
                  )}
                  {isAnswered && !isStatus && idx === selectedOption && idx !== currentQuestion.correctIndex && (
                    <XCircle className="w-5 h-5 text-[#DC2626] ml-3 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation & Next Button */}
        {isAnswered && (
          <div className="animate-fade-in space-y-6">
            <div className="bg-[#11284b] border-l-4 border-[#DC2626] p-6 rounded-r-xl shadow-lg">
              <h4 className="font-bold text-[#DC2626] text-xs uppercase mb-2 tracking-widest">Experten-Insight</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
            
            <button
              onClick={handleNext}
              className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:translate-y-[-2px] flex items-center justify-center gap-3 uppercase tracking-wider text-sm"
            >
              {(isTraining) && !isRegistered && currentIndex === (FREE_QUESTION_LIMIT - 1) ? (
                 <>
                   <span>Kostenlos Freischalten</span>
                   <Lock className="w-4 h-4" />
                 </>
              ) : (
                 <>
                   <span>{currentIndex === questions.length - 1 ? 'Zur Auswertung' : 'Nächster Schritt'}</span>
                   <ArrowRight className="w-4 h-4" />
                 </>
              )}
            </button>
          </div>
        )}

        {/* Exit Button - Styled Red as requested */}
        {!isAnswered && (
           <button 
             onClick={onExit}
             className="mt-12 w-full max-w-xs mx-auto block py-3 rounded-lg text-[#DC2626] hover:text-white hover:bg-[#DC2626] transition-all font-bold text-xs uppercase tracking-widest border border-[#DC2626]/30 hover:border-[#DC2626]"
           >
             Abbrechen & Zurück
           </button>
        )}
      </div>
    </>
  );
};

export default QuizSession;