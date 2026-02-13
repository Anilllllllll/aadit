// src/components/FinalLetter.tsx
// NOTICE: Personal Use Only
// This content is licensed for unlimited personal use only. Resale, redistribution,
// modification for resale, or any form of commercial use is strictly prohibited.
//
// Enforcement: Any misuse or violation of these terms will result in account
// takedown and may lead to legal action.
//
// Original Creator: Pinak Kundu
// Date: 12th February 2026, 9:25 PM
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import textConfig from "../textConfig";

interface FinalLetterProps {
  onRestart: () => void;
}

export default function FinalLetter({ onRestart }: FinalLetterProps) {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });
  const noMoveCountRef = useRef(0);

  useEffect(() => {
    // Component initialization logic if needed in the future
  }, []);

  useEffect(() => {
    if (!showPopup) return;
    const timer = window.setTimeout(() => setShowPopup(false), 2200);
    return () => window.clearTimeout(timer);
  }, [showPopup]);

  const moveNoButton = () => {
    if (hasAccepted) return;
    noMoveCountRef.current += 1;
    const maxX = 120 + noMoveCountRef.current * 6;
    const maxY = 70 + noMoveCountRef.current * 4;
    const nextX = Math.round((Math.random() * 2 - 1) * maxX);
    const nextY = Math.round((Math.random() * 2 - 1) * maxY);
    setNoOffset({ x: nextX, y: nextY });
  };

  return (
    <>
      <main className="flex-grow relative w-full max-w-7xl mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="text-center mb-12 relative z-10">
          <span className="block text-retro-pink font-hand text-2xl rotate-[-2deg] mb-2">
            the grand finale...
          </span>
          <h1 className="text-4xl md:text-6xl font-display text-primary drop-shadow-sm tracking-tight leading-tight">
            {textConfig.finalLetter.title}
          </h1>
        </div>

        <div className="w-full max-w-4xl bg-gradient-to-br from-pink-300/95 via-pink-200/90 to-pink-100/95 backdrop-blur-sm rounded-2xl p-8 shadow-retro border-4 border-pink-400">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-retro">
                <span className="material-icons-round">mail</span>
              </div>
              <h3 className="text-2xl font-display text-primary">
                Final Letter
              </h3>
            </div>

            <div className="bg-pink-50/90 rounded-xl p-6 font-hand text-lg leading-relaxed space-y-4 text-gray-800 border-2 border-pink-200">
              <p className="text-primary font-bold text-xl">
                {textConfig.finalLetter.letterGreeting}
              </p>

              <p className="text-gray-700">{textConfig.finalLetter.letterParagraphs[0]}</p>
              <p className="text-gray-700 font-medium">
                {textConfig.finalLetter.letterParagraphs[1]}
              </p>
              <p className="text-gray-700">{textConfig.finalLetter.letterParagraphs[2]}</p>
              <p className="text-gray-700 font-medium">
                {textConfig.finalLetter.letterParagraphs[3]}</p>
              <p className="mt-4 text-center">
                <span className="inline-block text-2xl md:text-4xl font-display text-retro-pink tracking-wide border-b-2 border-primary/30 pb-1">
                  {textConfig.finalLetter.letterParagraphs[4]}
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 items-center pt-4">
              <div className="text-sm text-gray-600 font-hand">
                {textConfig.finalLetter.sealingNote}
              </div>
              <div className="relative flex gap-3 items-center">
                <button
                  onClick={() => {
                    setHasAccepted(true);
                    setShowPopup(true);
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-bold shadow-retro hover:shadow-retro-hover hover:bg-primary-hover hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
                >
                  Yes
                </button>
                {!hasAccepted && (
                  <button
                    type="button"
                    onMouseEnter={moveNoButton}
                    onFocus={moveNoButton}
                    onClick={moveNoButton}
                    style={{ transform: `translate(${noOffset.x}px, ${noOffset.y}px)` }}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-gray-700 font-semibold border-2 border-primary/30 shadow-sm transition-transform duration-200"
                  >
                    No
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-primary/20 text-primary font-display text-xl">
            I love you always.
          </div>
        </div>
      )}
    </>
  );
}