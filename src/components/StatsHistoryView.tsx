import { History, Trash2, ArrowRight } from 'lucide-react';
import { ExamAttempt, AppView, PermitType, Language } from '../types';

interface StatsHistoryViewProps {
  attempts: ExamAttempt[];
  onResetStats: () => void;
  setView: (view: AppView) => void;
  permitType: PermitType;
  language: Language;
}

export default function StatsHistoryView({ attempts, onResetStats, setView, permitType, language }: StatsHistoryViewProps) {
  const isEs = language === 'es';

  // Filter attempts for the active training deck to show accurate scoring metrics
  const activeAttempts = attempts.filter(a => {
    const itemType = a.permitType || 'motorcycle';
    return itemType === permitType;
  });

  const totalAttempted = activeAttempts.length;
  const examsTaken = activeAttempts.filter(a => a.mode.includes('Exam') || a.mode.includes('Examen')).length;
  const examsPassed = activeAttempts.filter(a => (a.mode.includes('Exam') || a.mode.includes('Examen')) && a.status === 'PASSED').length;
  const passRate = examsTaken > 0 ? Math.round((examsPassed / examsTaken) * 100) : 0;

  const getPermitLabel = (type: PermitType) => {
    if (isEs) {
      switch (type) {
        case 'motorcycle':
          return '🏍️ Clase M Motocicleta';
        case 'classD':
          return '🚗 Clase D Conductor';
        case 'cdl':
          return '🚛 CDL Comercial';
      }
    }
    switch (type) {
      case 'motorcycle':
        return '🏍️ Class M Motorcycle';
      case 'classD':
        return '🚗 Class D Passenger';
      case 'cdl':
        return '🚛 CDL Commercial';
    }
  };

  const formatMode = (rawMode: string) => {
    if (!isEs) return rawMode;
    if (rawMode === 'Real Exam Simulator') return 'Simulador de Examen Real';
    if (rawMode === 'Practice Marathon') return 'Maratón de Estudio';
    if (rawMode === 'Drill (controls)') return 'Práctica (Señales)';
    if (rawMode === 'Drill (lanes)') return 'Práctica (Velocidad y Paso)';
    if (rawMode === 'Drill (laws)') return 'Práctica (Leyes y Seguridad)';
    return rawMode;
  };

  const formatStatus = (status: ExamAttempt['status']) => {
    if (!isEs) return status;
    if (status === 'PASSED') return 'APROBADO';
    if (status === 'FAILED') return 'REPROBADO';
    return 'COMPLETADO';
  };

  const currentLabel = getPermitLabel(permitType);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="inline-block text-xs font-mono text-blue-700 uppercase tracking-wider px-2.5 py-1 bg-blue-100 rounded-full border border-blue-200 font-bold">
            {isEs ? `Registro Personal • ${currentLabel}` : `Personal Record Book • ${currentLabel}`}
          </span>
          <h2 className="text-2xl font-display text-slate-800 mt-2 font-bold">
            {isEs ? 'Mi Historial de Práctica en Minnesota' : 'My Minnesota Practice Record'}
          </h2>
          <p className="text-slate-500 text-sm mt-1 leading-relaxed">
            {isEs ? (
              <>
                Lleva un control de tus simulacros, prácticas y resultados guardados localmente para <strong>{currentLabel}</strong>.
              </>
            ) : (
              <>
                Keep track of your mock exams, drills, and positioning practices stored locally for <strong>{currentLabel}</strong>.
              </>
            )}
          </p>
        </div>
        {attempts.length > 0 && (
          <button
            onClick={onResetStats}
            className="px-4 py-2 hover:bg-rose-50 text-rose-650 hover:text-rose-700 border border-rose-200 hover:border-rose-300 text-xs font-mono rounded-xl transition-all uppercase tracking-wider cursor-pointer font-bold bg-white flex items-center gap-1.5 active:scale-98"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{isEs ? 'Borrar Historial Local' : 'Purge Local Record'}</span>
          </button>
        )}
      </div>

      {/* Mock stats overview dials */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 text-center space-y-1 shadow-sm hover:border-slate-300 transition-colors">
          <p className="text-xs text-slate-500 uppercase font-mono font-bold">
            {isEs ? 'Sesiones Realizadas' : 'Sessions Taken'}
          </p>
          <p className="text-3xl font-extrabold text-slate-805">{totalAttempted}</p>
          <p className="text-[10px] text-slate-400 font-medium">
            {permitType === 'motorcycle' ? (isEs ? 'Prácticas Clase M' : 'Class M drills') : permitType === 'cdl' ? 'CDL / TPR' : (isEs ? 'Prácticas Clase D' : 'Class D drills')}
          </p>
        </div>
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 text-center space-y-1 shadow-sm hover:border-slate-300 transition-colors">
          <p className="text-xs text-slate-500 uppercase font-mono font-bold">
            {isEs ? 'Exámenes Simulados' : 'Exam Simulator'}
          </p>
          <p className="text-3xl font-extrabold text-blue-700">{examsTaken}</p>
          <p className="text-[10px] text-slate-400 font-medium">
            {isEs ? 'Pruebas de 30 preguntas' : '30-Question trials'}
          </p>
        </div>
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 text-center space-y-1 shadow-sm hover:border-slate-300 transition-colors">
          <p className="text-xs text-slate-500 uppercase font-mono font-bold">
            {isEs ? 'Exámenes Aprobados' : 'Exams Cleared'}
          </p>
          <p className="text-3xl font-extrabold text-emerald-600">{examsPassed}</p>
          <p className="text-[10px] text-slate-400 font-medium">
            {isEs ? '24 o más correctas (80%)' : 'Score of 24 or more (80%)'}
          </p>
        </div>
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 text-center space-y-1 shadow-sm hover:border-slate-300 transition-colors">
          <p className="text-xs text-slate-500 uppercase font-mono font-bold">
            {isEs ? 'Tasa de Aprobación' : 'Exams Clear Rate'}
          </p>
          <p className="text-3xl font-extrabold text-sky-600">{passRate}%</p>
          <p className="text-[10px] text-slate-400 font-medium">
            {isEs ? 'Promedio de simulacros' : 'Average of mock rounds'}
          </p>
        </div>
      </div>

      {/* Score logs list */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm">
        <h3 className="text-md font-display font-bold text-slate-805 mb-4 flex items-center justify-between flex-wrap gap-2">
          <span className="flex items-center gap-2">
            <History className="w-5 h-5 text-slate-500" />
            <span>{isEs ? 'Historial Completo de Intentos (Últimos 30)' : 'Complete Historical Attempts (Latest 30)'}</span>
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {isEs ? 'Las métricas se filtran según la licencia seleccionada' : 'Filters automatically on current deck selection'}
          </span>
        </h3>

        {attempts.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-sm space-y-2">
            <p className="font-semibold text-slate-650">
              {isEs ? 'No hay sesiones registradas.' : 'No logged sessions found.'}
            </p>
            <p className="text-xs text-slate-400">
              {isEs
                ? 'Realiza un examen de práctica o una ronda temática para ver tu progreso.'
                : 'Simulate a full mock exam or carry out drills to populate your progress records.'}
            </p>
            <div className="pt-4">
              <button
                onClick={() => setView('home')}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl font-display transition-all cursor-pointer inline-flex items-center gap-1.5 uppercase tracking-wider"
              >
                <span>{isEs ? 'Ir al Centro de Pruebas' : 'Go to Home Hub'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs text-slate-600 border-collapse">
              <thead className="bg-slate-50/80 text-slate-500 uppercase font-mono text-[10px] border-b border-slate-200">
                <tr>
                  <th className="p-4 font-bold">{isEs ? 'Fecha' : 'Date'}</th>
                  <th className="p-4 font-bold">{isEs ? 'Licencia' : 'License Deck'}</th>
                  <th className="p-4 font-bold">{isEs ? 'Modo' : 'Mode type'}</th>
                  <th className="p-4 text-center font-bold">{isEs ? 'Puntuación' : 'Score'}</th>
                  <th className="p-4 text-center font-bold">{isEs ? 'Errores' : 'Strikes Record'}</th>
                  <th className="p-4 text-center font-bold">{isEs ? 'Resultado' : 'Status Result'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {attempts.map((item) => {
                  const itemPermit = item.permitType || 'motorcycle';
                  return (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors transition-all duration-150">
                      <td className="p-4 font-mono font-medium text-slate-450">{item.date}</td>
                      <td className="p-4 font-semibold text-slate-700">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                          itemPermit === 'classD' 
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-150' 
                            : itemPermit === 'cdl'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-150'
                            : 'bg-amber-50 text-amber-700 border border-amber-100'
                        }`}>
                          {itemPermit === 'classD'
                            ? (isEs ? '🚗 Clase D' : '🚗 Class D')
                            : itemPermit === 'cdl'
                            ? '🚛 CDL'
                            : (isEs ? '🏍️ Clase M' : '🏍️ Class M')}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="font-bold text-slate-805">{formatMode(item.mode)}</span>
                      </td>
                      <td className="p-4 text-center font-bold text-slate-800">
                        {item.score} / {item.totalQuestions}
                      </td>
                      <td className="p-4 text-center font-mono text-slate-500">
                        {item.strikes} {isEs ? 'errores' : 'errors'}
                      </td>
                      <td className="p-4 text-center">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[9px] font-mono tracking-wider font-bold border ${
                          item.status === 'PASSED' || item.status === 'COMPLETED'
                            ? 'bg-emerald-50 text-emerald-750 border-emerald-200'
                            : 'bg-rose-50 text-rose-700 border-rose-200'
                        }`}>
                          {formatStatus(item.status)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
