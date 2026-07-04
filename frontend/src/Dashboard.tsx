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
            <a href="#" className="flex items-center space-x-3 px-4 py-2.5 bg-indigo-600 text-white hover:bg-indigo-500 active:scale-95 rounded-lg shadow-md shadow-indigo-600/20 font-medium transition-all duration-150">
              <Terminal size={18} />
              <span>Dashboard</span>
            </a>
            <Link to="/roadmap" className="flex items-center space-x-3 px-4 py-2.5 text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 rounded-lg transition-all duration-150 text-sm font-medium">
              <Target size={18} />
              <span>Roadmap</span>
            </Link>
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
              
              {/* CEO Agent - Idle */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-slate-100 text-slate-500 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  <span>Idle</span>
                </div>
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100 grayscale opacity-70">
                  <Bot className="text-slate-400" size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-800">CEO Agent</h4>
                <p className="text-sm text-slate-500 mt-1">Strategic Leadership</p>
              </div>

              {/* Hiring Agent - Working */}
              <div className="bg-white p-6 rounded-2xl border-2 border-purple-500 shadow-md shadow-purple-500/10 flex flex-col items-center justify-center text-center relative overflow-hidden ring-4 ring-purple-50">
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-purple-200">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-pulse"></span>
                  <span>Working...</span>
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 relative">
                  <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                  <Bot className="text-purple-600 relative z-10 animate-bounce" size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Hiring Agent</h4>
                <p className="text-sm text-purple-600 font-medium mt-1">Sourcing candidates...</p>
              </div>

              {/* Finance Agent - Idle */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-slate-100 text-slate-500 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  <span>Idle</span>
                </div>
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100 grayscale opacity-70">
                  <Bot className="text-slate-400" size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Finance Agent</h4>
                <p className="text-sm text-slate-500 mt-1">Financial Planning</p>
              </div>

              {/* Marketing Agent - Idle */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="absolute top-3 right-3 flex items-center space-x-1 bg-slate-100 text-slate-500 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                  <span>Idle</span>
                </div>
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100 grayscale opacity-70">
                  <Bot className="text-slate-400" size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Marketing Agent</h4>
                <p className="text-sm text-slate-500 mt-1">Growth & Campaigns</p>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
