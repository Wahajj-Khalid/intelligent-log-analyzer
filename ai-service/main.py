from fastapi import FastAPI
from pydantic import BaseModel
import re

app = FastAPI(title="AI Intelligent Log Analytics Engine", version="1.0.0")

# Define structured request contract using Pydantic
class LogPayload(BaseModel):
    id: int
    service_name: str
    log_level: str
    message: str

@app.get("/health")
def health_check():
    return {"status": "AI SERVICE IS ONLINE"}

@app.post("/analyze")
async def analyze_log(payload: LogPayload):
    message_lower = payload.message.lower()
    
    # 🧠 Machine Learning/NLP Heuristic Modeling simulation
    # Detecting operational structural anomalies
    is_anomaly = False
    category = "Routine Operations"
    
    # Check for systemic anomaly signatures
    anomaly_keywords = ["timeout", "deadlock", "denied", "overflow", "crash", "fatal", "unauthorized"]
    if any(kw in message_lower for kw in anomaly_keywords) or payload.log_level in ["ERROR", "CRITICAL"]:
        is_anomaly = True
        
    # Classify root cause categories
    if "timeout" in message_lower or "connect" in message_lower:
        category = "Network & Infrastructure Failure"
    elif "denied" in message_lower or "unauthorized" in message_lower or "auth" in message_lower:
        category = "Security & Access Exception"
    elif "null" in message_lower or "undefined" in message_lower or "overflow" in message_lower:
        category = "Application Logic Bug"
    elif is_anomaly:
        category = "General System Anomaly"

    return {
        "log_id": payload.id,
        "ai_is_anomaly": is_anomaly,
        "ai_category": category
    }