import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Sliders,
  Clock
} from 'lucide-react';
import { Question, QuizMode, PermitType, Language } from '../types';

interface QuizActiveViewProps {
  currentIndex: number;
  activeQuestions: Question[];
  mode: QuizMode;
  strikes: number;
  selectedAnswer: number | null;
  isAnswerChecked: boolean;
  isSpeaking: boolean;
  onQuit: () => void;
  toggleSpeakQuestion: () => void;
  onSelectOption: (idx: number) => void;
  autoRevocationTriggered: boolean;
  onNextQuestion: () => void;
  permitType: PermitType;
  voiceVolume: number;
  setVoiceVolume: (v: number) => void;
  language: Language;
  isExamTimerEnabled: boolean;
  onToggleExamTimer: () => void;
  timeRemainingSeconds: number;
}

export default function QuizActiveView({
  currentIndex,
  activeQuestions,
  mode,
  strikes,
  selectedAnswer,
  isAnswerChecked,
  isSpeaking,
  onQuit,
  toggleSpeakQuestion,
  onSelectOption,
  autoRevocationTriggered,
  onNextQuestion,
  permitType,
  voiceVolume,
  setVoiceVolume,
  language,
  isExamTimerEnabled,
  onToggleExamTimer,
  timeRemainingSeconds
}: QuizActiveViewProps) {
  const [showVoiceSettings, setShowVoiceSettings] = useState(false);
  const currentQuestion = activeQuestions[currentIndex];
  if (!currentQuestion) return null;

  const isEs = language === 'es';
  const totalQuestions = activeQuestions.length;
  const completedCount = isAnswerChecked ? currentIndex + 1 : currentIndex;
  const completionPercentage = totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

  const totalExamSeconds = 60 * 60;
  const minutesRemaining = Math.floor(timeRemainingSeconds / 60);
  const secondsRemaining = timeRemainingSeconds % 60;
  const formattedTime = `${String(minutesRemaining).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
  const timeRemainingPercent = Math.max(0, Math.min(100, (timeRemainingSeconds / totalExamSeconds) * 100));
  const isTimeLow = timeRemainingSeconds <= 600; // <= 10 minutes
  const isTimeCritical = timeRemainingSeconds <= 120; // <= 2 minutes

  const getModeBadge = () => {
    if (isEs) {
      if (mode === 'exam') return '🚨 EXAMEN DE PRÁCTICA';
      if (mode === 'marathon') return '📚 MARATÓN DE ESTUDIO';
      return '🎯 PRÁCTICA TEMÁTICA';
    }
    if (mode === 'exam') return '🚨 PRACTICE EXAM';
    if (mode === 'marathon') return '📚 STUDY MARATHON';
    return '🎯 SKILL DRILL';
  };

  const getTopicLabel = () => {
    if (!isEs) return mode === 'exam' ? 'Exam Pool' : mode.toUpperCase();
    if (mode === 'exam') return 'Banco de Examen';
    if (mode === 'marathon') return 'MARATÓN';
    if (mode === 'controls') return 'SEÑALES';
    if (mode === 'lanes') return 'PASO Y VELOCIDAD';
    return 'LEYES';
  };

  return (
    <div className="space-y-4">
      {/* Progress Header */}
      <div className="flex items-center justify-between px-2 text-xs">
        <div>
          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
            {getModeBadge()}
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
          {mode === 'exam' && (
            <button
              id="btn-exam-timer-toggle"
              type="button"
              onClick={onToggleExamTimer}
              title={
                isEs
                  ? (isExamTimerEnabled ? 'Desactivar temporizador de 60 min' : 'Activar temporizador de 60 min')
                  : (isExamTimerEnabled ? 'Disable 60-min timer' : 'Enable 60-min DMV timer')
              }
              className={`px-2.5 py-1 rounded-xl border text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer active:scale-97 ${
                isExamTimerEnabled
                  ? isTimeCritical
                    ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
                    : isTimeLow
                    ? 'bg-amber-50 border-amber-300 text-amber-800'
                    : 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>
                {isExamTimerEnabled
                  ? formattedTime
                  : (isEs ? 'Temporizador 60m' : '60m Timer')}
              </span>
            </button>
          )}
          <span className="font-mono text-slate-600 font-bold bg-slate-100 px-3 py-1 rounded-xl border border-slate-200">
            {isEs ? `Pregunta ${currentIndex + 1} de ${totalQuestions}` : `Question ${currentIndex + 1} of ${totalQuestions}`}
          </span>
          <button
            onClick={onQuit}
            className="p-1.5 px-3 bg-rose-50 hover:bg-rose-100 border border-rose-100 hover:border-rose-200 rounded-xl text-[10px] uppercase font-mono tracking-wider text-rose-600 font-bold transition-all cursor-pointer active:scale-97"
          >
            {isEs ? 'Salir' : 'Quit'}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-2 space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="text-slate-500 font-semibold">
            {isEs
              ? `Progreso: ${completedCount} de ${totalQuestions} completadas`
              : `Completion: ${completedCount} of ${totalQuestions} answered`}
          </span>
          <span
            id="quiz-completion-percent"
            className={`font-bold ${completionPercentage === 100 ? 'text-emerald-600' : 'text-blue-700'}`}
          >
            {completionPercentage}%
          </span>
        </div>
        <div
          role="progressbar"
          aria-label={isEs ? 'Progreso del examen o práctica' : 'Exam or drill completion progress'}
          aria-valuenow={completionPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          className="w-full h-3 bg-slate-200/80 rounded-full overflow-hidden border border-slate-200/70"
        >
          <div 
            className={`h-full rounded-full transition-all duration-300 ease-out ${
              completionPercentage === 100 ? 'bg-emerald-500' : 'bg-blue-600'
            }`}
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      {/* Optional 60-Minute DMV Countdown Timer Visual Bar (Mock Exam Only) */}
      {mode === 'exam' && isExamTimerEnabled && (
        <div
          id="exam-countdown-panel"
          className={`mx-2 px-4 py-2.5 rounded-2xl border space-y-1.5 transition-colors ${
            isTimeCritical
              ? 'bg-rose-50 border-rose-200 text-rose-800'
              : isTimeLow
              ? 'bg-amber-50 border-amber-200 text-amber-900'
              : 'bg-slate-50 border-slate-200 text-slate-700'
          }`}
        >
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>{isEs ? 'Tiempo Restante (Límite DMV 60 min)' : 'DMV Exam Time Remaining (60m Limit)'}</span>
            </span>
            <div className="flex items-center gap-2.5">
              <span className="font-extrabold text-xs">{formattedTime}</span>
              <button
                type="button"
                onClick={onToggleExamTimer}
                className="text-[10px] underline opacity-75 hover:opacity-100 cursor-pointer"
              >
                {isEs ? 'Ocultar' : 'Turn off'}
              </button>
            </div>
          </div>
          <div
            role="timer"
            aria-label={isEs ? 'Tiempo restante del examen' : 'Exam time remaining'}
            className="w-full h-2 bg-white/80 rounded-full overflow-hidden border border-black/5"
          >
            <div
              className={`h-full rounded-full transition-all duration-1000 ease-linear ${
                isTimeCritical
                  ? 'bg-rose-500'
                  : isTimeLow
                  ? 'bg-amber-500'
                  : 'bg-indigo-600'
              }`}
              style={{ width: `${timeRemainingPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* EXAM STRIKES (Only active for Real Exam) */}
      {mode === 'exam' && strikes > 0 && (
        <div className="px-4 py-2 flex items-center justify-between text-xs bg-rose-50 border border-rose-100/70 text-rose-700 rounded-2xl animate-fade-in">
          <span className="font-mono font-bold uppercase text-[10px]">
            {isEs ? 'Aviso de errores:' : 'Strike Warning:'}
          </span>
          <span className="font-mono font-bold">
            {isEs ? `${strikes} de 7 errores permitidos` : `${strikes} of 7 errors fail threshold`}
          </span>
        </div>
      )}

      {/* Active Question Box */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className="bg-white border-2 border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
      >
        
        {/* Header line */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-mono uppercase bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100 font-bold">
            {isEs ? `Tema: ${getTopicLabel()}` : `Topic: ${getTopicLabel()}`}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          <span className="text-[11px] text-slate-500 font-mono font-medium">
            {isEs
              ? 'Manual del Conductor de Minnesota (Español)'
              : permitType === 'motorcycle' 
              ? 'Minnesota Motorcycle Manual' 
              : permitType === 'cdl' 
              ? 'Minnesota CDL Manual & TPR Guidelines' 
              : 'Minnesota Driver’s Manual'}
          </span>
        </div>

        {/* Question text */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg md:text-xl font-display text-slate-805 leading-snug flex-1 font-bold">
            {currentIndex + 1}. {currentQuestion.question}
          </h3>
          <div className="flex flex-col items-center gap-2 shrink-0">
            <button
              onClick={toggleSpeakQuestion}
              className={`p-2.5 rounded-xl border flex items-center justify-center transition-all cursor-pointer shrink-0 active:scale-95 ${
                isSpeaking 
                  ? 'bg-blue-100 border-blue-300 text-blue-700' 
                  : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600'
              }`}
              title={
                isEs
                  ? (isSpeaking ? 'Detener lectura' : 'Leer pregunta en voz alta')
                  : (isSpeaking ? 'Stop reading' : 'Read question aloud')
              }
            >
              {isSpeaking ? <VolumeX className="w-5 h-5 animate-pulse" /> : <Volume2 className="w-5 h-5" />}
            </button>
            
            <button
              id="btn-voice-tune-toggle"
              onClick={() => setShowVoiceSettings(!showVoiceSettings)}
              className={`px-2 py-1 rounded-lg border text-[10px] font-mono font-bold flex items-center gap-1 transition-all cursor-pointer active:scale-95 ${
                showVoiceSettings
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50'
              }`}
              title={isEs ? 'Ajustar lector de voz' : 'Tune reader voice (soften/speed)'}
            >
              <Sliders className="w-3 h-3" />
              <span>{isEs ? (showVoiceSettings ? 'Cerrar' : 'Voz') : (showVoiceSettings ? 'Close' : 'Tune')}</span>
            </button>
          </div>
        </div>

        {/* Voice Settings drawer */}
        <AnimatePresence>
          {showVoiceSettings && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-4 overflow-hidden text-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-bold font-mono uppercase">
                  <Sliders className="w-3.5 h-3.5 text-slate-500" />
                  <span>{isEs ? 'Control de Lector Acústico' : 'Acoustic Reader Control'}</span>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-bold">
                  {isEs ? 'Guardado automático' : 'Autosaved'}
                </span>
              </div>
              
              {/* Slider Fine Tuning */}
              <div className="space-y-3.5 pt-1">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-600">
                    <span className="flex items-center gap-1.5">
                      🔊 {isEs ? 'Volumen de Voz:' : 'Voice Volume:'}{' '}
                      <span className="font-mono text-[10px] bg-slate-200 px-1.5 py-0.5 rounded">{(voiceVolume * 100).toFixed(0)}%</span>
                    </span>
                    <span className="text-slate-400 text-[10px]">
                      {isEs ? 'Ajustar para suavizar' : 'Adjust to soften'}
                    </span>
                  </div>
                  <input
                    id="slider-voice-volume"
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.05"
                    value={voiceVolume}
                    onChange={(e) => setVoiceVolume(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Multi choice options */}
        <div className="space-y-3 pt-1">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrectAnswer = idx === currentQuestion.correctAnswerIndex;
            
            let optStyle = 'bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/50';
            
            if (isAnswerChecked) {
              if (isCorrectAnswer) {
                optStyle = 'bg-emerald-50/80 border-emerald-500 text-emerald-950 font-medium scale-[1.01] transition-transform';
              } else if (isSelected) {
                optStyle = 'bg-rose-50/80 border-rose-500 text-rose-950';
              } else {
                optStyle = 'bg-slate-50/30 border-slate-100 opacity-50 text-slate-400 pointer-events-none';
              }
            } else if (isSelected) {
              optStyle = 'bg-blue-50/60 border-blue-600 text-slate-800 font-medium';
            }

            return (
              <button
                key={idx}
                id={`opt-btn-${idx}`}
                onClick={() => onSelectOption(idx)}
                disabled={isAnswerChecked}
                className={`w-full text-left p-4 rounded-xl border text-sm transition-all duration-200 flex items-start gap-3 cursor-pointer ${optStyle}`}
              >
                <span className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 border transition-colors ${
                  isSelected 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-slate-100 border-slate-250 text-slate-600'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1 pt-0.5 leading-snug font-medium text-slate-750">{option}</span>
                
                {/* Icon validation check indicators if checked */}
                {isAnswerChecked && isCorrectAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 self-center" />
                )}
                {isAnswerChecked && isSelected && !isCorrectAnswer && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 self-center" />
                )}
              </button>
            );
          })}
        </div>

        {/* Answer explanation CITATION */}
        <AnimatePresence>
          {isAnswerChecked && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 space-y-2 overflow-hidden text-sm"
            >
              <div className="flex items-center gap-1.5 text-xs text-blue-700 font-mono font-bold uppercase">
                <ShieldCheck className="w-4.5 h-4.5 text-blue-700" />
                <span>
                  {isEs
                    ? 'Cita de Ley de Tránsito de Minnesota'
                    : permitType === 'motorcycle' ? 'Minnesota Safety Rule Citation' : 'Minnesota Traffic Law Citation'}
                </span>
              </div>
              <p className="text-xs text-slate-650 leading-relaxed font-semibold">
                {currentQuestion.explanation}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next Buttons actions */}
        <div className="pt-4 border-t border-slate-200 flex justify-between items-center gap-3">
          <div>
            {!isAnswerChecked && (
              <span className="text-xs text-slate-400 font-medium">
                {isEs ? 'Selecciona una opción para confirmar tu respuesta' : 'Step through options and select to lock-in your answer'}
              </span>
            )}
          </div>
          
          {isAnswerChecked && (
            <button
              id="btn-next-question"
              onClick={onNextQuestion}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold font-display rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ml-auto active:scale-97 hover:shadow"
            >
              <span>
                {isEs
                  ? (autoRevocationTriggered ? 'Fallar y Salir' : (currentIndex + 1 === totalQuestions ? 'Finalizar Prueba' : 'Siguiente Pregunta'))
                  : (autoRevocationTriggered ? 'Fail & Quit' : (currentIndex + 1 === totalQuestions ? 'Finish Test' : 'Next Question'))}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </motion.div>
    </div>
  );
}
