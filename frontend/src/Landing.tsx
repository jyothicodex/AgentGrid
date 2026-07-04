import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#05050f] text-white flex flex-col items-center relative overflow-hidden font-sans">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-6 max-w-6xl z-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="text-xl font-bold">AgentGrid</span>
          <span className="ml-4 px-2 py-1 bg-gray-800 text-xs rounded-full border border-gray-700 text-gray-300">VERSION 1 (MVP)</span>
        </div>
        <Link to="/login" className="px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800 transition flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
          <span>Sign In</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center z-10 w-full px-4 mt-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
          AgentGrid
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-300 mb-6">
          AI Operating System for Solo Founders
        </h2>
        <p className="text-gray-400 max-w-md mb-10 text-sm md:text-base leading-relaxed">
          From Idea to Execution — All in One Place.<br/>
          Analyze your startup idea, get AI-powered insights, and execute with a team of AI agents.
        </p>
        
        <Link to="/login" className="px-10 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)]">
          Get Started &rarr;
        </Link>
        <p className="text-gray-500 text-xs mt-4">Start your startup journey now</p>
      </main>

      {/* Features Footer */}
      <div className="w-full max-w-4xl mx-auto p-4 mt-16 mb-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#0a0a1a] p-6 rounded-2xl border border-gray-800/50">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
             <div className="text-purple-500 text-2xl">💡</div>
             <div>
               <h3 className="font-semibold text-sm text-gray-200">AI-Powered Insights</h3>
               <p className="text-xs text-gray-500 mt-1">Smart analysis of your ideas</p>
             </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
             <div className="text-blue-500 text-2xl">🤖</div>
             <div>
               <h3 className="font-semibold text-sm text-gray-200">Multi-Agent System</h3>
               <p className="text-xs text-gray-500 mt-1">Specialized AI agents for every need</p>
             </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
             <div className="text-green-500 text-2xl">📈</div>
             <div>
               <h3 className="font-semibold text-sm text-gray-200">Actionable Roadmap</h3>
               <p className="text-xs text-gray-500 mt-1">Clear steps to execution</p>
             </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
             <div className="text-orange-500 text-2xl">⚡</div>
             <div>
               <h3 className="font-semibold text-sm text-gray-200">Fast & Efficient</h3>
               <p className="text-xs text-gray-500 mt-1">Built for solo founders</p>
             </div>
          </div>
        </div>
      </div>
      
      <footer className="text-gray-600 text-xs pb-6 z-10 mt-auto">
        &copy; 2025 AgentGrid. All rights reserved.
      </footer>
    </div>
  );
}
