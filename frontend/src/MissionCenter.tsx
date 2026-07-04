import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, CheckCircle2, Loader2, ArrowRight, 
  Terminal, Target, Bot, FileText, Home, ClipboardList
} from "lucide-react";

export default function MissionCenter() {
  const [mode, setMode] = useState<'input' | 'approval' | 'execution' | 'complete'>('input');
  const [stage, setStage] = useState(0);
  const [goal, setGoal] = useState("");

  const handleGeneratePlan = async () => {
    setMode('approval');
  };

  const handleApprove = () => {
    setMode('execution');
  };

  useEffect(() => {
    if (mode === 'execution') {
      const timers = [
        setTimeout(() => setStage(1), 2000), 
        setTimeout(() => setStage(2), 4500), 
        setTimeout(() => setStage(3), 7000), 
        setTimeout(() => setStage(4), 9500), 
        setTimeout(() => { setStage(5); setMode('complete'); }, 12000), 
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [mode]);

  const agents = [
    { name: "CEO Agent", role: "Thinking...", action: "Decomposing startup idea into actionable roadmap" },
    { name: "Product Agent", role: "Creating MVP...", action: "Drafting Product Requirements Document (PRD)" },
    { name: "Finance Agent", role: "Calculating Budget...", action: "Estimating burn rate and runway" },
    { name: "Marketing Agent", role: "Creating GTM...", action: "Developing Go-To-Market launch strategy" },
    { name: "Legal Agent", role: "Generating Terms...", action: "Drafting NDA and Privacy Policy" },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F172A] text-slate-300 flex flex-col justify-between shadow-2xl z-20 shrink-0">
        <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
          <div className="p-6 flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">AgentGrid</h1>
              <p className="text-xs text-indigo-400 font-medium">AI Chief of Staff</p>
            </div>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            <Link to="/dashboard" className="flex items-center space-x-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 rounded-lg transition-all duration-150 text-sm font-medium">
              <Terminal size={18} />
              <span>Dashboard</span>
            </Link>
            <a href="#" className="flex items-center space-x-3 px-4 py-2.5 bg-indigo-600 text-white rounded-lg shadow-md shadow-indigo-600/20 font-medium transition-all">
              <Target size={18} />
              <span>Mission Center</span>
            </a>
            <Link to="/agents" className="flex items-center space-x-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 rounded-lg transition-all duration-150 text-sm font-medium">
              <Bot size={18} />
              <span>Agents</span>
            </Link>
            <Link to="/documents" className="flex items-center space-x-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 rounded-lg transition-all duration-150 text-sm font-medium">
              <FileText size={18} />
              <span>Documents</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="flex-1 flex flex-col items-center justify-center p-12 z-10 overflow-y-auto">
          <div className="w-full max-w-2xl bg-white rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100">
            
            {mode === 'input' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center space-x-3 mb-6 justify-center">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                    <Sparkles size={24} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-slate-800 text-center mb-2">Mission Center</h2>
                <p className="text-slate-500 text-center mb-8">What would you like your AI team to achieve today?</p>
                <div className="bg-slate-50/50 rounded-2xl border border-slate-200 p-5 mb-6 min-h-[160px]">
                  <textarea 
                    className="w-full h-full bg-transparent resize-none focus:outline-none text-base text-slate-700 placeholder:text-slate-400"
                    placeholder="Example: Launch an AI travel startup in 20 days and extend runway by 6 months..."
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                  ></textarea>
                </div>
                <button 
                  onClick={handleGeneratePlan}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-lg font-semibold flex items-center justify-center space-x-2 transition shadow-lg shadow-indigo-600/25 active:scale-[0.98]"
                >
                  <span>Draft Execution Plan</span>
                  <ClipboardList size={20} />
                </button>
              </div>
            )}

            {mode === 'approval' && (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <div className="text-center mb-8">
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block border border-orange-100">Approval Required</span>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Review Execution Plan</h2>
                  <p className="text-slate-500">The CEO Agent has proposed the following delegation strategy.</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <p className="text-sm font-semibold text-slate-700 mb-1">Product Agent</p>
                    <p className="text-xs text-slate-500">Will draft PRD and set up frontend architecture.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <p className="text-sm font-semibold text-slate-700 mb-1">Finance Agent</p>
                    <p className="text-xs text-slate-500">Will calculate 6-month runway and budget allocation.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <p className="text-sm font-semibold text-slate-700 mb-1">Legal Agent</p>
                    <p className="text-xs text-slate-500">Will generate founder IP agreements.</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button onClick={() => setMode('input')} className="flex-1 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-semibold transition active:scale-[0.98]">
                    Modify Goal
                  </button>
                  <button onClick={handleApprove} className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 transition shadow-lg shadow-green-600/25 active:scale-[0.98]">
                    <span>Approve & Execute</span>
                    <CheckCircle2 size={18} />
                  </button>
                </div>
              </div>
            )}

            {(mode === 'execution' || mode === 'complete') && (
              <div className="animate-in fade-in duration-500">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">Executing Mission</h2>
                  <p className="text-slate-500">Your AI Agents are currently executing the approved plan...</p>
                </div>
                <div className="space-y-6 relative">
                  <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-100 z-0"></div>
                  {agents.map((agent, index) => {
                    const isActive = stage === index;
                    const isCompleted = stage > index;
                    const isPending = stage < index;

                    return (
                      <div key={agent.name} className={`flex items-start space-x-6 relative z-10 transition-all duration-500 ${isPending ? 'opacity-40' : 'opacity-100'}`}>
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border-2 transition-all duration-500 ${
                          isCompleted ? 'bg-green-50 border-green-200 text-green-500' : 
                          isActive ? 'bg-indigo-50 border-indigo-200 text-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.2)]' : 
                          'bg-white border-slate-200 text-slate-400'
                        }`}>
                          {isCompleted ? <CheckCircle2 size={24} /> : 
                           isActive ? <Loader2 size={24} className="animate-spin" /> : 
                           <Bot size={24} />}
                        </div>
                        
                        <div className={`flex-1 pt-1 ${isActive ? 'transform translate-x-2' : ''} transition-all duration-500`}>
                          <h4 className={`text-lg font-bold ${isCompleted ? 'text-slate-700' : isActive ? 'text-indigo-600' : 'text-slate-500'}`}>
                            {agent.name}
                          </h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`text-sm font-semibold px-2 py-0.5 rounded-md ${
                              isCompleted ? 'bg-green-100 text-green-700' : 
                              isActive ? 'bg-indigo-100 text-indigo-700 animate-pulse' : 
                              'bg-slate-100 text-slate-500'
                            }`}>
                              {isCompleted ? 'Task Complete' : agent.role}
                            </span>
                            <span className="text-sm text-slate-500">{agent.action}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className={`mt-12 pt-8 border-t border-slate-100 transition-all duration-1000 transform ${stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                  <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                      <Sparkles size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Mission Complete!</h3>
                    <p className="text-slate-600 mb-6">Your startup roadmap, budget, and legal documents are ready.</p>
                    <div className="flex justify-center space-x-4">
                      <Link to="/documents" className="px-6 py-3 bg-white text-slate-700 border border-slate-200 font-semibold rounded-xl hover:bg-slate-50 transition shadow-sm">
                        View Documents
                      </Link>
                      <Link to="/roadmap" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition shadow-md shadow-indigo-600/20 flex items-center space-x-2">
                        <span>Go to Roadmap</span>
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}
