
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Users, DollarSign, Phone, Activity } from 'lucide-react';

const revData = [{name: 'Jan', val: 100}, {name: 'Feb', val: 5000}, {name: 'Mar', val: 1200000}];

export default function GodMode() {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <header className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
        <h1 className="text-3xl font-black text-neurus-emerald tracking-tighter">NEURUS <span className="text-white font-light">GOD MODE</span></h1>
        <div className="flex items-center gap-2 bg-emerald-900/20 px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-400 text-xs font-bold">
          <Activity size={14} /> SYSTEM OPTIMAL
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10">
          <p className="text-gray-500 text-xs uppercase mb-2">Total Users</p>
          <p className="text-4xl font-mono font-bold">1,000,000</p>
        </div>
        <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10">
          <p className="text-gray-500 text-xs uppercase mb-2">Revenue (PPP Adj)</p>
          <p className="text-4xl font-mono font-bold text-neurus-emerald">$1.2M</p>
        </div>
        <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10">
          <p className="text-gray-500 text-xs uppercase mb-2">Omni-Comm Status</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-green-500/20 text-green-500 text-[10px] rounded">VOICE: ON</span>
            <span className="px-2 py-1 bg-green-500/20 text-green-500 text-[10px] rounded">SMS: ON</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 h-[400px]">
          <h3 className="font-bold mb-6 flex gap-2"><DollarSign /> Revenue Trajectory</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip contentStyle={{background: '#000', border: '1px solid #333'}} />
              <Line type="monotone" dataKey="val" stroke="#10b981" strokeWidth={4} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-emerald-900/10 p-8 rounded-3xl border border-emerald-500/20">
          <h3 className="font-bold mb-6 flex gap-2 text-emerald-400"><Shield /> Manual Provisioning</h3>
          <div className="space-y-4">
            <input placeholder="User Email Address" className="w-full bg-black border border-white/10 p-4 rounded-xl text-white outline-none focus:border-emerald-500" />
            <select className="w-full bg-black border border-white/10 p-4 rounded-xl text-white outline-none">
              <option>Select Tier...</option>
              <option>Legacy Founder (1 Mo = 1 Yr)</option>
              <option>Sovereign (Quantum)</option>
              <option>Apex (Enterprise)</option>
            </select>
            <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-colors">
              ACTIVATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
