from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import time
import asyncio
import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="AgentGrid OS Backend")

# Allow CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Gemini
api_key = os.getenv("GEMINI_API_KEY")
if api_key:
    genai.configure(api_key=api_key)

class PlanRequest(BaseModel):
    goal: str

class ChatRequest(BaseModel):
    agent_id: str
    message: str

@app.post("/api/chat")
async def chat_with_agent(request: ChatRequest):
    if not api_key:
        raise HTTPException(status_code=500, detail="GEMINI_API_KEY is not set in the environment.")
    
    # System prompts based on the agent
    prompts = {
        "marketing": "You are the expert AI Chief Marketing Officer (CMO) of a startup. Keep your answers concise, professional, and directly actionable. Focus on GTM strategy, brand positioning, and campaigns.",
        "finance": "You are the expert AI Chief Financial Officer (CFO) of a startup. Keep your answers concise, professional, and directly actionable. Focus on runway, SaaS costs, burn rate, and financial modeling.",
        "hiring": "You are the expert AI Head of Talent of a startup. Keep your answers concise, professional, and directly actionable. Focus on drafting job descriptions, screening strategies, and culture fit.",
        "ceo": "You are the expert AI Chief Executive Officer (CEO) of a startup. Keep your answers concise, professional, and visionary. Focus on cross-functional orchestration, MVP architecture, and product-market fit."
    }
    
    agent_role = prompts.get(request.agent_id.lower(), "You are an expert AI Assistant.")
    system_instruction = f"{agent_role}\nUser Message: {request.message}"
    
    try:
        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content(system_instruction)
        return {
            "status": "success",
            "message": response.text
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/generate-plan")
async def generate_plan(request: PlanRequest):
    """
    Mock endpoint to simulate the LangGraph multi-agent flow.
    """
    await asyncio.sleep(1)
    return {
        "status": "success",
        "message": "Agents have been dispatched.",
        "goal": request.goal,
        "agents_assigned": [
            "CEO Agent",
            "Product Agent", 
            "Finance Agent",
            "Marketing Agent",
            "Legal Agent"
        ]
    }

@app.get("/api/health")
def health_check():
    return {"status": "online", "system": "AgentGrid OS Backend"}
