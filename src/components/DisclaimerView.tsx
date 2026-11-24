import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';
import { Language } from '../types';

interface DisclaimerViewProps {
  onAccept: () => void;
  language: Language;
}

export default function DisclaimerView({ onAccept, language }: DisclaimerViewProps) {
  const isEs = language === 'es';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="max-w-xl mx-auto space-y-4"
    >
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-5">
        
        {/* Alert Badge Header */}
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="p-2 w-10 h-10 bg-amber-50 text-amber-700 rounded-xl border border-amber-200 shrink-0 shadow-sm flex items-center justify-center">
            <AlertTriangle className="w-5.5 h-5.5" />
          </div>
          <div>
            <h2 className="text-base font-display font-bold text-slate-800">
              {isEs ? 'Aviso Legal y Reglas' : 'Legal Disclaimer & Rules'}
            </h2>
            <p className="text-[10px] text-slate-500 font-mono">
              {isEs ? 'MN-StudyBook Herramienta Independiente de Práctica' : 'MN-StudyBook Independent Practice Tool'}
            </p>
          </div>
        </div>

        {/* Warning box */}
        <div className="p-3.5 bg-amber-50/75 rounded-2xl border border-amber-200/80 space-y-1.5 text-slate-900 leading-relaxed">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-950 font-display flex items-center gap-1.5">
            <span>{isEs ? '⚠️ Declaración de No Afiliación' : '⚠️ Non-Affiliation Declaration'}</span>
          </h3>
          <p className="text-[11px] leading-relaxed text-amber-900">
            {isEs ? (
              <>
                <strong>MN-StudyBook</strong> es una aplicación independiente de práctica. Esta herramienta de apoyo <strong>no</strong> es operada, respaldada, patrocinada ni afiliada al Estado de Minnesota, a Minnesota DVS ni a ninguna agencia gubernamental de licencias.
              </>
            ) : (
              <>
                <strong>MN-StudyBook</strong> is an independent practice application. This helper tool is <strong>not</strong> operated, endorsed, or sponsored by, or affiliated with, the State of Minnesota, the Minnesota DVS, or any other government licensing agency.
              </>
            )}
          </p>
        </div>

        {/* Rules List */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-bold uppercase tracking-wide text-slate-400 font-mono">
            {isEs ? 'Términos Educativos y Limitaciones:' : 'Educational Terms & Limitations:'}
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-slate-50 hover:bg-slate-100/50 transition-all duration-300 rounded-xl border border-slate-200/70 space-y-1 group">
              <span className="text-blue-700 group-hover:text-blue-800 transition-colors font-bold text-[10px] uppercase font-mono block">
                {isEs ? '1. Solo Entorno de Estudio' : '1. Study Sandbox Only'}
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {isEs
                  ? 'Las puntuaciones y el seguimiento de prácticas son solo para entrenamiento. Los resultados no garantizan aprobar el examen estatal.'
                  : 'Scores and practice tracking are for training only. Practice results do not guarantee state exam clearance.'}
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 hover:bg-slate-100/50 transition-all duration-300 rounded-xl border border-slate-200/70 space-y-1 group">
              <span className="text-blue-700 group-hover:text-blue-800 transition-colors font-bold text-[10px] uppercase font-mono block">
                {isEs ? '2. Alcance de la Información' : '2. Information Scope'}
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {isEs
                  ? 'Procuramos alinearnos con las guías estatales, pero algunas leyes o preguntas pueden estar simplificadas o contener discrepancias.'
                  : 'We endeavor to align with state guides, but some laws or questions may be simplified or contain discrepancies.'}
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 hover:bg-slate-100/50 transition-all duration-300 rounded-xl border border-slate-200/70 space-y-1 group">
              <span className="text-blue-700 group-hover:text-blue-800 transition-colors font-bold text-[10px] uppercase font-mono block">
                {isEs ? '3. Sin Validez Legal' : '3. No Legal Standing'}
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {isEs
                  ? 'Esta aplicación no ofrece asesoría legal. El desarrollador no asume responsabilidad por los resultados de exámenes reales externos.'
                  : 'This app provides no legal counsel. The developer bears no responsibility for any external real-life testing outcomes.'}
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 hover:bg-slate-100/50 transition-all duration-300 rounded-xl border border-slate-200/70 space-y-1 group">
              <span className="text-blue-700 group-hover:text-blue-800 transition-colors font-bold text-[10px] uppercase font-mono block">
                {isEs ? '4. Recursos Oficiales' : '4. Official Resources'}
              </span>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {isEs ? (
                  <>
                    El{' '}
                    <a
                      href="https://assets.dps.mn.gov/files/dvs/dvs-class-d-drivers-manual-spanish.pdf?v=1763159928"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800 font-semibold"
                    >
                      Manual del Conductor Clase D en Español
                    </a>{' '}
                    oficial en PDF es la autoridad definitiva. Consulta siempre los materiales de DVS.
                  </>
                ) : (
                  'The official PDF Minnesota Manuals are the absolute authority. Always consult DVS materials.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Action */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-[10px] text-slate-500 leading-tight text-center sm:text-left">
            {isEs
              ? 'Al utilizar este simulador, aceptas estas condiciones de práctica no oficiales.'
              : 'By using this simulator site, you accept these non-official practice conditions.'}
          </p>
          <button
            onClick={onAccept}
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold font-display rounded-xl tracking-wider uppercase text-[10.5px] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer inline-flex items-center justify-center gap-1 shrink-0 active:scale-98"
          >
            <span>{isEs ? 'Aceptar y Estudiar' : 'Accept & Study'}</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
}
