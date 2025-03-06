from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

# Charger les variables d'environnement
load_dotenv()

# Récupérer l'URI de MongoDB depuis le fichier .env
MONGO_URI = os.getenv("MONGO_URI")

# Connexion à MongoDB
client = AsyncIOMotorClient(MONGO_URI)
db = client.portfolio  # Nom de la base de données

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Backend is running and connected to MongoDB!"}
