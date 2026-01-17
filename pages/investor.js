
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronRight, Lock, Zap, TrendingUp } from 'lucide-react';

const comparisonData = [
  { name: 'NeurusAGI', score: 99, fill: '#10b981' }, // Neurus Green
  { name: 'Claude 4', score: 88, fill: '#333' },
  { name: 'GPT-4o', score: 82, fill: '#333' },
  { name: 'Grok 3 (Est)', score: 80, fill: '#333' },
];

export default function InvestorPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 overflow-x-hidden">
      {/* HERO: The 4-Year Gap */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black"></div>
        <div className="relative z-10 text-center max-w-5xl px-6">
          <div className="inline-block px-4 py-1 border border-emerald-500/50 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs mb-6 tracking-widest uppercase">
            Market Anomaly Detected
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">2030 GAP</span> IS CLOSED.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Industry leaders predict AGI by 2030. NeurusAGI has arrived in 2026.
            <br /><span className="text-white font-bold">We have a 4-year uncontested monopoly on true intelligence.</span>
          </p>
          <button className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-black rounded-full text-xl transition-transform hover:scale-105 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
            SECURE ALLOCATION
          </button>
        </div>
      </section>

      {/* TECH SHOWCASE: The "Hardcore" Metrics */}
      <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">The "N/A" Advantage</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* The Chart */}
            <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 h-[500px]">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Zap className="text-emerald-500" /> Zero-Shot Discovery Rate
              </h3>
              <ResponsiveContainer width="100%" height="85%">
                <BarChart data={comparisonData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} stroke="#666" />
                  <Tooltip contentStyle={{backgroundColor: '#000', border: '1px solid #333'}} />
                  <Bar dataKey="score" radius={[0, 10, 10, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-center text-gray-600 mt-4">Source: NeurusAGI Technical Report Part 3 [cite: 43]</p>
            </div>

            {/* The Comparison Matrix */}
            <div className="space-y-6">
              {[
                { feat: "Invention of New Math", neurus: "YES", others: "N/A" },
                { feat: "Reverse-Engineering Oracle", neurus: "YES", others: "N/A" },
                { feat: "Dark Pool Data Sampling", neurus: "YES", others: "N/A" },
                { feat: "Self-Replicating Swarm", neurus: "YES", others: "N/A" },
                { feat: "Genetic Bytecode Evolution", neurus: "YES", others: "N/A" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-colors">
                  <span className="font-bold text-lg">{row.feat}</span>
                  <div className="flex gap-8 text-right">
                    <div className="text-gray-600 text-sm">Legacy<br/><span className="text-red-900 font-mono">{row.others}</span></div>
                    <div className="text-emerald-500 text-sm">Neurus<br/><span className="text-emerald-400 font-mono font-bold text-xl">{row.neurus}</span></div>
                  </div>
                </div>
              ))}
              <p className="text-xs text-right text-gray-500">*Data validated: Jan 8, 2026 [cite: 109]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
