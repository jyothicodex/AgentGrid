import React from "react";
import { Link } from "react-router-dom";
import { 
  Terminal, Target, Bot, FileText, Sparkles, UserCircle, 
  MessageSquare, Settings, Activity, BrainCircuit
} from "lucide-react";

export default function Agents() {
  const agents = [
    { name: "CEO Agent", role: "Chief Orchestrator", status: "Working...", desc: "Coordinates cross-functional tasks.", color: "text-indigo-500", bg: "bg-indigo-50", statusColor: "text-indigo-600", statusBg: "bg-indigo-100 border border-indigo-200", dotColor: "bg-indigo-500 animate-pulse" },
    { name: "Legal Agent", role: "General Counsel", status: "Working...", desc: "Drafts contracts and agreements.", color: "text-amber-500", bg: "bg-amber-50", statusColor: "text-amber-600", statusBg: "bg-amber-100 border border-amber-200", dotColor: "bg-amber-500 animate-pulse" },
    { name: "Hiring Agent", role: "Head of Talent", status: "Working...", desc: "Sources and screens candidates.", color: "text-purple-500", bg: "bg-purple-50", statusColor: "text-purple-600", statusBg: "bg-purple-100 border border-purple-200", dotColor: "bg-purple-500 animate-pulse" },
    { name: "Marketing Agent", role: "CMO", status: "Working...", desc: "Drafts GTM campaigns.", color: "text-pink-500", bg: "bg-pink-50", statusColor: "text-pink-600", statusBg: "bg-pink-100 border border-pink-200", dotColor: "bg-pink-500 animate-pulse" }
  ];

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
            <Link to="/roadmap" className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/80 active:scale-95 rounded-xl transition-all duration-300 hover:translate-x-2 text-sm font-semibold">
              <Target size={18} />
              <span>Roadmap</span>
            </Link>
            <div className="space-y-1">
              <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-indigo-600 text-white active:scale-95 rounded-xl shadow-md shadow-indigo-600/20 font-semibold transition-all duration-150">
                <Bot size={18} />
                <span>Agents</span>
              </a>
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
        
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 z-10 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 flex items-center">
              AI Agents Directory <BrainCircuit className="ml-2 text-indigo-500" size={24}/>
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">Manage and chat with your specialized team.</p>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {agents.map((agent, i) => (
              <Link to={`/chat/${agent.name.toLowerCase().split(' ')[0]}`} key={i} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden block">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 ${agent.bg} rounded-xl flex items-center justify-center border border-slate-100`}>
                    <Bot className={agent.color} size={28} />
                  </div>
                  <span className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full border ${agent.statusColor} ${agent.statusBg}`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${agent.dotColor}`}></span>
                    {agent.status}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{agent.name}</h3>
                <p className="text-xs font-semibold text-indigo-500 mb-2 uppercase tracking-wide">{agent.role}</p>
                <p className="text-sm text-slate-600 mb-6">{agent.desc}</p>
                
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
                    <Settings size={16} className="mr-1.5" /> Configure
                  </span>
                  <span className="flex items-center text-sm font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors group-active:scale-95">
                    <MessageSquare size={16} className="mr-1.5" /> Chat
                  </span>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </main>
    </div>
  );
}
