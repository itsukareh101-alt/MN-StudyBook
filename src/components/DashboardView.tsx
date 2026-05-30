import { motion, AnimatePresence } from 'motion/react';
import { 
  AlertTriangle, 
  Compass, 
  BookOpen, 
  TrendingUp, 
  ChevronRight, 
  Play,
  RotateCcw,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';
import { QuizMode, PermitType } from '../types';

interface DashboardViewProps {
  autoRevocationTriggered: boolean;
  setAutoRevocationTriggered: (val: boolean) => void;
  startQuiz: (mode: QuizMode) => void;
  permitType: PermitType;
}

export default function DashboardView({ 
  autoRevocationTriggered, 
  setAutoRevocationTriggered, 
  startQuiz,
  permitType
}: DashboardViewProps) {
  const isMoto = permitType === 'motorcycle';

  return (
    <div className="space-y-6">
      
      {/* Fail Notification overlay warning if user just failed from 8 strikes */}
      <AnimatePresence>
        {autoRevocationTriggered && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-rose-50 border border-rose-205 border-rose-200 text-rose-850 p-5 rounded-2xl flex flex-col md:flex-row items-center gap-4 justify-between shadow-sm animate-fade-in"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-rose-100 text-rose-600 rounded-xl shrink-0 border border-rose-200">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="text-md font-display font-bold text-rose-900">
                  {isMoto ? 'Motorcycle' : 'Driver'} Exam Terminated Automatically
                </h4>
                <p className="text-xs leading-relaxed text-slate-600 mt-1 font-medium">
                  In accordance with standard state-equivalent guidelines, hitting <strong className="text-rose-600 font-bold text-pink-700">8 strikes (incorrect answers)</strong> results in immediate failure to simulate real licensing threshold parameters. Keep study drilling and try again!
                </p>
              </div>
            </div>
            <button
              onClick={() => setAutoRevocationTriggered(false)}
              className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold font-display text-xs rounded-xl transition-all w-full md:w-auto shrink-0 cursor-pointer uppercase tracking-wider active:scale-97 hover:shadow"
            >
              Acknowledge &amp; Continue
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Hero Banner */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between shadow-sm overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-50/40 rounded-full filter blur-3xl -translate-y-1/2 pointer-events-none"></div>
        <div className="space-y-3 w-full text-center md:text-left relative z-10">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
            {isMoto ? 'Minnesota Class-M Manual' : 'Minnesota Class-D Manual'} Study System
          </span>
          <h2 className="text-2xl md:text-4xl font-display text-slate-805 uppercase tracking-tight leading-tight font-bold">
            {isMoto ? 'Minnesota Class M' : 'Minnesota Class D'}<br />
            <span className="text-blue-600">{isMoto ? 'Permit Training Deck' : 'Drivers Permit Prep'}</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-md leading-relaxed max-w-2xl font-medium">
            {isMoto 
              ? "Practice with a rigorous database of motorcycle knowledge questions referencing the Minnesota system guidelines. Failures occur instantly upon receiving 8 incorrect selections in strict mode, simulating real exam constraints."
              : "Prepare for your Minnesota passenger vehicle permit test. Study road signs, default speed limits, safe parking spacing, strict drinking laws (implied consent, Not a Drop), and hands-free rules with feedback citations."}
          </p>
        </div>
      </div>

      {/* Testing Hub Modes Group */}
      <div>
        <h3 className="text-lg font-display font-bold text-slate-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <span>Select Your Mode of Practice</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Real Simulation Mode Card */}
          <div className="bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 p-6 rounded-3xl flex flex-col justify-between shadow-sm relative overflow-hidden group transition-all duration-350 hover:shadow-md hover:-translate-y-0.5">
            <div className="absolute top-0 right-0 p-4 pt-3.5 bg-rose-50 border-l border-b border-rose-100 text-rose-700 text-[10px] font-mono tracking-widest uppercase font-bold rounded-bl-xl z-20">
              Strict Mode
            </div>
            <div>
              <div className="pb-4">
                <div className="w-12 h-12 bg-rose-100 text-rose-700 rounded-2xl flex items-center justify-center border border-rose-200 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <AlertTriangle className="w-5.5 h-5.5" />
                </div>
              </div>
              <h4 className="text-xl font-display font-bold text-slate-800">
                Real Mock Exam Simulator
              </h4>
              <p className="text-xs text-slate-550 mt-2 leading-relaxed font-medium">
                Simulate the real {isMoto ? 'motorcycle' : 'driver'} state knowledge test environment. If you log 8 incorrect answers, the test ends instantly, registering a simulated license attempt failure.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600 font-mono">
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-rose-600 font-bold">✕</span> Auto-fail limit: 8 incorrects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Total 40 randomly pooled questions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Minimum 80% (32 correct) to clear
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button
                onClick={() => startQuiz('exam')}
                className="w-full py-3 bg-rose-600 hover:bg-rose-750 text-white font-display font-bold text-sm rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Begin Mock Exam Simulator</span>
                <Play className="w-4 h-4 fill-white text-white" />
              </button>
            </div>
          </div>

          {/* Marathon Practice Card */}
          <div className="bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 p-6 rounded-3xl flex flex-col justify-between shadow-sm relative overflow-hidden group transition-all duration-350 hover:shadow-md hover:-translate-y-0.5">
            <div className="absolute top-0 right-0 p-4 pt-3.5 bg-emerald-50 border-l border-b border-emerald-100 text-emerald-700 text-[10px] font-mono tracking-widest uppercase font-semibold rounded-bl-xl z-20">
              No-Fail Study
            </div>
            <div>
              <div className="pb-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center border border-emerald-200 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Compass className="w-5.5 h-5.5" />
                </div>
              </div>
              <h4 className="text-xl font-display font-bold text-slate-800">
                Study Practice Marathon
              </h4>
              <p className="text-xs text-slate-550 mt-2 leading-relaxed font-medium">
                Review at your own relaxed pace. There are no limits on mistakes. Perfect for learning every single question with instant explanation quotes from the official {isMoto ? 'MN Motorcycle Manual' : 'MN DMV Class D Manual'}.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600 font-mono">
                <li className="flex items-center gap-2 font-medium">
                  <span className="text-emerald-700 font-bold">✓</span> Unlimited strikes (Study mode)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Explanations with references
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Step through questions sequentially
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button
                onClick={() => startQuiz('marathon')}
                className="w-full py-3 bg-blue-600 hover:bg-blue-705 text-white font-display font-bold text-sm rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Start Study Marathon</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Quick Drill Blocks */}
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
          <h3 className="text-md font-display font-bold text-slate-800 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span>Themed 10-Question Knowledge Drills</span>
          </h3>
          <span className="text-[11px] text-slate-500 font-mono uppercase tracking-wider font-semibold">Snappy quick rounds</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Card 1: Controls (Moto) vs Signs/Signals (Driver) */}
          <div className="bg-white border-2 border-slate-200 p-5 rounded-2xl flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all duration-300 group">
            <div>
              <h5 className="text-sm font-bold font-display text-slate-800 uppercase tracking-wide group-hover:text-blue-700 transition-colors">
                {isMoto ? 'control & controls' : 'Signs & signals'}
              </h5>
              <p className="text-[11.5px] text-slate-500 mt-1 leading-relaxed font-semibold">
                {isMoto 
                  ? 'Braking systems, turning curves, countersteering, traction management.'
                  : 'Road sign shapes (八角, triangle), red/yellow flashing signals, pavement markings.'}
              </p>
            </div>
            <button
              onClick={() => startQuiz('controls')}
              className="mt-4 py-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-800 font-semibold font-mono rounded-xl border border-slate-200 group-hover:border-blue-100 transition-all tracking-wider uppercase cursor-pointer text-[10.5px] text-center"
            >
              Load 10 Qs Drill
            </button>
          </div>

          {/* Card 2: Lanes (Moto) vs Right-of-Way & Speed Limit (Driver) */}
          <div className="bg-white border-2 border-slate-200 p-5 rounded-2xl flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all duration-300 group">
            <div>
              <h5 className="text-sm font-bold font-display text-slate-800 uppercase tracking-wide group-hover:text-blue-700 transition-colors">
                {isMoto ? 'lane & spacing' : 'Speed & Right-of-way'}
              </h5>
              <p className="text-[11.5px] text-slate-500 mt-1 leading-relaxed font-semibold">
                {isMoto 
                  ? 'Lane segments, following distances, group riding formulas, blind spot safety.'
                  : 'Default speeds (alleys, urban), roundabout rules, uncontrolled yields, emergency stops.'}
              </p>
            </div>
            <button
              onClick={() => startQuiz('lanes')}
              className="mt-4 py-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-800 font-semibold font-mono rounded-xl border border-slate-200 group-hover:border-blue-100 transition-all tracking-wider uppercase cursor-pointer text-[10.5px] text-center"
            >
              Load 10 Qs Drill
            </button>
          </div>

          {/* Card 3: Laws (Moto) vs DWI & Safety Laws (Driver) */}
          <div className="bg-white border-2 border-slate-200 p-5 rounded-2xl flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all duration-300 group">
            <div>
              <h5 className="text-sm font-bold font-display text-slate-800 uppercase tracking-wide group-hover:text-blue-700 transition-colors">
                {isMoto ? 'laws, gear & limits' : 'Laws, DWI & Safety'}
              </h5>
              <p className="text-[11.5px] text-slate-500 mt-1 leading-relaxed font-semibold">
                {isMoto 
                  ? 'State helmet rules, eye exceptions, permit constraints, Implied Consent limits.'
                  : 'Implied Consent BAC, under-21 zero tolerance (Not a Drop), Vanessa’s Law, seat belt mandates.'}
              </p>
            </div>
            <button
              onClick={() => startQuiz('laws')}
              className="mt-4 py-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-800 font-semibold font-mono rounded-xl border border-slate-200 group-hover:border-blue-100 transition-all tracking-wider uppercase cursor-pointer text-[10.5px] text-center"
            >
              Load 10 Qs Drill
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
