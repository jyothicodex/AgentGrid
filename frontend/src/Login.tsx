import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API Network Request and JWT Generation
    setTimeout(() => {
      // Create a visually realistic JWT token structure
      const mockHeader = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
      const mockPayload = btoa(JSON.stringify({ sub: "12345", email, iat: Date.now() }));
      const mockSignature = btoa("mock-signature-for-demo-validation").replace(/=/g, "");
      const fakeJwt = `${mockHeader}.${mockPayload}.${mockSignature}`;
      
      localStorage.setItem('agentgrid_token', fakeJwt);
      localStorage.setItem('agentgrid_user', email);
      
      setIsLoading(false);
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#020205] flex items-center justify-center relative overflow-hidden font-sans">
      
      {/* Animated Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/30 blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="z-10 w-full max-w-md p-8">
        
        {/* Glassmorphism Card */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(79,70,229,0.15)] relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100"></div>

          <div className="flex flex-col items-center mb-8 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-4">
              <Sparkles size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h2>
            <p className="text-sm text-slate-400 mt-2">Log in to AgentGrid OS</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5 relative z-10">
            
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-600"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Password</label>
                <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Forgot?</a>
              </div>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-600 tracking-widest"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading || !email || !password}
              className="w-full py-4 mt-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
            >
              {isLoading ? (
                <><Loader2 className="animate-spin" size={18} /> <span>Authenticating...</span></>
              ) : (
                <><span>Sign In to OS</span> <ArrowRight size={18} /></>
              )}
            </button>
            
          </form>

        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          Don't have an account? <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Apply for access</a>
        </p>

      </div>
    </div>
  );
}
