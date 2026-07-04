import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  Terminal, Target, Bot, FileText, Sparkles, 
  Send, ArrowLeft, Loader2, User, Paperclip, CheckCircle2,
  Copy, Globe, Edit3, BarChart3, Clock, Briefcase, Zap, Download, Scale, FileSignature,
  Image as ImageIcon, Share2, Tag, Gift, PieChart, TrendingDown, DollarSign, ServerCog, Check, Workflow
} from "lucide-react";

const quickPrompts: Record<string, string[]> = {
  ceo: [
    "Complete Company Setup (Hire, Legal, Market)",
    "Hire a developer and post on twitter",
    "Onboard a new vendor and draft an NDA",
    "Launch product on ProductHunt with a flash sale",
    "Draft investor terms and PR release",
    "Full rebrand (Hiring + Marketing + CEO Strategy)"
  ],
  legal: [
    "Generate an NDA",
    "Analyze vendor contract",
    "Incorporate a C-Corp"
  ],
  marketing: [
    "Draft a viral Product Hunt launch thread",
    "Generate a controversial LinkedIn thought-leadership post",
    "Create a 5-day email drip campaign for cart abandoners",
    "Write an aggressive competitor comparison ad (Us vs. Them)",
    "Draft a PR press release for our $2M Seed Round"
  ],
  hiring: [
    "Hire a frontend developer",
    "Hire a backend developer",
    "Hire a java full stack developer"
  ]
};

export default function AgentChat() {
  const { agentId } = useParams();
  
  const getInitialMessage = () => {
    switch(agentId?.toLowerCase()) {
      case 'marketing': return "Hello! I am your AI CMO. How can I help you grow your brand and acquire customers today?";
      case 'legal': return "Hello! I am your AI General Counsel. I can draft contracts, analyze agreements, and provide legal guidance.";
      case 'ceo': return "Hello! I am the Chief Orchestrator. What is our core mission and priority today?";
      default: return "Hello! I am your AI Head of Talent. How can I help you grow the team today?";
    }
  };

  const [messages, setMessages] = useState<any[]>([
    { id: 1, role: "agent", type: "text", content: getInitialMessage() }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [jdSaved, setJdSaved] = useState(false);
  const [docSigned, setDocSigned] = useState(false);
  const [ndaDownloaded, setNdaDownloaded] = useState(false);
  const [roadmapDownloaded, setRoadmapDownloaded] = useState(false);
  const [activeAgents, setActiveAgents] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (agentId?.toLowerCase() === 'hiring') {
      setMessages([{ id: Date.now(), role: "agent", type: "hiring_role_selector" }]);
    } else {
      setMessages([{ id: Date.now(), role: "agent", type: "text", content: getInitialMessage() }]);
    }
    setInput("");
  }, [agentId]);

  const processAgentResponse = (userMsg: string) => {
    setTimeout(() => {
      setIsTyping(false);
      const lowerInput = userMsg.toLowerCase();
      
      // === MARKETING MOCKS ===
      if (agentId?.toLowerCase() === 'marketing') {
        if (lowerInput.includes("product hunt") || lowerInput.includes("launch")) {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "rich_launch_post" }]);
        } else if (lowerInput.includes("controversial") || lowerInput.includes("thought-leadership") || lowerInput.includes("linkedin")) {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "rich_linkedin_post" }]);
        } else if (lowerInput.includes("drip") || lowerInput.includes("email") || lowerInput.includes("cart")) {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "rich_email_drip" }]);
        } else if (lowerInput.includes("competitor") || lowerInput.includes("aggressive") || lowerInput.includes("ad")) {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "rich_competitor_ad" }]);
        } else if (lowerInput.includes("pr ") || lowerInput.includes("press release") || lowerInput.includes("seed round") || lowerInput.includes("press")) {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "rich_press_release" }]);
        } else if (lowerInput.includes("discount") || lowerInput.includes("sale")) {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "rich_discount_post" }]);
        } else {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "text", content: "I've analyzed the market. We should focus on high-intent search terms like 'AI Developer OS' and start a targeted LinkedIn outreach campaign." }]);
        }
      
      // === LEGAL MOCKS ===
      } else if (agentId?.toLowerCase() === 'legal') {
        if (lowerInput.includes("nda") || lowerInput.includes("non-disclosure")) {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "rich_legal_nda" }]);
        } else if (lowerInput.includes("contract") || lowerInput.includes("vendor") || lowerInput.includes("analyze")) {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "text", content: "🚨 Warning: I have analyzed the vendor contract. There is an auto-renewal clause hidden in Section 4.3 that locks you in for 24 months. I recommend requesting a modification to make it month-to-month after the first year." }]);
        } else if (lowerInput.includes("incorporate") || lowerInput.includes("c-corp")) {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "text", content: "To incorporate as a Delaware C-Corp, I recommend using Stripe Atlas. The steps are:\n1. Fill out company details and issue shares.\n2. Sign the generated incorporation documents.\n3. File with Delaware (takes ~3-5 days).\nShall I generate the preliminary operating agreement?" }]);
        } else {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "text", content: "I am reviewing our current compliance status. Let me know if you need any specific documents drafted." }]);
        }

      // === CEO MOCKS ===
      } else if (!agentId || agentId?.toLowerCase() === 'ceo') {
        if (lowerInput.includes("hire") && lowerInput.includes("twitter")) {
          setMessages(prev => [...prev, { 
            id: Date.now(), 
            role: "agent", 
            type: "orchestration_approval",
            planType: "hire_twitter",
            tasks: [
              { id: 1, name: "Generate Job Description", agent: "Hiring Agent" },
              { id: 2, name: "Draft Hiring Campaign Post", agent: "Marketing Agent" }
            ]
          }]);
        } else if (lowerInput.includes("vendor") || lowerInput.includes("nda")) {
          setMessages(prev => [...prev, { 
            id: Date.now(), 
            role: "agent", 
            type: "orchestration_approval",
            planType: "onboard_vendor",
            tasks: [
              { id: 1, name: "Draft Mutual NDA", agent: "Legal Agent" },
              { id: 2, name: "Review Commercial Terms", agent: "CEO Agent" }
            ]
          }]);
        } else if (lowerInput.includes("launch") || lowerInput.includes("producthunt")) {
          setMessages(prev => [...prev, { 
            id: Date.now(), 
            role: "agent", 
            type: "orchestration_approval",
            planType: "launch_product",
            tasks: [
              { id: 1, name: "Draft ProductHunt Thread", agent: "Marketing Agent" },
              { id: 2, name: "Authorize 40% Flash Sale", agent: "CEO Agent" }
            ]
          }]);
        } else if (lowerInput.includes("company setup")) {
          setMessages(prev => [...prev, { 
            id: Date.now(), 
            role: "agent", 
            type: "orchestration_approval",
            planType: "company_setup",
            tasks: [
              { id: 1, name: "Incorporate C-Corp", agent: "Legal Agent" },
              { id: 2, name: "Hire Founding Engineer", agent: "Hiring Agent" },
              { id: 3, name: "Draft Launch Post", agent: "Marketing Agent" }
            ]
          }]);
        } else if (lowerInput.includes("investor") || lowerInput.includes("pr release")) {
          setMessages(prev => [...prev, { 
            id: Date.now(), 
            role: "agent", 
            type: "orchestration_approval",
            planType: "investor_pr",
            tasks: [
              { id: 1, name: "Verify Term Sheet", agent: "Legal Agent" },
              { id: 2, name: "Draft PR Press Release", agent: "Marketing Agent" }
            ]
          }]);
        } else if (lowerInput.includes("rebrand")) {
          setMessages(prev => [...prev, { 
            id: Date.now(), 
            role: "agent", 
            type: "orchestration_approval",
            planType: "full_rebrand",
            tasks: [
              { id: 1, name: "Set Brand Strategy", agent: "CEO Agent" },
              { id: 2, name: "Recruit UI Designers", agent: "Hiring Agent" },
              { id: 3, name: "Rewrite Marketing Copy", agent: "Marketing Agent" }
            ]
          }]);
        } else {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "text", content: "I'll add that to my agenda. For now, would you like to review our product roadmap or start hiring?" }]);
        }

      // === HIRING MOCKS ===
      } else {
        if (lowerInput.includes("interview") || lowerInput.includes("questions") || lowerInput.includes("plan")) {
          let intRole = "Software Engineer";
          const match = lowerInput.match(/for (.*)/i);
          if (match && match[1]) {
             intRole = match[1].trim();
             intRole = intRole.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          }
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "rich_interview_plan", roleName: intRole }]);
        } else if (lowerInput.includes("source") || lowerInput.includes("find")) {
          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "text", content: "I am scraping GitHub, LinkedIn, and StackOverflow for developers who have contributed to open-source AI frameworks. I've found 45 potential candidates with a 90%+ match score. Shall I draft a personalized outreach sequence for them?" }]);
        } else {
          let roleName = "Software Engineer";
          if (lowerInput.includes("frontend")) roleName = "Frontend Developer";
          else if (lowerInput.includes("backend")) roleName = "Backend Developer";
          else if (lowerInput.includes("java")) roleName = "Java Full Stack Developer";
          else {
             roleName = userMsg.replace(/hire (a |an )?/i, '').trim();
             if (roleName.length === 0) roleName = "Software Engineer";
             roleName = roleName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          }

          setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "rich_hiring_jd", roleName }]);
        }
      }
      
    }, 1500);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { id: Date.now(), role: "user", type: "text", content: userMsg }]);
    setInput("");
    setIsTyping(true);
    processAgentResponse(userMsg);
  };

  const handleQuickPrompt = (promptText: string) => {
    if (isTyping) return;
    setMessages(prev => [...prev, { id: Date.now(), role: "user", type: "text", content: promptText }]);
    setIsTyping(true);
    processAgentResponse(promptText);
  };

  const handleApprovePlan = (msgId: number, planType: string = "hire_twitter") => {
    let newActiveAgents: string[] = [];
    if (planType === "company_setup") newActiveAgents = ["legal", "hiring", "marketing"];
    else if (planType === "onboard_vendor") newActiveAgents = ["legal", "ceo"];
    else if (planType === "launch_product") newActiveAgents = ["marketing", "ceo"];
    else if (planType === "investor_pr") newActiveAgents = ["legal", "marketing"];
    else if (planType === "full_rebrand") newActiveAgents = ["hiring", "marketing", "ceo"];
    else newActiveAgents = ["hiring", "marketing"]; // default

    setActiveAgents(newActiveAgents);

    setMessages(prev => prev.map(m => m.id === msgId ? { ...m, approved: true } : m));
    setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "orchestration_executing", planType }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setActiveAgents([]);
      setMessages(prev => prev.filter(m => m.type !== 'orchestration_executing'));
      setMessages(prev => [...prev, { id: Date.now(), role: "agent", type: "orchestration_result", planType }]);
      scrollToBottom();
    }, 4000);
  };

  const handleDownloadNda = () => {
    setNdaDownloaded(true);
    const element = document.createElement("a");
    const file = new Blob(["MUTUAL NON-DISCLOSURE AGREEMENT\n\nThis Mutual Non-Disclosure Agreement is entered into by and between AgentGrid Inc. and the receiving party.\n\n[Mock Legal Document generated by AgentGrid OS]"], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "AgentGrid_Mutual_NDA.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadRoadmap = () => {
    setRoadmapDownloaded(true);
    const element = document.createElement("a");
    const file = new Blob(["AgentGrid OS Roadmap\n\nPhase 1: Foundation (Q3-Q4 2026)\n- Multi-Agent Orchestration\n- Vector Database Memory\n\nPhase 2: Execution (Q1-Q2 2027)\n- Native API Integrations\n- Automated Workflows\n\nPhase 3: Autonomous Enterprise (2028+)\n- Agent-to-Agent B2B Economy\n- Self-healing workflows"], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "AgentGrid_Product_Roadmap.pdf";
    document.body.appendChild(element); 
    element.click();
    document.body.removeChild(element);
  };

  const renderRichRoadmapDoc = () => (
    <div className="w-full mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
      <div className="flex items-center space-x-2 mb-4 text-indigo-600 font-semibold bg-indigo-50 px-3 py-1.5 w-max rounded-lg border border-indigo-200">
        <CheckCircle2 size={18} />
        <span>Done! Generated Roadmap Document</span>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center">
          <FileText className="text-indigo-500 mr-3" size={24}/> 
          <div>
            <h2 className="text-xl font-bold text-slate-800">AgentGrid Strategic Roadmap</h2>
            <p className="text-sm text-slate-500 mt-1">24-Month Product Vision</p>
          </div>
        </div>
        <div className="p-6">
          <div className="border border-slate-200 rounded-xl p-6 bg-slate-50 text-sm text-slate-700 h-64 overflow-y-auto custom-scrollbar mb-6 space-y-6">
            <div>
              <h3 className="font-bold text-lg text-indigo-700 flex items-center mb-2"><span className="w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2 text-xs">1</span> Phase 1: Foundation (Q3-Q4)</h3>
              <ul className="list-disc pl-8 space-y-1">
                <li>Deploy Core AI C-Suite (CEO, Marketing, Legal, Hiring)</li>
                <li>Implement Multi-Agent Orchestration Engine</li>
                <li>Integrate Pinecone Vector Database for Long-term Memory</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-indigo-700 flex items-center mb-2"><span className="w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2 text-xs">2</span> Phase 2: Live Execution (Q1-Q2)</h3>
              <ul className="list-disc pl-8 space-y-1">
                <li>Stripe & QuickBooks API integration for financial actions</li>
                <li>X/LinkedIn API for autonomous marketing distribution</li>
                <li>DocuSign API for automated contract execution</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-indigo-700 flex items-center mb-2"><span className="w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-2 text-xs">3</span> Phase 3: Autonomous Enterprise (2028+)</h3>
              <ul className="list-disc pl-8 space-y-1">
                <li>Proactive Anomaly Detection & Self-Healing Workflows</li>
                <li>B2B Agent Economy (Agents negotiating with other Agents)</li>
                <li>Enterprise Multi-tenant scaling</li>
              </ul>
            </div>
          </div>
          <button 
            onClick={handleDownloadRoadmap}
            className="w-full py-3 font-bold rounded-xl transition shadow-md flex items-center justify-center active:scale-95 bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20"
          >
            <><Download size={18} className="mr-2"/> Download Formal PDF</>
          </button>
        </div>
      </div>
    </div>
  );

  const renderOrchestrationApproval = (msgId: number, tasks: any[] = [], planType: string = "hire_twitter") => {
    const displayTasks = tasks.length > 0 ? tasks : [
      { id: 1, name: "Generate Job Description", agent: "Hiring Agent" },
      { id: 2, name: "Draft Hiring Campaign Post", agent: "Marketing Agent" }
    ];

    return (
      <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-white border-2 border-indigo-100 rounded-2xl p-6 shadow-xl shadow-indigo-100/50">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
              <Workflow size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Multi-Agent Plan Proposed</h3>
          </div>
          <p className="text-sm text-slate-600 mb-6">
            I have created an orchestration plan to achieve your goal. I will delegate these tasks immediately upon approval:
          </p>
          <div className="space-y-4 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
            {displayTasks.map((task, index) => (
              <div key={task.id} className="relative flex items-start space-x-4">
                {index !== displayTasks.length - 1 && (
                  <div className="absolute top-8 left-4 bottom-0 w-px bg-slate-200 -ml-px h-full"></div>
                )}
                <div className="relative z-10 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0">
                  <Bot size={14} className="text-indigo-500" />
                </div>
                <div className="pt-1.5">
                  <p className="text-sm font-bold text-slate-800">Task {index + 1}: {task.name}</p>
                  <p className="text-xs text-slate-500 mt-1">Delegated to: <span className="text-indigo-600 font-medium">{task.agent}</span></p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => handleApprovePlan(msgId, planType)}
              className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-md flex items-center justify-center active:scale-95"
            >
              <Check size={18} className="mr-2" /> Approve Plan
            </button>
            <button className="flex-1 py-3 px-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition flex items-center justify-center active:scale-95">
              Reject
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderOrchestrationExecuting = (msg: any) => {
    const pt = msg.planType || "hire_twitter";
    return (
    <div className="w-full mt-4 animate-in fade-in max-w-2xl">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-4">
        <h3 className="font-bold text-slate-800 flex items-center">
          <Loader2 size={18} className="animate-spin text-indigo-500 mr-2" /> Orchestrating Team...
        </h3>
        <div className="space-y-3">
          {pt === 'company_setup' && (
            <>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-amber-500" /> <span>Legal Agent is incorporating C-Corp...</span></div>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-purple-500" /> <span>Hiring Agent is preparing JD...</span></div>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-pink-500" /> <span>Marketing Agent is planning launch...</span></div>
            </>
          )}
          {pt === 'hire_twitter' && (
            <>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-purple-500" /> <span>Hiring Agent is drafting JD...</span></div>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-pink-500" /> <span>Marketing Agent is generating post...</span></div>
            </>
          )}
          {pt === 'onboard_vendor' && (
            <>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-amber-500" /> <span>Legal Agent is drafting NDA...</span></div>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-indigo-500" /> <span>CEO Agent is reviewing terms...</span></div>
            </>
          )}
          {pt === 'launch_product' && (
            <>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-pink-500" /> <span>Marketing Agent is generating viral thread...</span></div>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-indigo-500" /> <span>CEO Agent is authorizing flash sale...</span></div>
            </>
          )}
          {pt === 'investor_pr' && (
            <>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-amber-500" /> <span>Legal Agent is verifying term sheet...</span></div>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-pink-500" /> <span>Marketing Agent is drafting PR release...</span></div>
            </>
          )}
          {pt === 'full_rebrand' && (
            <>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-indigo-500" /> <span>CEO Agent is setting brand strategy...</span></div>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-purple-500" /> <span>Hiring Agent is recruiting UI Designers...</span></div>
              <div className="flex items-center space-x-3 text-sm font-medium text-slate-500"><Loader2 size={14} className="animate-spin text-pink-500" /> <span>Marketing Agent is writing copy...</span></div>
            </>
          )}
        </div>
      </div>
    </div>
  )};

  const renderLaunchPost = () => (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl">
      <div className="flex items-center space-x-2 mb-3 text-pink-600 font-semibold bg-pink-50 px-3 py-1.5 w-max rounded-lg border border-pink-200">
        <Bot size={18} />
        <span>Marketing Agent Result</span>
      </div>
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-slate-800 flex items-center">
                <span className="text-blue-500 mr-2 text-2xl">X</span> Hiring Announcement
              </h2>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">Platform: X (Twitter)</span>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-6 text-slate-700">
            <div className="border border-slate-100 rounded-xl p-4 shadow-sm bg-white">
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">J</div>
                <div>
                  <p className="font-bold text-slate-900">Jyothi <span className="font-normal text-slate-500">@Jyothisdxo</span></p>
                  <p className="mt-2 text-[15px] leading-relaxed">
                    We are growing! 🚀<br/><br/>
                    AgentGrid is looking for a killer Java Full Stack Developer to help us build the first AI Operating System for founders.<br/><br/>
                    Join us in Hyderabad. Flexible hours, great equity, and you get to work alongside literal AI agents.<br/><br/>
                    Apply here 👇
                  </p>
                  <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop" alt="Hiring Promo" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center backdrop-blur-sm">
                      <Sparkles size={12} className="mr-1 text-yellow-400" /> AI Generated Image
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => {
                const tweetText = "We are growing! 🚀\n\nAgentGrid is looking for a killer Java Full Stack Developer to help us build the first AI Operating System for founders.\n\nJoin us in Hyderabad. Flexible hours, great equity, and you get to work alongside literal AI agents.\n\nApply here 👇";
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, '_blank');
              }}
              className="flex items-center justify-center space-x-2 w-full py-3 bg-slate-900 hover:bg-black text-white font-bold rounded-xl transition shadow-md active:scale-95"
            >
              <Share2 size={18} /> <span>Publish to X</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDiscountPost = () => (
    <div className="w-full mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl">
      <div className="flex items-center space-x-2 mb-3 text-pink-600 font-semibold bg-pink-50 px-3 py-1.5 w-max rounded-lg border border-pink-200">
        <CheckCircle2 size={18} />
        <span>Done! Generated Promo Post</span>
      </div>
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-slate-800 flex items-center">
                <span className="text-blue-500 mr-2 text-2xl">X</span> Flash Sale Announcement
              </h2>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">Platform: X (Twitter)</span>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-6 text-slate-700">
            <div className="border border-slate-100 rounded-xl p-4 shadow-sm bg-white">
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">J</div>
                <div>
                  <p className="font-bold text-slate-900">Jyothi <span className="font-normal text-slate-500">@Jyothisdxo</span></p>
                  <p className="mt-2 text-[15px] leading-relaxed">
                    🚨 IT’S FINALLY HERE! 🚨<br/><br/>
                    AgentGrid is officially running a 40% OFF Flash Sale for the next 24 hours!<br/><br/>
                    Use code: FOUNDER40 at checkout. Don't miss out! 👇
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => {
                const tweetText = "🚨 IT’S FINALLY HERE! 🚨\n\nAgentGrid is officially running a 40% OFF Flash Sale for the next 24 hours!\n\nUse code: FOUNDER40 at checkout. Don't miss out! 👇";
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, '_blank');
              }}
              className="flex items-center justify-center space-x-2 w-full py-3 bg-slate-900 hover:bg-black text-white font-bold rounded-xl transition shadow-md active:scale-95"
            >
              <Share2 size={18} /> <span>Publish to X</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLinkedinPost = () => (
    <div className="w-full mt-4 animate-in fade-in max-w-2xl">
      <div className="flex items-center space-x-2 mb-3 text-pink-600 font-semibold bg-pink-50 px-3 py-1.5 w-max rounded-lg border border-pink-200">
        <Bot size={18} /><span>LinkedIn Strategy Generated</span>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden p-6 text-slate-700">
        <h2 className="text-xl font-bold text-[#0A66C2] flex items-center mb-4">
          <Briefcase className="mr-2"/> Controversial Thought Leadership
        </h2>
        <div className="border border-slate-100 rounded-xl p-4 bg-slate-50">
          <p className="font-bold text-slate-900 mb-2">Jyothi <span className="font-normal text-slate-500">| Founder @ AgentGrid</span></p>
          <p className="text-[15px] leading-relaxed">
            Unpopular opinion: If you are hiring humans for standard operations in 2026, you are already bankrupt.<br/><br/>
            I see founders burning $50k/month on agencies for things an AI C-Suite can do for $99. At AgentGrid, we aren't just building tools. We are building the replacement for the traditional corporate hierarchy.<br/><br/>
            Agree or disagree? 👇
          </p>
          <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop" alt="Office" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center backdrop-blur-sm">
              <Sparkles size={12} className="mr-1 text-yellow-400" /> AI Generated Image
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmailDrip = () => (
    <div className="w-full mt-4 animate-in fade-in max-w-2xl">
      <div className="flex items-center space-x-2 mb-3 text-pink-600 font-semibold bg-pink-50 px-3 py-1.5 w-max rounded-lg border border-pink-200">
        <Bot size={18} /><span>Email Drip Campaign Generated</span>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden p-6 text-slate-700">
        <h2 className="text-xl font-bold text-slate-800 flex items-center mb-4">
          <Send className="text-purple-500 mr-2"/> Abandoned Cart Sequence (5 Emails)
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-purple-500 pl-4 py-1">
            <h3 className="font-bold text-slate-800">Day 1: The Gentle Nudge</h3>
            <p className="text-sm text-slate-600">Subject: "Did you forget your AI C-Suite?"</p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-4 py-1">
            <h3 className="font-bold text-slate-800">Day 2: The Value Play</h3>
            <p className="text-sm text-slate-600">Subject: "How Jyothi saved $10k in legal fees yesterday."</p>
          </div>
          <div className="border-l-4 border-pink-500 pl-4 py-1">
            <h3 className="font-bold text-slate-800">Day 3: The FOMO Offer (20% Off)</h3>
            <p className="text-sm text-slate-600">Subject: "Your unfair advantage expires in 24 hours."</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCompetitorAd = () => (
    <div className="w-full mt-4 animate-in fade-in max-w-2xl">
      <div className="flex items-center space-x-2 mb-3 text-pink-600 font-semibold bg-pink-50 px-3 py-1.5 w-max rounded-lg border border-pink-200">
        <Bot size={18} /><span>Ad Copy Generated</span>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden p-6 text-slate-700">
        <h2 className="text-xl font-bold text-slate-800 flex items-center mb-4">
          <Target className="text-red-500 mr-2"/> Aggressive "Us vs. Them" Ad
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-xl border border-red-100">
            <h3 className="font-bold text-red-700 text-center mb-2">Traditional Agencies</h3>
            <ul className="text-sm space-y-2 text-red-600">
               <li>❌ $5,000/month retainers</li>
               <li>❌ Takes 3 weeks to draft an NDA</li>
               <li>❌ "Out of office"</li>
            </ul>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
            <h3 className="font-bold text-emerald-700 text-center mb-2">AgentGrid OS</h3>
            <ul className="text-sm space-y-2 text-emerald-600">
               <li>✅ $99/month flat fee</li>
               <li>✅ NDA drafted in 4.2 seconds</li>
               <li>✅ Works 24/7/365</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPressRelease = () => (
    <div className="w-full mt-4 animate-in fade-in max-w-2xl">
      <div className="flex items-center space-x-2 mb-3 text-pink-600 font-semibold bg-pink-50 px-3 py-1.5 w-max rounded-lg border border-pink-200">
        <Bot size={18} /><span>PR Release Generated</span>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden p-6 text-slate-700">
        <h2 className="text-xl font-bold text-slate-800 flex items-center mb-4">
          <FileText className="text-blue-500 mr-2"/> Official Press Release
        </h2>
        <div className="font-serif bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h1 className="text-2xl font-bold text-black mb-4">AgentGrid Raises $2M Seed Round to Automate the C-Suite</h1>
          <p className="text-sm text-slate-500 mb-4">HYDERABAD, INDIA — July 4, 2026</p>
          <p className="mb-4">AgentGrid, the pioneer in autonomous AI orchestration, today announced a $2M Seed round to accelerate the development of their flagship AI Operating System for solo founders.</p>
          <p className="italic text-slate-600 border-l-4 border-slate-300 pl-4">"We aren't just building software; we are democratizing execution," said Jyothi, Founder of AgentGrid.</p>
        </div>
      </div>
    </div>
  );

  const renderRichLegal = () => (
    <div className="w-full mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center space-x-2 mb-4 text-amber-600 font-semibold bg-amber-50 px-3 py-1.5 w-max rounded-lg border border-amber-200">
        <CheckCircle2 size={18} />
        <span>Done! Legal Document Generated</span>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden max-w-3xl">
        <div className="bg-slate-50 border-b border-slate-100 p-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center">
            <Scale className="text-amber-500 mr-2" size={24}/> Non-Disclosure Agreement (NDA)
          </h2>
          <p className="text-sm text-slate-500 mt-1">Standard Mutual NDA for Contractors</p>
        </div>
        <div className="p-6">
          <div className="border border-slate-200 rounded-xl p-6 bg-slate-50 text-sm text-slate-700 font-serif h-64 overflow-y-auto custom-scrollbar mb-6">
            <h3 className="text-center font-bold text-lg mb-4 underline">MUTUAL NON-DISCLOSURE AGREEMENT</h3>
            <p className="mb-4">This Mutual Non-Disclosure Agreement (this "Agreement") is entered into as of the date of the last signature below (the "Effective Date") by and between <strong>AgentGrid Inc.</strong> and the receiving party.</p>
            <p className="mb-4"><strong>1. Definition of Confidential Information.</strong> "Confidential Information" means any information disclosed by either party to the other party, either directly or indirectly, in writing, orally or by inspection of tangible objects.</p>
            <p className="mb-4"><strong>2. Exceptions.</strong> Confidential Information shall not include any information which (i) is or becomes publicly known through no wrongful act of the receiving party...</p>
            <p className="mb-4"><strong>3. Non-Use and Non-Disclosure.</strong> Each party agrees not to use any Confidential Information of the other party for any purpose except to evaluate and engage in discussions concerning a potential business relationship between the parties.</p>
          </div>
          <button 
            onClick={handleDownloadNda}
            className="w-full py-3 font-bold rounded-xl transition shadow-md flex items-center justify-center active:scale-95 bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20"
          >
            <><Download size={18} className="mr-2"/> Download PDF</>
          </button>
        </div>
      </div>
    </div>
  );

  const renderHiringRoleSelector = () => (
    <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-5 shadow-sm space-y-4 max-w-sm">
      <p className="text-[15px] text-slate-700 font-medium">Hello! I am your AI Head of Talent. Which role would you like to hire for today?</p>
      <select 
        className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium cursor-pointer"
        onChange={(e) => {
          if (e.target.value) {
            handleQuickPrompt(`Hire a ${e.target.value}`);
          }
        }}
        defaultValue=""
      >
        <option value="" disabled>Select a role...</option>
        <option value="Java Full Stack Developer">Java Full Stack Developer</option>
        <option value="MERN Stack Developer">MERN Stack Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="UI Designer">UI Designer</option>
        <option value="Product Manager">Product Manager</option>
      </select>
    </div>
  );

  const renderRichHiring = (roleName = "Java Full Stack Developer") => {
    let skills = ['Java 17+', 'Spring Boot', 'React.js', 'Microservices', 'REST APIs', 'AWS', 'MySQL', 'Docker', 'Redis', 'TypeScript'];
    let aboutText = `We are looking for a passionate ${roleName} to join our core engineering team in Hyderabad. You will play a critical role in building and scaling AgentGrid OS—the first autonomous AI Operating System for solo founders.`;
    
    if (roleName === "Frontend Developer") {
       skills = ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'GraphQL', 'Vite'];
       aboutText = "We are looking for a highly skilled Frontend Developer to craft premium, pixel-perfect user interfaces for AgentGrid OS. You will own the visual experience of our autonomous AI agents and build highly interactive, real-time dashboards.";
    } else if (roleName === "Backend Developer") {
       skills = ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'Microservices', 'Redis'];
       aboutText = "We are looking for a robust Backend Developer to architect the high-throughput microservices powering AgentGrid OS. You will build scalable API gateways and integrate directly with foundation AI models to execute autonomous tasks.";
    } else if (roleName?.toLowerCase() === "ui designer") {
       skills = ['Figma', 'UI/UX Design', 'Prototyping', 'Wireframing', 'User Research', 'Design Systems'];
       aboutText = "We are looking for a creative UI Designer to craft beautiful, intuitive interfaces for AgentGrid OS. You will define our design system and ensure a seamless, premium user experience.";
    } else if (roleName?.toLowerCase() === "product manager") {
       skills = ['Product Strategy', 'Agile/Scrum', 'Roadmapping', 'Data Analytics', 'Leadership', 'Go-to-Market'];
       aboutText = "We are looking for a strategic Product Manager to drive the vision and execution of AgentGrid OS. You will work closely with engineering, design, and marketing to build an AI product that founders love.";
    } else if (roleName?.toLowerCase() === "mern stack developer") {
       skills = ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'AWS', 'Tailwind CSS'];
       aboutText = "We are looking for an experienced MERN Stack Developer to build robust, scalable applications for AgentGrid OS. You will build end-to-end features using the full JavaScript ecosystem.";
    } else if (roleName !== "Java Full Stack Developer") {
       skills = ['Agile', 'Problem Solving', 'Leadership', 'Cloud Infrastructure', 'Startups', 'System Design'];
    }

    return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl">
      <div className="flex items-center space-x-2 mb-3 text-purple-600 font-semibold bg-purple-50 px-3 py-1.5 w-max rounded-lg border border-purple-200">
        <Bot size={18} />
        <span>Hiring Agent Result</span>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-800">{roleName}</h2>
            <div className="flex flex-wrap gap-3 mt-3 text-sm font-medium text-slate-600">
              <span className="flex items-center"><Globe size={16} className="mr-1.5 text-indigo-500"/> Hyderabad (Hybrid)</span>
              <span className="flex items-center"><Briefcase size={16} className="mr-1.5 text-indigo-500"/> Full-Time</span>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          
          <div>
            <h3 className="font-bold text-slate-800 mb-2">About The Role</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              {aboutText}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              As an early engineer, you will have significant ownership over the product roadmap, architectural decisions, and the technical culture of the company. We are looking for builders who thrive in fast-paced environments and love solving complex, ambiguous problems.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 mb-2">Key Responsibilities</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1.5 marker:text-indigo-400">
              <li>Design, develop, and maintain robust backend microservices using Java and Spring Boot.</li>
              <li>Build responsive, premium user interfaces using React.js, TypeScript, and Tailwind CSS.</li>
              <li>Architect highly scalable API gateways to support Multi-Agent Orchestration.</li>
              <li>Integrate directly with foundation AI models (Google Gemini, OpenAI) and vector databases (Pinecone).</li>
              <li>Optimize database queries (MySQL, PostgreSQL) for high-frequency autonomous agent transactions.</li>
              <li>Establish robust CI/CD pipelines and implement automated testing to ensure 99.99% uptime.</li>
              <li>Participate in technical design reviews and mentor junior engineering talent as we scale.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 mb-2">Required Skills & Experience</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-bold border border-indigo-100">
                  {skill}
                </span>
              ))}
            </div>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1.5 marker:text-indigo-400">
              <li>4+ years of professional software engineering experience in Full Stack development.</li>
              <li>Deep expertise in the Java ecosystem (Spring Boot, Hibernate, Maven).</li>
              <li>Strong proficiency in modern frontend frameworks (React, Next.js, Redux/Zustand).</li>
              <li>Solid understanding of distributed systems, event-driven architecture, and message queues (Kafka/RabbitMQ).</li>
              <li>Experience deploying applications on cloud infrastructure (AWS EC2, ECS, Lambda, RDS).</li>
              <li>Previous experience working in fast-paced, high-growth startup environments is a massive plus.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 mb-2">Perks & Benefits</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1.5 marker:text-indigo-400">
              <li>Highly competitive base salary + meaningful early-stage startup equity.</li>
              <li>Flexible hybrid work environment based out of our premium Hyderabad office.</li>
              <li>Comprehensive health insurance for you and your direct dependents.</li>
              <li>Annual learning and development stipend ($1,000/year) for courses and conferences.</li>
              <li>"Take what you need" unlimited paid time off (PTO) policy.</li>
            </ul>
          </div>
          <div className="flex space-x-3 mt-4">
            <button 
              onClick={() => {
                const postText = `We are hiring! 🚀\n\nAgentGrid is looking for a passionate ${roleName} to join our core team in Hyderabad and build the first AI Operating System for solo founders.\n\nSend me a DM if you're interested!`;
                window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(postText)}`, '_blank');
              }}
              className="flex-1 px-4 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-bold rounded-xl transition shadow-md flex items-center justify-center active:scale-95"
            >
              <Briefcase size={18} className="mr-2" /> Publish to LinkedIn
            </button>
            <button 
              onClick={() => handleQuickPrompt(`Generate interview questions for ${roleName}`)}
              className="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-md flex items-center justify-center active:scale-95"
            >
              <FileText size={18} className="mr-2" /> Generate Interview Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

  const renderRichInterviewPlan = (roleName = "Software Engineer") => {
    let techFocus = "Algorithms and System Design";
    if (roleName.toLowerCase().includes("frontend") || roleName.toLowerCase().includes("ui") || roleName.toLowerCase().includes("designer")) techFocus = "React, State Management, and UI/UX Integration";
    else if (roleName.toLowerCase().includes("backend") || roleName.toLowerCase().includes("java") || roleName.toLowerCase().includes("mern")) techFocus = "Microservices, Database Optimization, and API Design";
    else if (roleName.toLowerCase().includes("product")) techFocus = "Product Strategy, Roadmapping, and Metrics";

    return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mt-4">
      <div className="flex items-center space-x-2 mb-3 text-emerald-600 font-semibold bg-emerald-50 px-3 py-1.5 w-max rounded-lg border border-emerald-200">
        <CheckCircle2 size={18} />
        <span>Interview Plan Generated</span>
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-100 p-6">
          <h2 className="text-xl font-bold text-slate-800">5-Stage Interview Plan: {roleName}</h2>
          <p className="text-sm text-slate-500 mt-1">Structured evaluation matrix for top-tier candidates.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-start space-x-4">
             <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0">1</div>
             <div>
               <h3 className="font-bold text-slate-800">Cultural Fit & Behavioral</h3>
               <p className="text-sm text-slate-600 mt-1">"Describe a time you had to make a critical architectural or product decision with incomplete information."</p>
             </div>
          </div>
          <div className="flex items-start space-x-4">
             <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0">2</div>
             <div>
               <h3 className="font-bold text-slate-800">Deep Dive: {techFocus}</h3>
               <p className="text-sm text-slate-600 mt-1">"Walk me through how you would architect a highly scalable solution to handle 10,000 concurrent autonomous agents."</p>
             </div>
          </div>
          <div className="flex items-start space-x-4">
             <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0">3</div>
             <div>
               <h3 className="font-bold text-slate-800">Live Case Study / Pairing</h3>
               <p className="text-sm text-slate-600 mt-1">Provide a broken deployment script, a complex UI component, or a product brief and evaluate their real-time execution.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

  const renderOrchestrationResult = (planType = "hire_twitter") => (
    <div className="w-full mt-4 space-y-8">
      <div className="flex items-center space-x-2 text-indigo-600 font-semibold bg-indigo-50 px-3 py-1.5 w-max rounded-lg border border-indigo-200">
        <CheckCircle2 size={18} />
        <span>Orchestration Complete! Tasks executed.</span>
      </div>
      <div className="flex flex-col space-y-8 pl-4 border-l-2 border-indigo-100">
        {planType === "hire_twitter" && (
           <>
             {renderRichHiring()}
             {renderLaunchPost()}
           </>
        )}
        {planType === "vendor_nda" && (
           <>
             {renderRichLegal()}
             {renderRichRoadmapDoc()}
           </>
        )}
        {planType === "launch_product" && (
           <>
             {renderLaunchPost()}
             {renderDiscountPost()}
             {renderRichRoadmapDoc()}
           </>
        )}
        {planType === "company_setup" && (
           <>
             {renderRichLegal()}
             {renderRichHiring("Frontend Developer")}
             {renderLaunchPost()}
             {renderRichRoadmapDoc()}
           </>
        )}
      </div>
    </div>
  );


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
              <Link to="/agents" className="flex items-center space-x-3 px-4 py-3 bg-indigo-600 text-white rounded-xl shadow-md shadow-indigo-600/20 font-semibold transition-all">
                <Bot size={18} />
                <span>Agents</span>
              </Link>
              <div className="pl-11 pr-4 space-y-2 pt-1 pb-2">
                <div className="flex items-center justify-between group">
                  <Link to="/chat/ceo" className="block px-3 py-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/80 rounded-lg transition-all duration-300 hover:translate-x-1 text-xs font-bold flex-1">CEO Agent</Link>
                  {activeAgents.includes('ceo') ? <span className="flex items-center text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200"><Loader2 size={10} className="animate-spin mr-1"/> Working</span> : <span className="text-[10px] text-slate-400 font-medium px-1.5 py-0.5">Idle</span>}
                </div>
                <div className="flex items-center justify-between group">
                  <Link to="/chat/legal" className="block px-3 py-2 text-slate-500 hover:text-amber-600 hover:bg-amber-50/80 rounded-lg transition-all duration-300 hover:translate-x-1 text-xs font-bold flex-1">Legal Agent</Link>
                  {activeAgents.includes('legal') ? <span className="flex items-center text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200"><Loader2 size={10} className="animate-spin mr-1"/> Working</span> : <span className="text-[10px] text-slate-400 font-medium px-1.5 py-0.5">Idle</span>}
                </div>
                <div className="flex items-center justify-between group">
                  <Link to="/chat/marketing" className="block px-3 py-2 text-slate-500 hover:text-pink-600 hover:bg-pink-50/80 rounded-lg transition-all duration-300 hover:translate-x-1 text-xs font-bold flex-1">Marketing Agent</Link>
                  {activeAgents.includes('marketing') ? <span className="flex items-center text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200"><Loader2 size={10} className="animate-spin mr-1"/> Working</span> : <span className="text-[10px] text-slate-400 font-medium px-1.5 py-0.5">Idle</span>}
                </div>
                <div className="flex items-center justify-between group">
                  <Link to="/chat/hiring" className="block px-3 py-2 text-slate-500 hover:text-purple-600 hover:bg-purple-50/80 rounded-lg transition-all duration-300 hover:translate-x-1 text-xs font-bold flex-1">Hiring Agent</Link>
                  {activeAgents.includes('hiring') ? <span className="flex items-center text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200"><Loader2 size={10} className="animate-spin mr-1"/> Working</span> : <span className="text-[10px] text-slate-400 font-medium px-1.5 py-0.5">Idle</span>}
                </div>
              </div>
            </div>
            <Link to="/documents" className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/80 active:scale-95 rounded-xl transition-all duration-300 hover:translate-x-2 text-sm font-semibold">
              <FileText size={18} />
              <span>Documents</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col h-full bg-white relative">
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
              <div key={msg.id} className={`flex items-end space-x-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                
                {msg.role === 'agent' && (
                  <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center shrink-0 mb-1 border border-purple-200">
                    <Bot size={16} />
                  </div>
                )}

                {msg.type === 'rich_launch_post' ? renderLaunchPost() :
                 msg.type === 'rich_linkedin_post' ? renderLinkedinPost() :
                 msg.type === 'rich_email_drip' ? renderEmailDrip() :
                 msg.type === 'rich_competitor_ad' ? renderCompetitorAd() :
                 msg.type === 'rich_press_release' ? renderPressRelease() :
                 msg.type === 'rich_discount_post' ? renderDiscountPost() :
                 msg.type === 'rich_legal_nda' ? renderRichLegal() :
                 msg.type === 'rich_roadmap_doc' ? renderRichRoadmapDoc() :
                 msg.type === 'rich_hiring_jd' ? renderRichHiring(msg.roleName) :
                 msg.type === 'rich_interview_plan' ? renderRichInterviewPlan(msg.roleName) :
                 msg.type === 'hiring_role_selector' ? renderHiringRoleSelector() :
                 msg.type === 'orchestration_approval' ? renderOrchestrationApproval(msg.id, msg.tasks, msg.planType) :
                 msg.type === 'orchestration_executing' ? renderOrchestrationExecuting(msg) :
                 msg.type === 'orchestration_result' ? renderOrchestrationResult(msg.planType) : (
                  <div className={`max-w-[85%] rounded-2xl px-5 py-3.5 shadow-sm text-[15px] leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none prose prose-sm prose-slate'
                  }`}>
                    {msg.content}
                  </div>
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
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-500 flex items-center">
                    <Loader2 size={16} className="animate-spin mr-2 text-indigo-600" />
                    Agent is processing...
                  </p>
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
                placeholder={`Message your ${agentId || 'Hiring'} Agent...`}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-12 pr-14 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-slate-700 placeholder:text-slate-400 resize-none h-[54px] min-h-[54px] max-h-[150px]"
                rows={1}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
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

      {/* Right Sidebar - Quick Prompts */}
      {agentId?.toLowerCase() !== 'hiring' && (
      <aside className="w-72 bg-white border-l border-slate-200 flex flex-col z-20 shrink-0">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 flex items-center">
            <Zap size={18} className="text-amber-500 mr-2" /> Quick Prompts
          </h2>
          <p className="text-sm text-slate-500 mt-1">Click to auto-send</p>
        </div>
        <div className="p-6 space-y-3 overflow-y-auto custom-scrollbar">
          {(quickPrompts[agentId?.toLowerCase() || 'ceo'] || quickPrompts['ceo']).map((prompt, i) => (
            <button 
              key={i}
              onClick={() => handleQuickPrompt(prompt)}
              disabled={isTyping}
              className="w-full text-left p-4 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 rounded-xl transition-all text-sm font-medium text-slate-700 disabled:opacity-50 group flex items-start space-x-3 active:scale-95"
            >
              <span className="text-indigo-400 group-hover:text-indigo-600 mt-0.5"><Send size={14} /></span>
              <span>{prompt}</span>
            </button>
          ))}
        </div>
      </aside>
      )}
    </div>
  );
}
