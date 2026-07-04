import React from "react";
import { Link } from "react-router-dom";
import { 
  Terminal, Target, Bot, FileText, Sparkles, TrendingUp,
  CheckCircle2, Clock, Activity, Users, Zap, AlertCircle
} from "lucide-react";

export default function Dashboard() {
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
            <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-indigo-600 text-white active:scale-95 rounded-xl shadow-md shadow-indigo-600/20 font-semibold transition-all duration-150">
              <Terminal size={18} />
              <span>Dashboard</span>
            </a>
            <Link to="/roadmap" className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/80 active:scale-95 rounded-xl transition-all duration-300 hover:translate-x-2 text-sm font-semibold">
              <Target size={18} />
              <span>Roadmap</span>
            </Link>
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
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50">
        
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 z-10 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Hello, Jyothi! 👋</h2>
            <p className="text-sm text-slate-500 mt-0.5">Here's what your AI team is working on today.</p>
          </div>
          
          {/* User Profile / Edit Section */}
          <div className="flex items-center space-x-3 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-200 group">
            <div className="text-right">
              <p className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">Jyothi</p>
              <p className="text-xs text-slate-400 font-medium flex items-center justify-end">
                Edit Profile
              </p>
            </div>
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-lg border border-indigo-200">
              J
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Active Agents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* CEO Agent - Working */}
              <Link to="/chat/ceo" className="bg-white p-6 rounded-2xl border-2 border-indigo-500 shadow-md shadow-indigo-500/10 flex flex-col items-center justify-center text-center relative overflow-hidden ring-4 ring-indigo-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group block cursor-pointer">
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-indigo-200">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse"></span>
                  <span>Working...</span>
                </div>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 relative group-hover:scale-110 transition-transform">
                  <div className="absolute inset-0 bg-indigo-400 rounded-full animate-ping opacity-20"></div>
                  <Bot className="text-indigo-600 relative z-10 animate-bounce" size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-800">CEO Agent</h4>
                <p className="text-sm text-indigo-600 font-medium mt-1">Orchestrating agents...</p>
              </Link>

              {/* Hiring Agent - Working */}
              <Link to="/chat/hiring" className="bg-white p-6 rounded-2xl border-2 border-purple-500 shadow-md shadow-purple-500/10 flex flex-col items-center justify-center text-center relative overflow-hidden ring-4 ring-purple-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group block cursor-pointer">
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-purple-200">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-pulse"></span>
                  <span>Working...</span>
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 relative group-hover:scale-110 transition-transform">
                  <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                  <Bot className="text-purple-600 relative z-10 animate-bounce" size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Hiring Agent</h4>
                <p className="text-sm text-purple-600 font-medium mt-1">Sourcing candidates...</p>
              </Link>

              {/* Legal Agent - Working */}
              <Link to="/chat/legal" className="bg-white p-6 rounded-2xl border-2 border-amber-500 shadow-md shadow-amber-500/10 flex flex-col items-center justify-center text-center relative overflow-hidden ring-4 ring-amber-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group block cursor-pointer">
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-amber-100 text-amber-700 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-amber-200">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse"></span>
                  <span>Working...</span>
                </div>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 relative group-hover:scale-110 transition-transform">
                  <div className="absolute inset-0 bg-amber-400 rounded-full animate-ping opacity-20"></div>
                  <Bot className="text-amber-600 relative z-10 animate-bounce" size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Legal Agent</h4>
                <p className="text-sm text-amber-600 font-medium mt-1">Drafting contract...</p>
              </Link>

              {/* Marketing Agent - Working */}
              <Link to="/chat/marketing" className="bg-white p-6 rounded-2xl border-2 border-pink-500 shadow-md shadow-pink-500/10 flex flex-col items-center justify-center text-center relative overflow-hidden ring-4 ring-pink-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group block cursor-pointer">
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-pink-100 text-pink-700 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-pink-200">
                  <span className="w-1.5 h-1.5 bg-pink-600 rounded-full animate-pulse"></span>
                  <span>Working...</span>
                </div>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 relative group-hover:scale-110 transition-transform">
                  <div className="absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-20"></div>
                  <Bot className="text-pink-600 relative z-10 animate-bounce" size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Marketing Agent</h4>
                <p className="text-sm text-pink-600 font-medium mt-1">Generating campaign...</p>
              </Link>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
