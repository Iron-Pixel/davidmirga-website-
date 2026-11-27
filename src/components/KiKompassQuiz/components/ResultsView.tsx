import React, { useEffect } from 'react';
import type { Answer, Stage } from '../types';

interface ResultsViewProps {
  answers: Answer[];
  maxPoints: number;
  onRetry: () => void;
}

interface StageInfo {
  name: string;
  text: string; // Vorschlag von Claude, 27.11., von Dave noch zu bestätigen
  link: { href: string; label: string; external?: boolean };
}

const KURS = { href: 'https://www.caie.at/kurs', label: 'Zum KI-Grundkurs', external: true };
const KOMPASS = { href: '/downloads/ki-kompass', label: 'Zum KI-Kompass' };
const NEWS = { href: '/ki-presse-news', label: 'Zu den KI-Wochen-News' };

const STAGES: Record<Stage, StageInfo> = {
  1: { name: 'KI-Neuling', text: 'Bei euch steht KI noch ganz am Anfang. Das ist kein Problem, sondern ein guter Startpunkt. Wichtig ist jetzt, dass alle die Grundlagen kennen: was KI kann, wo sie Fehler macht und was man nicht eingeben darf.', link: KURS },
  2: { name: 'Anwender', text: 'Einzelne nutzen KI schon, aber jeder macht es auf seine Art. Jetzt lohnt es sich, gemeinsame Regeln festzulegen: Welche Programme sind erlaubt, welche Daten bleiben draußen? So wird aus Ausprobieren sichere Arbeit.', link: KURS },
  3: { name: 'Fortgeschritten', text: 'KI gehört bei euch schon zum Alltag, und es gibt erste Regeln. Der nächste Schritt ist ein klarer Plan: Wo bringt KI wirklich etwas, wer ist verantwortlich, und wie zieht das ganze Team mit?', link: KOMPASS },
  4: { name: 'KI-Experte', text: 'Ihr setzt KI geplant und mit Regeln ein. Jetzt geht es ums Dranbleiben: Programme, Gesetze und Möglichkeiten ändern sich laufend. Wer regelmäßig hinschaut, erkennt früh, was für euch wichtig wird.', link: NEWS },
  5: { name: 'KI-Stratege', text: 'KI ist bei euch Teil der Strategie, mit Verantwortung, Regeln und einem Team, das mitzieht. Bleib neugierig und prüfe regelmäßig, ob eure Regeln noch zu den neuen Programmen passen.', link: NEWS },
};

const stageFor = (percent: number): Stage => {
  if (percent >= 85) return 5;
  if (percent >= 65) return 4;
  if (percent >= 45) return 3;
  if (percent >= 25) return 2;
  return 1;
};

const ResultsView: React.FC<ResultsViewProps> = ({ answers, maxPoints, onRetry }) => {
  const points = answers.reduce((sum, a) => sum + a.points, 0);
  const percent = maxPoints > 0 ? (points / maxPoints) * 100 : 0;
  const stage = stageFor(percent);
  const info = STAGES[stage];

  useEffect(() => {
    // Zählt, welche Stufe erreicht wurde (Umami, ohne Cookies)
    (window as any).umami?.track?.(`KI-Check Stufe ${stage}`);
  }, [stage]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-[#F2EFE7] rounded-3xl px-6 md:px-12 py-10 md:py-12 text-center">
        <p className="text-lg font-semibold text-[#6B7A78] mb-2">Dein Ergebnis</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#245556] mb-3">{info.name}</h2>
        <p className="text-lg text-[#1F3B3A] mb-6">
          Stufe {stage} von 5 · {points} von {maxPoints} Punkten
        </p>

        {/* Stufen-Leiste */}
        <div className="flex justify-center gap-2 mb-8" aria-hidden="true">
          {[1, 2, 3, 4, 5].map(n => (
            <span key={n} className={`h-3 w-12 rounded-full ${n <= stage ? 'bg-[#B4562F]' : 'bg-[#245556]/15'}`} />
          ))}
        </div>

        <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-10">{info.text}</p>

        <a
          href={info.link.href}
          {...(info.link.external ? { target: '_blank', rel: 'noopener' } : {})}
          data-umami-event={`KI-Check weiter Stufe ${stage}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#B4562F] text-white text-lg font-semibold rounded-xl hover:bg-[#94451F] transition-colors"
        >
          {info.link.label} <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-8 text-lg">
        <button onClick={onRetry} className="text-[#245556] font-semibold underline underline-offset-4 hover:text-[#B4562F] transition-colors">
          Check nochmal machen
        </button>
        <a href="/" className="text-[#245556] font-semibold underline underline-offset-4 hover:text-[#B4562F] transition-colors">
          Zur Startseite
        </a>
      </div>
    </div>
  );
};

export default ResultsView;
