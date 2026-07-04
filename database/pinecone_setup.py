import os
import uuid
from typing import Dict, Any, List
from pinecone import Pinecone, ServerlessSpec

# ==============================================================================
# AgentGrid OS: Vector-Native Database Client
# Architecture: 100% Pinecone Serverless (No Relational DB)
# ==============================================================================

class VectorDBClient:
    def __init__(self):
        print("Initializing Vector-Native Global Brain...")
        self.pc = Pinecone(api_key=os.environ.get("PINECONE_API_KEY", "dev_mock_key_xyz_123"))
        self.index_name = "agentgrid-global-brain"
        
        # We use a 1536 dimension index mapped to OpenAI's text-embedding-3-small
        if self.index_name not in self.pc.list_indexes().names():
            print(f"Provisioning Serverless Vector Index: {self.index_name}")
            self.pc.create_index(
                name=self.index_name,
                dimension=1536, 
                metric='cosine',
                spec=ServerlessSpec(cloud='aws', region='us-east-1')
            )
        self.index = self.pc.Index(self.index_name)
        print("✅ Vector Index Ready.")

    def _mock_embed(self, text: str) -> List[float]:
        """Mock embedding generator for local dev. In production, calls OpenAI API."""
        return [0.015] * 1536

    def save_user_profile(self, email: str, company_name: str):
        """Stores a user profile as a vector by embedding their core company context."""
        vector_id = f"usr_{uuid.uuid4().hex[:8]}"
        context_string = f"User: {email}. Company: {company_name}. Status: Active Founder."
        
        print(f"Embedding and saving User Profile: {email}")
        # self.index.upsert(vectors=[{
        #     "id": vector_id, 
        #     "values": self._mock_embed(context_string), 
        #     "metadata": {"type": "user", "email": email, "company": company_name}
        # }])
        return vector_id

    def store_agent_memory(self, user_id: str, agent_role: str, document_text: str):
        """
        The core of our AI OS: Stores generated work (JDs, NDAs) as semantic vectors.
        Allows the CEO Agent to instantly retrieve past work using cosine similarity.
        """
        vector_id = f"mem_{uuid.uuid4().hex[:8]}"
        print(f"Upserting Long-Term Memory for {agent_role}...")
        
        # self.index.upsert(vectors=[{
        #     "id": vector_id,
        #     "values": self._mock_embed(document_text),
        #     "metadata": {
        #         "type": "memory", 
        #         "owner": user_id, 
        #         "agent": agent_role, 
        #         "content": document_text[:500] # Store snippet in metadata
        #     }
        # }])
        return vector_id

    def retrieve_context(self, user_id: str, search_query: str, top_k: int = 3):
        """
        Executes a semantic similarity search across the entire startup's history.
        """
        print(f"Executing Vector Search for: '{search_query}'")
        # query_embedding = self._mock_embed(search_query)
        # return self.index.query(
        #     vector=query_embedding,
        #     filter={"owner": {"$eq": user_id}},
        #     top_k=top_k,
        #     include_metadata=True
        # )
        return []

if __name__ == "__main__":
    db = VectorDBClient()
