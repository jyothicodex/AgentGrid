import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  Terminal, Target, Bot, FileText, Sparkles, 
  Send, ArrowLeft, Loader2, User, Paperclip, CheckCircle2,
  Copy, Download, Globe, Edit3, BarChart3, Clock, Briefcase, Zap
} from "lucide-react";

export default function AgentChat() {
  const { agentId } = useParams();
  
  const [messages, setMessages] = useState<any[]>([
    { role: "agent", type: "text", content: `Hello! I am your AI Head of Talent. How can I help you grow the team today?` }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, analysisStep]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: "user", type: "text", content: userMsg }]);
    setInput("");
    setIsTyping(true);
    setAnalysisStep(1);

    // Simulate analysis steps
    setTimeout(() => setAnalysisStep(2), 1500);
    setTimeout(() => setAnalysisStep(3), 3000);

    setTimeout(() => {
      setIsTyping(false);
      setAnalysisStep(0);
      
      if (userMsg.toLowerCase().includes("java")) {
        setMessages(prev => [...prev, { role: "agent", type: "rich_hiring" }]);
      } else {
        setMessages(prev => [...prev, { 
          role: "agent", type: "text",
          content: "I'm analyzing the talent market for that role right now. I will draft a job description and prepare a list of top candidates for you to review shortly." 
        }]);
      }
    }, 4500);
  };

  const renderRichHiring = () => {
    return (
      <div className="w-full mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center space-x-2 mb-4 text-green-600 font-semibold bg-green-50 px-3 py-1.5 w-max rounded-lg border border-green-200">
          <CheckCircle2 size={18} />
          <span>Done! Generated Job Description</span>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          {/* Left Panel - JD */}
          <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-100 p-6">
              <h2 className="text-2xl font-bold text-slate-800">Java Full Stack Developer</h2>
              <div className="flex flex-wrap gap-3 mt-3 text-sm font-medium text-slate-600">
                <span className="flex items-center"><Globe size={16} className="mr-1.5 text-indigo-500"/> Hyderabad (Hybrid)</span>
                <span className="flex items-center"><Briefcase size={16} className="mr-1.5 text-indigo-500"/> Full-Time</span>
                <span className="flex items-center"><Clock size={16} className="mr-1.5 text-indigo-500"/> 0-2 Years</span>
              </div>
            </div>
            
            <div className="p-6 prose prose-slate prose-sm max-w-none text-slate-700">
              <h3 className="text-lg font-bold text-slate-800 mb-2">About Us</h3>
              <p className="mb-4">AgentGrid is building an AI-powered Startup Operating System that helps founders automate hiring, finance, legal, marketing, and product management using intelligent AI agents.</p>
              <p className="mb-6">We are looking for a passionate Java Full Stack Developer who enjoys building scalable web applications and solving real-world problems.</p>

              <h3 className="text-lg font-bold text-slate-800 mb-2">Responsibilities</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>Design and develop backend APIs using Java and Spring Boot</li>
                <li>Build responsive frontend applications using React.js</li>
                <li>Develop REST APIs</li>
                <li>Work with PostgreSQL/MySQL databases</li>
                <li>Integrate third-party APIs</li>
                <li>Write clean, maintainable code</li>
                <li>Participate in code reviews</li>
                <li>Collaborate with product and design teams</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-800 mb-2">Required Skills</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Java', 'Spring Boot', 'React.js', 'HTML', 'CSS', 'JavaScript', 'REST APIs', 'MySQL', 'Git', 'Docker (Preferred)'].map(skill => (
                  <span key={skill} className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-semibold border border-indigo-100 flex items-center">
                    <CheckCircle2 size={12} className="mr-1" /> {skill}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">Nice to Have</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>AWS</li>
                <li>Kubernetes</li>
                <li>Redis</li>
                <li>CI/CD</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-800 mb-2">Education</h3>
              <p className="mb-6">B.Tech/B.E in Computer Science or related field</p>

              <h3 className="text-lg font-bold text-slate-800 mb-2">What We Offer</h3>
              <ul className="list-none mb-6 space-y-2">
                <li className="flex items-center"><CheckCircle2 size={16} className="text-green-500 mr-2" /> Competitive Salary</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-green-500 mr-2" /> Learning Budget</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-green-500 mr-2" /> Flexible Work Culture</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-green-500 mr-2" /> Health Benefits</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-green-500 mr-2" /> Opportunity to build AI products used globally</li>
              </ul>

              <p className="font-bold text-slate-800 mt-8 pt-6 border-t border-slate-100">Apply Now: <a href="mailto:careers@agentgrid.ai" className="text-indigo-600 hover:underline">careers@agentgrid.ai</a></p>
            </div>
          </div>

          {/* Right Panel - Insights */}
          <div className="w-full xl:w-80 space-y-6">
            <div className="bg-indigo-600 rounded-2xl p-6 shadow-lg shadow-indigo-600/20 text-white relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              <h3 className="text-lg font-bold mb-6 relative z-10 flex items-center">
                <BarChart3 className="mr-2" size={20}/> Hiring Insights
              </h3>
              
              <div className="space-y-4 relative z-10">
                <div>
                  <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-1">Market Salary</p>
                  <p className="text-2xl font-bold">₹6L - ₹10L</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-1">Availability</p>
                    <p className="text-lg font-bold">High</p>
                  </div>
                  <div>
                    <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-1">Competition</p>
                    <p className="text-lg font-bold">Medium</p>
                  </div>
                </div>
                <div>
                  <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-1">Est. Hiring Time</p>
                  <p className="text-lg font-bold">18 Days</p>
                </div>
                <div className="pt-4 border-t border-indigo-500/50">
                  <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wider mb-2">AI Match Score</p>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold text-green-400">95%</p>
                    <Zap className="text-yellow-400" size={28} />
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
              <button className="flex items-center justify-center space-x-2 w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl transition border border-slate-200 active:scale-95">
                <Copy size={18} /> <span>Copy JD</span>
              </button>
              <button className="flex items-center justify-center space-x-2 w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl transition border border-slate-200 active:scale-95">
                <Download size={18} /> <span>Download PDF</span>
              </button>
              <button className="flex items-center justify-center space-x-2 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-md shadow-indigo-600/20 active:scale-95">
                <Globe size={18} /> <span>Publish Job</span>
              </button>
              <button className="flex items-center justify-center space-x-2 w-full py-3 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold rounded-xl transition border border-purple-200 active:scale-95 mt-2">
                <Edit3 size={18} /> <span>Edit with AI</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
            <Link to="/agents" className="flex items-center space-x-3 px-4 py-2.5 bg-indigo-600 text-white rounded-lg shadow-md shadow-indigo-600/20 font-medium transition-all">
              <Bot size={18} />
              <span>Agents</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col h-full bg-white relative">
        
        {/* Chat Header */}
        <header className="h-16 bg-white border-b border-slate-100 flex items-center px-6 z-10 shrink-0 shadow-sm">
          <Link to="/agents" className="text-slate-400 hover:text-indigo-600 transition-colors mr-4">
            <ArrowLeft size={20} />
          </Link>
          <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-3">
            <Bot size={18} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800 leading-tight capitalize">{agentId || 'Hiring'} Agent</h2>
            <p className="text-xs text-green-500 font-medium flex items-center">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span> Online
            </p>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-end space-x-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                
                {msg.role === 'agent' && (
                  <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center shrink-0 mb-1 border border-purple-200">
                    <Bot size={16} />
                  </div>
                )}

                {msg.type === 'text' ? (
                  <div className={`max-w-[75%] rounded-2xl px-5 py-3.5 shadow-sm text-[15px] leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
                  }`}>
                    {msg.content}
                  </div>
                ) : (
                  renderRichHiring()
                )}

                {msg.role === 'user' && (
                  <div className="w-8 h-8 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center shrink-0 mb-1 border border-slate-300">
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-end space-x-3 justify-start">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center shrink-0 mb-1 border border-purple-200">
                  <Bot size={16} />
                </div>
                
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-5 shadow-sm min-w-[280px]">
                  <p className="text-sm font-semibold text-slate-800 mb-4 flex items-center">
                    <Loader2 size={16} className="animate-spin mr-2 text-indigo-600" />
                    Analyzing startup requirements...
                  </p>
                  
                  <div className="space-y-2">
                    <div className={`flex items-center text-sm transition-opacity duration-300 ${analysisStep >= 1 ? 'opacity-100 text-green-600 font-medium' : 'opacity-0 text-slate-400'}`}>
                      <CheckCircle2 size={16} className="mr-2" /> Understanding role
                    </div>
                    <div className={`flex items-center text-sm transition-opacity duration-300 ${analysisStep >= 2 ? 'opacity-100 text-green-600 font-medium' : 'opacity-0 text-slate-400'}`}>
                      <CheckCircle2 size={16} className="mr-2" /> Matching industry standards
                    </div>
                    <div className={`flex items-center text-sm transition-opacity duration-300 ${analysisStep >= 3 ? 'opacity-100 text-green-600 font-medium' : 'opacity-0 text-slate-400'}`}>
                      <CheckCircle2 size={16} className="mr-2" /> Creating job description
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100 shrink-0 z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-center">
              <button className="absolute left-3 text-slate-400 hover:text-indigo-500 transition-colors">
                <Paperclip size={20} />
              </button>
              <textarea 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Message your Hiring Agent..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-12 pr-14 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-slate-700 placeholder:text-slate-400 resize-none h-[54px] min-h-[54px] max-h-[150px]"
                rows={1}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-2 bottom-2 w-10 h-10 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-xl flex items-center justify-center transition-colors shadow-sm"
              >
                <Send size={18} className="ml-1" />
              </button>
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">
              Agents can make mistakes. Always review critical decisions.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
