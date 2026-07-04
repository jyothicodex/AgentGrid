import React from "react";
import { Link } from "react-router-dom";
import { 
  Terminal, Target, Bot, CheckSquare, ShieldCheck, 
  BarChart3, Users, FileText, Calendar, Settings, Home, Sparkles, Map, Flag, CheckCircle2, Clock
} from "lucide-react";

export default function Roadmap() {
  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      {/* Sidebar - Same as Dashboard */}
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
            <Link to="/dashboard" className="flex items-center space-x-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm font-medium">
              <Terminal size={18} />
              <span>Dashboard</span>
            </Link>
            <a href="#" className="flex items-center space-x-3 px-4 py-2.5 bg-indigo-600 text-white rounded-lg shadow-md shadow-indigo-600/20 font-medium transition-all">
              <Target size={18} />
              <span>Roadmap</span>
            </a>
            <Link to="/agents" className="flex items-center space-x-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm font-medium">
              <Bot size={18} />
              <span>Agents</span>
            </Link>
            <Link to="/documents" className="flex items-center space-x-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm font-medium">
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
              Execution Roadmap <Map className="ml-2 text-indigo-500" size={24}/>
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">Your AI-generated path to launch.</p>
          </div>
          <button className="px-4 py-2 bg-indigo-50 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-100 transition-colors">
            Export PDF
          </button>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
          <div className="max-w-5xl mx-auto">
            
            <div className="space-y-8">
              
              {/* Phase 1 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                <div className="flex justify-between items-start mb-4 pl-4">
                  <div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">Phase 1 • Completed</span>
                    <h3 className="text-xl font-bold text-slate-800">Foundation & MVP</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-600">Weeks 1-2</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 mt-4">
                  <div className="flex items-start space-x-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-semibold text-sm text-slate-700">Market Validation</p>
                      <p className="text-xs text-slate-500">Analyze competitors and define USP.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-semibold text-sm text-slate-700">Financial Budgeting</p>
                      <p className="text-xs text-slate-500">Finance Agent finalized Q3 budget.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-white rounded-2xl border border-indigo-200 p-6 shadow-md relative overflow-hidden ring-1 ring-indigo-50">
                <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
                <div className="flex justify-between items-start mb-4 pl-4">
                  <div>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block flex items-center w-max"><Clock size={12} className="mr-1"/> Phase 2 • In Progress</span>
                    <h3 className="text-xl font-bold text-slate-800">Team & MVP Setup</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-indigo-600">Weeks 3-5</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 mt-4">
                  <div className="flex items-start space-x-3 bg-indigo-50/50 p-3 rounded-lg border border-indigo-100">
                    <div className="w-4 h-4 rounded-full border-2 border-indigo-500 mt-0.5 shrink-0"></div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800">MVP Architecture</p>
                      <p className="text-xs text-slate-500">CEO Agent coordinating tech stack.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-purple-50 p-3 rounded-lg border border-purple-200 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-400 opacity-10 animate-pulse rounded-lg"></div>
                    <div className="w-4 h-4 rounded-full border-2 border-purple-500 mt-0.5 shrink-0 bg-purple-100 flex items-center justify-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></span>
                    </div>
                    <div className="relative z-10">
                      <p className="font-semibold text-sm text-purple-800 flex items-center">
                        Hiring: Lead Developer <span className="ml-2 text-[9px] bg-purple-200 text-purple-700 px-1.5 py-0.5 rounded uppercase tracking-wider">Active</span>
                      </p>
                      <p className="text-xs text-purple-600 font-medium">Hiring Agent actively interviewing 3 candidates.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm relative overflow-hidden opacity-75">
                <div className="absolute top-0 left-0 w-2 h-full bg-slate-300"></div>
                <div className="flex justify-between items-start mb-4 pl-4">
                  <div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">Phase 3 • Upcoming</span>
                    <h3 className="text-xl font-bold text-slate-800">Go-To-Market & Launch</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-500">Weeks 6-8</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 mt-4">
                  <div className="flex items-start space-x-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300 mt-0.5 shrink-0"></div>
                    <div>
                      <p className="font-semibold text-sm text-slate-700">Beta Testing</p>
                      <p className="text-xs text-slate-500">Onboard 100 early access users.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300 mt-0.5 shrink-0"></div>
                    <div>
                      <p className="font-semibold text-sm text-slate-700">Marketing Campaign</p>
                      <p className="text-xs text-slate-500">Launch on ProductHunt & LinkedIn.</p>
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
