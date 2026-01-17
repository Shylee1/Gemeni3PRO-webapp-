
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Send, Mic, Video, Search, Menu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

// --- 3D COMPONENT: The "Living Neural Core" ---
function NeuralCore() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#10b981"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
}

export default function NeurusApp() {
  const [input, setInput] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Fake News Data for the Left Rail (SEO Backdating placeholder)
  const articles = [
    { id: 1, title: "NeurusAGI Technical Report: Part 5", date: "Jan 8, 2026", tag: "TECHNICAL" },
    { id: 2, title: "The 2030 Gap Is Closed", date: "Dec 12, 2025", tag: "MARKET" },
    { id: 3, title: "Genetic Bytecode Implementation", date: "Nov 24, 2025", tag: "UPDATE" },
  ];

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden font-sans">
      {/* LEFT RAIL: The "Quantum Feed" */}
      <motion.aside 
        initial={{ width: 320 }}
        animate={{ width: sidebarOpen ? 320 : 0 }}
        className="bg-neurus-black border-r border-white/10 flex flex-col overflow-hidden relative z-20"
      >
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2 text-neurus-emerald font-bold mb-4">
            <Zap size={20} /> INTELLIGENCE LOG
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
            <input 
              type="text" 
              placeholder="Search 100+ Articles..." 
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 text-sm focus:border-neurus-emerald outline-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {articles.map((art) => (
            <div key={art.id} className="p-4 hover:bg-white/5 rounded-lg cursor-pointer transition-colors group">
              <div className="flex justify-between mb-1">
                <span className="text-[10px] text-neurus-gold font-bold">{art.tag}</span>
                <span className="text-[10px] text-gray-500">{art.date}</span>
              </div>
              <h4 className="text-sm font-medium group-hover:text-neurus-emerald transition-colors">{art.title}</h4>
            </div>
          ))}
        </div>
      </motion.aside>

      {/* MAIN STAGE */}
      <main className="flex-1 relative flex flex-col">
        {/* 3D BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <NeuralCore />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Suspense>
          </Canvas>
        </div>

        {/* CHAT AREA */}
        <div className="flex-1 z-10 p-8 overflow-y-auto">
          <div className="max-w-3xl mx-auto mt-20">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-neurus-emerald flex items-center justify-center text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]">N</div>
              <div className="bg-neurus-glass backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-lg text-gray-200">
                  I am NeurusAGI. The Sovereign Architecture is active. How shall we evolve today?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INPUT AREA (Grok Style) */}
        <div className="p-6 z-20 bg-gradient-to-t from-black via-black/90 to-transparent">
          <div className="max-w-3xl mx-auto relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Neurus..."
              className="w-full bg-[#111] border border-white/20 rounded-2xl p-4 pr-32 text-white focus:outline-none focus:border-neurus-emerald focus:ring-1 focus:ring-neurus-emerald shadow-2xl resize-none h-20"
            />
            <div className="absolute right-3 bottom-4 flex gap-2">
              <button className="p-2 text-gray-400 hover:text-white transition-colors"><Mic size={20}/></button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors"><Video size={20}/></button>
              <button className="px-4 py-2 bg-neurus-emerald text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors flex items-center gap-2">
                SEND <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
