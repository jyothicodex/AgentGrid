import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bot, Brain, Workflow, Zap, Sparkles, X, ChevronDown, User, DollarSign, Scale } from "lucide-react";

export default function Landing() {
  const [showDocs, setShowDocs] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const agents = [
    {
      id: 1,
      title: 'CEO Agent',
      description: 'The central orchestrator. Give it a high-level goal, and it breaks it down into a dependency graph, assigning concurrent tasks to the rest of your autonomous team.',
      icon: <Brain size={24} />,
      color: 'from-indigo-500 to-indigo-900',
      iconColor: 'text-indigo-400',
      colSpan: 'md:col-span-2'
    },
    {
      id: 2,
      title: 'Finance Agent',
      description: 'Manages financial planning, budgeting, and forecasting. Helps you track runway and make smarter financial decisions.',
      icon: <DollarSign size={24} />,
      color: 'from-emerald-500 to-emerald-900',
      iconColor: 'text-emerald-400',
      colSpan: 'md:col-span-1'
    },
    {
      id: 3,
      title: 'Marketing Agent',
      description: 'Creates marketing strategies and content that drive growth. From campaign ideas to market analysis and positioning.',
      icon: <Workflow size={24} />,
      color: 'from-blue-500 to-blue-900',
      iconColor: 'text-blue-400',
      colSpan: 'md:col-span-1'
    },
    {
      id: 4,
      title: 'Legal Agent',
      description: 'Provides legal guidance and document support. From contracts to compliance and NDAs, we\'ve got you covered.',
      icon: <Scale size={24} />,
      color: 'from-amber-500 to-amber-900',
      iconColor: 'text-amber-400',
      colSpan: 'md:col-span-1'
    },
    {
      id: 5,
      title: 'Hiring Agent',
      description: 'Handles end-to-end recruitment for your startup. From job descriptions to interview questions and hiring docs.',
      icon: <User size={24} />,
      color: 'from-purple-500 to-purple-900',
      iconColor: 'text-purple-400',
      colSpan: 'md:col-span-1'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] flex flex-col items-center relative overflow-hidden font-sans selection:bg-indigo-500/30">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-[#050505] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] pointer-events-none" />

      {/* Glowing Orbs */}
      <div className="absolute top-[-20%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      {/* Floating Navbar */}
      <header className="fixed top-6 w-full max-w-4xl px-4 z-50">
        <div className="flex justify-between items-center bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-2xl shadow-2xl">
          <div className="flex items-center space-x-3 px-3">
            <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold shadow-lg">
              A
            </div>
            <span className="font-semibold tracking-tight text-white">AgentGrid</span>
          </div>
          <div className="flex items-center space-x-2 px-2">
            <Link to="/login" className="px-5 py-2 text-sm font-medium bg-white text-black hover:bg-gray-200 rounded-xl transition-all">
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-start text-center z-10 w-full px-4 pt-48 max-w-5xl relative">
        <h1 className="text-7xl md:text-[10rem] font-medium tracking-tighter mb-4 text-white leading-[0.9] drop-shadow-sm">
          AgentGrid
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-8 leading-relaxed font-light">
          The AI Operating System for Solo Founders.
        </p>

        <button 
          onClick={() => setShowDocs(!showDocs)}
          className="mb-16 h-12 px-8 flex items-center justify-center bg-white/5 border border-white/10 text-white rounded-xl font-medium transition-all hover:bg-white/10 shadow-lg backdrop-blur-sm cursor-pointer"
        >
          {showDocs ? "Hide Agents" : "View Documentation"}
        </button>
        
        {/* Responsive Bento/Accordion Agents List */}
        {showDocs && (
          <div className="w-full max-w-5xl mt-2 text-left relative z-20 pb-20 animate-slide-up">
            <div className="mb-12 text-center md:text-left">
              <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-2 block">The C-Suite</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Autonomous Agents</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto md:mx-0" />
            </div>

            {isMobile ? (
              // Mobile Accordion View
              <div className="flex flex-col gap-4">
                {agents.map((agent, i) => (
                  <div 
                    key={agent.id} 
                    className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 bg-[#0a0a0f] animate-slide-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <button
                      className="w-full flex items-center justify-between p-5 text-left"
                      onClick={() => setActiveIndex(activeIndex === agent.id ? null : agent.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center shadow-lg border border-white/5 ${agent.iconColor}`}>
                          {agent.icon}
                        </div>
                        <span className="font-semibold text-lg text-white">{agent.title}</span>
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center text-slate-400">
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-300 ${activeIndex === agent.id ? 'rotate-180' : ''}`} 
                        />
                      </div>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === agent.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-5 pt-0 text-slate-400 text-sm leading-relaxed">
                        {agent.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Desktop Bento Grid View
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
                {agents.map((agent, i) => (
                  <div 
                    key={agent.id}
                    onMouseEnter={() => setActiveIndex(agent.id)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`${agent.colSpan} animate-slide-up h-full relative group rounded-3xl border border-white/10 bg-[#0a0a0f] p-8 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.2)] hover:-translate-y-1 hover:border-white/20`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${agent.color}`} />
                    <div className="flex flex-col h-full z-10 relative">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} border border-white/10 flex items-center justify-center shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300 ${agent.iconColor}`}>
                        {agent.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{agent.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed flex-1">{agent.description}</p>
                      
                      <div className="mt-4 flex items-center text-indigo-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0 text-sm">
                        <Link to={`/chat/${agent.title.toLowerCase().split(' ')[0]}`} className="flex items-center hover:text-indigo-300">
                          Deploy Agent
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
