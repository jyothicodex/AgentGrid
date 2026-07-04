from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import time
import asyncio

app = FastAPI(title="AgentGrid OS Backend")

# Allow CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PlanRequest(BaseModel):
    goal: str

@app.post("/api/generate-plan")
async def generate_plan(request: PlanRequest):
    """
    Mock endpoint to simulate the LangGraph multi-agent flow.
    In a real environment with an LLM key, this would trigger the Orchestrator node.
    """
    # Simulate network delay for effect
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
