import React from "react";
import { Link } from "react-router-dom";
import { 
  Terminal, Target, Bot, CheckSquare, ShieldCheck, 
  BarChart3, Users, FileText, Calendar, Settings, Home, Sparkles, Map, Flag, CheckCircle2, Clock
} from "lucide-react";

export default function Roadmap() {
  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white/80 backdrop-blur-2xl border-r border-slate-200/80 flex flex-col justify-between z-20 shrink-0">
        <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
          <div className="p-6 flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-slate-800 font-extrabold text-lg leading-tight tracking-tight">AgentGrid</h1>
              <p className="text-[11px] text-indigo-500 font-bold uppercase tracking-wider">AI Chief of Staff</p>
            </div>
          </div>
          
          <nav className="flex-1 px-4 space-y-2 mt-2">
            <Link to="/dashboard" className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/80 active:scale-95 rounded-xl transition-all duration-300 hover:translate-x-2 text-sm font-semibold">
              <Terminal size={18} />
              <span>Dashboard</span>
            </Link>
            <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-indigo-600 text-white active:scale-95 rounded-xl shadow-md shadow-indigo-600/20 font-semibold transition-all duration-150">
              <Target size={18} />
              <span>Roadmap</span>
            </a>
            <div className="space-y-1">
              <Link to="/agents" className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/80 active:scale-95 rounded-xl transition-all duration-300 hover:translate-x-2 text-sm font-semibold">
                <Bot size={18} />
                <span>Agents</span>
              </Link>
              <div className="pl-11 pr-4 space-y-1 pt-1 pb-2">
                <Link to="/chat/ceo" className="block px-3 py-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/80 rounded-lg transition-all duration-300 hover:translate-x-1 text-xs font-bold">CEO Agent</Link>
                <Link to="/chat/legal" className="block px-3 py-2 text-slate-500 hover:text-amber-600 hover:bg-amber-50/80 rounded-lg transition-all duration-300 hover:translate-x-1 text-xs font-bold">Legal Agent</Link>
                <Link to="/chat/marketing" className="block px-3 py-2 text-slate-500 hover:text-pink-600 hover:bg-pink-50/80 rounded-lg transition-all duration-300 hover:translate-x-1 text-xs font-bold">Marketing Agent</Link>
                <Link to="/chat/hiring" className="block px-3 py-2 text-slate-500 hover:text-purple-600 hover:bg-purple-50/80 rounded-lg transition-all duration-300 hover:translate-x-1 text-xs font-bold">Hiring Agent</Link>
              </div>
            </div>
            <Link to="/documents" className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/80 active:scale-95 rounded-xl transition-all duration-300 hover:translate-x-2 text-sm font-semibold">
              <FileText size={18} />
              <span>Documents</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-white">
        
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 z-10 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 flex items-center">
              Strategic Roadmap <Map className="ml-2 text-indigo-500" size={24}/>
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">24-Month Product Vision</p>
          </div>
          <button className="px-4 py-2 bg-indigo-50 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-100 transition-colors">
            Export PDF
          </button>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
          <div className="max-w-5xl mx-auto">
            
            <div className="space-y-8 relative">
              
              {/* Vertical connecting line in background (Optional but looks cool) */}
              <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-emerald-400 via-indigo-500 to-slate-200 -z-10 opacity-30 hidden md:block"></div>
              
              {/* Phase 1 */}
              <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-400 group-hover:w-2 transition-all duration-300"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full uppercase tracking-widest mb-3 inline-block shadow-sm border border-emerald-100">Phase 1 • Current</span>
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Foundation (Q3-Q4)</h3>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <p className="text-lg font-bold text-slate-400">2026</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                  <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300">
                    <div className="bg-emerald-50 p-2 rounded-xl text-emerald-500 shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">C-Suite Architecture</p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">Deploy AI CEO, Marketing, Legal, & Hiring.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300">
                    <div className="bg-emerald-50 p-2 rounded-xl text-emerald-500 shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Multi-Agent Orchestration</p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">CEO Agent delegating cross-functional tasks.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-white rounded-3xl border border-indigo-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden ring-4 ring-indigo-50/50 group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500 group-hover:w-2 transition-all duration-300"></div>
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 relative z-10">
                  <div>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full uppercase tracking-widest mb-3 inline-flex items-center shadow-sm border border-indigo-100">
                      <Clock size={14} className="mr-1.5"/> Phase 2 • In Progress
                    </span>
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Live Execution (Q1-Q2)</h3>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <p className="text-lg font-bold text-indigo-400">2027</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2 relative z-10">
                  <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-indigo-50 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300">
                    <div className="bg-indigo-50 p-2 rounded-xl text-indigo-500 shrink-0">
                      <div className="w-5 h-5 rounded-full border-2 border-indigo-500"></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Native API Integrations</p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">Stripe, X, LinkedIn, DocuSign live hooks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 bg-gradient-to-br from-indigo-50 to-white p-5 rounded-2xl border border-indigo-100 shadow-md relative overflow-hidden group/card hover:shadow-lg hover:border-indigo-300 transition-all duration-300">
                    <div className="absolute inset-0 bg-indigo-400 opacity-5 group-hover/card:opacity-10 transition-opacity duration-500"></div>
                    <div className="bg-white p-2 rounded-xl text-indigo-500 shrink-0 shadow-sm relative z-10">
                      <div className="w-5 h-5 rounded-full border-2 border-indigo-500 flex items-center justify-center">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <p className="font-bold text-indigo-900 flex items-center">
                        Automated Workflows 
                        <span className="ml-2 text-[9px] bg-indigo-200 text-indigo-700 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Active</span>
                      </p>
                      <p className="text-sm text-indigo-600 mt-1 leading-relaxed font-medium">Agents executing without human approval.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden opacity-80 hover:opacity-100 group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-300 group-hover:w-2 transition-all duration-300"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full uppercase tracking-widest mb-3 inline-block shadow-sm border border-slate-200">Phase 3 • Upcoming</span>
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Autonomous Enterprise</h3>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <p className="text-lg font-bold text-slate-400">2028+</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                  <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
                    <div className="bg-slate-50 p-2 rounded-xl text-slate-400 shrink-0">
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700">B2B Agent Economy</p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">Agent-to-Agent negotiations and contracts.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
                    <div className="bg-slate-50 p-2 rounded-xl text-slate-400 shrink-0">
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700">Self-Healing Workflows</p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">Proactive anomaly detection and resolution.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
