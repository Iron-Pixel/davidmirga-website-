---
title: "Der unsichtbare Elefant in deinem KI-Prompt"
description: "Warum KI-Anweisungen manchmal ignoriert werden – und die meisten es nicht einmal bemerken. Ein Praxisbeispiel zeigt, was im Hintergrund wirklich passiert."
date: 2025-01-30
author: "David Mirga"
category: "ki-wissen"
image: "/images/blog/Prompt_Elefant.jpg"
video: ""
deepDive: false
draft: false
linkedin: ""
instagram: ""
x: ""
---

KI-Systeme haben Regeln, die niemand sieht – und diese sorgen für kleine Abweichungen in Ergebnissen, oft unbemerkt.

Diese Regeln können unsere Anweisungen überschreiben. Still. Automatisch. Ohne Warnung.

Das Ergebnis: Prompts funktionieren nicht – obwohl sie richtig formuliert sind. Kleine Fehler schleichen sich ein – und fallen nie auf. Antworten sehen korrekt aus – sind es aber nicht ganz. Fast richtig ist trotzdem falsch. 87 % werden nie 100 %.

Ein Praxisbeispiel, das mir selbst passiert ist – und mich fast irre gemacht hat – zeigt, was im Hintergrund wirklich abläuft. Und warum das für jeden relevant ist, der ernsthaft mit KI arbeitet.

## Die Hierarchie, die kaum jemand kennt

KI-Systeme arbeiten mit einer Anweisungs-Hierarchie, sehr vereinfacht dargestellt:

**Ebene 1:** System-Prompts – festgelegt von den Entwicklern. Unsichtbar für Nutzer. Nicht veränderbar.

**Ebene 2:** User-Prompts – das, was wir eingeben.

OpenAI hat das in einem Forschungspapier dokumentiert: „The Instruction Hierarchy". Das Prinzip: Im Konfliktfall gewinnt das System.

Immer.

Das bedeutet: Egal wie perfekt ein Prompt formuliert ist – wenn eine Systemregel dagegen steht, wird sie überschrieben. Nicht aus Böswilligkeit. Nicht aus Unfähigkeit. Sondern weil das System so konstruiert ist.

## Der rosa Elefant macht es schlimmer – doch es gibt eine Lösung

Es gibt noch ein zweites Phänomen. In der Prompt-Engineering-Szene nennt man es den „Pink Elephant Effect".

„Denk nicht an einen rosa Elefanten."

Was passiert? Genau das Gegenteil. Das Gehirn muss das Konzept erst verarbeiten, um es zu vermeiden – und aktiviert es dabei.

Bei KI-Systemen funktioniert das ähnlich. Negative Anweisungen wie „Schreib nicht X" können paradoxerweise dazu führen, dass X häufiger auftritt. Das System muss X verarbeiten, um es auszuschließen – und gibt ihm dabei Gewicht.

Anthropic, die Entwickler von Claude, schreiben in ihrer offiziellen Dokumentation: „Tell Claude what to do instead of what not to do."

Statt „Verwende nicht das Wort mp4" wäre „Verwende ausschließlich den Dateinamen ohne Endung" die bessere Formulierung.

## Was sich daraus lernen lässt

**1. Es gibt Regeln, die nicht sichtbar sind.** System-Prompts können Anweisungen überschreiben. Das ist kein Bug. Das ist Architektur.

**2. Negative Anweisungen sind oft schwächer als positive.** „Mach X" funktioniert besser als „Mach nicht Y". Das neuronale Netz muss Y erst aktivieren, um es zu vermeiden.

**3. Ergebnisse brauchen Prüfung.** Nicht aus Misstrauen. Sondern weil die Komplexität im Hintergrund größer ist, als die Oberfläche vermuten lässt.

**4. Dieses Wissen gehört in jeden Workflow.** Wir schreiben Prompts – aber wir können die internen Anweisungen und Systeme nicht überschreiben, nur weil wir etwas wollen. Das muss immer im Hinterkopf sein.

## Die Konsequenz

Prompts sind keine Befehle. Sie sind Anfragen an ein System mit eigenen Regeln, eigenen Prioritäten, eigenen Grenzen.

Wer das versteht, arbeitet anders:

Weniger Frust, wenn etwas nicht funktioniert. Bessere Formulierungen, die mit dem System arbeiten statt dagegen. Ein Gespür dafür, wann ein Ergebnis vertrauenswürdig ist – und wann nicht.

Der Elefant im Raum ist nicht die KI selbst.

Es ist das, was im Hintergrund passiert. Unsichtbar. Automatisch. Und mächtiger als jede Eingabe von uns.

Wer das weiß, hat einen Vorteil.

Wer das nicht weiß, wundert sich weiter.

---

## Was hier auf dem Spiel steht

Millionen Menschen arbeiten täglich mit KI. Die wenigsten wissen, dass im Hintergrund Mechanismen laufen, die ihre Eingaben filtern, priorisieren und manchmal komplett ignorieren. Ja, klar – viele haben davon schon gehört oder sich sogar damit beschäftigt, genau wie ich.

Wir schreiben Prompts. Wir formulieren sie präzise. Wir glauben, dass das System tut, was wir sagen.

Aber das stimmt nicht immer genau so.

Es gibt interne Anweisungen, interne Strukturen, interne Systeme – und die können wir nicht überschreiben, nur weil wir etwas wollen. Die Entwickler haben Regeln festgelegt, die über unseren Eingaben stehen. Immer.

Das bedeutet: Wer das nicht weiß, hat keine echte Kontrolle über seine Ergebnisse. Die Fehler passieren – und bleiben unsichtbar.

Subtile Abweichungen in Texten. Zahlen, die fast stimmen. Fakten, die plausibel klingen. Empfehlungen, die auf falschen Annahmen basieren.

Die KI antwortet selbstsicher. Das Ergebnis sieht professionell aus. Wer nicht prüft, übernimmt es.

Das passiert millionenfach. Jeden Tag. In Unternehmen, bei Freelancern, in Agenturen.

Dieses Wissen gehört in jeden Workflow. Nicht als Randnotiz. Als Grundlage.

## Was genau passiert ist – und wie mir wieder mal die Augen geöffnet wurden, obwohl ich es hätte wissen sollen

Ich bereite mich gerade auf eine Prüfung vor – die ISO 42001, ein internationaler Standard für KI-Governance und Compliance. Das Lernmaterial besteht aus englischen Schulungsvideos.

Mein Englisch ist solide. Aber hier geht es um Fachbegriffe: Audit Scope, Documented Information, Control Objectives. Wörter, die man nicht nur verstehen, sondern auswendig können muss.

Also habe ich einen Workflow gebaut: Videos transkribieren lassen, ins Deutsche übersetzen, ein Glossar mit den Fachbegriffen erstellen – alles in einem Durchgang. So kann ich lesen, lernen und die Begriffe verinnerlichen.

Dafür nutze ich Gemini. Aktuell das einzige System, das Videos direkt verarbeiten kann.

Der Prompt war detailliert: Transkription auf Englisch, Übersetzung auf Deutsch mit Fachbegriffen in Klammern, Glossar, Quiz am Ende. Strukturiert. Präzise. Hat funktioniert.

15 Videos lang.

Video 16: Plötzlich stand „.mp4" mitten im Text. Überall. In der Transkription, in der Übersetzung, im Glossar.

Das hatte vorher nie gestört. Es war nie passiert.

Also habe ich den Prompt angepasst und eine Zeile hinzugefügt: „Das Wort mp4 soll nirgendwo im Text vorkommen."

Video 17: Sauber.

Video 18: Wieder „.mp4" im Text.

Video 19: Sauber.

Video 20: Wieder drin.

Gleicher Prompt. Gleiches System. Mal funktioniert die Anweisung, mal nicht.

## Wie ich drauf gekommen bin

Erster Gedanke: Der Prompt ist schuld. Irgendwo ein Fehler, eine Unklarheit. Doch ich vermutete schon, dass es einen Elefanten im Raum geben könnte, den ich geschaffen hatte.

Also habe ich nicht einfach weitergemacht. Ich habe nachgefragt. Analysiert. Hin und her mit der KI diskutiert. Hypothesen aufgestellt und getestet.

Erst nach einer ausführlichen Analyse – ein echtes Gespräch, kein schnelles Googeln – wurde mir klar, was hier passiert.

Das System hat sogenannte „Grounding-Regeln" – interne Sicherheitsmechanismen, die automatisch Quellenangaben einfügen. Der Zweck: Nachweisen, woher eine Information stammt. Halluzinationen vermeiden.

Der Dateiname war „10 Awareness [Clause 7.3].mp4". Also hat das System den vollständigen Namen als Quellennachweis eingefügt – inklusive der Endung, die eigentlich raus sollte.

Das Problem: Diese Systemregel hat eine höhere Priorität als die Anweisung im Prompt.

Der Prompt wurde nicht ignoriert, weil er schlecht war. Er wurde überschrieben, weil das System so gebaut ist.

Dann habe ich weiter recherchiert. Und was ich gefunden habe, hat das Ganze noch größer gemacht.

---

Täglich bekommen wir neue Nachrichten von den neuesten Trends und Tools. In zwei Jahren werden diese Tools sich komplett verändert haben – und wahrscheinlich absolut irrelevant sein. Auch unsere Arbeitsweisen werden sich verändern. Aber gewisse Systeme, gewisse Mechanismen in der Maschine, die nicht so einen Hype verursachen oder nicht so virale Themen sind – genau diese Mechanismen bringen uns ein besseres Verständnis, wie wir in Zukunft arbeiten können, um bessere Ergebnisse zu erzielen.