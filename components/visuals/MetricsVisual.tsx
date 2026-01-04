import React from 'react';
import { AlertTriangle, CheckCircle, DollarSign } from 'lucide-react';

export const MetricsVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-orange-400 rounded-2xl blur opacity-30 animate-pulse"></div>
        <div className="relative glass-card rounded-xl p-5 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Health Monitor</h4>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] text-green-400 font-mono">ONLINE</span>
                </div>
            </div>
            
            <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-green-900/30 text-green-400">
                            <CheckCircle size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400">Status da Conta</div>
                            <div className="text-sm font-bold text-white">Ativa (ID: 9821...)</div>
                        </div>
                    </div>
                    <span className="text-xs text-green-400 font-medium">OK</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-brand-900/30 text-brand-400">
                            <DollarSign size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400">Saldo Disponível</div>
                            <div className="text-sm font-bold text-white">R$ 1.250,00</div>
                        </div>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">Estável</span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-red-500/30 relative overflow-hidden">
                     <div className="absolute inset-0 bg-red-500/5 animate-pulse"></div>
                     <div className="flex items-center gap-3 relative z-10">
                        <div className="p-2 rounded bg-red-900/30 text-red-400">
                            <AlertTriangle size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] text-red-300">Risco Detectado</div>
                            <div className="text-sm font-bold text-white">Campanha #02 Pausada</div>
                        </div>
                    </div>
                    <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded border border-red-500/30">ALERT SENT</span>
                </div>
            </div>
        </div>
    </div>
  );
};