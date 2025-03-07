from motor.motor_asyncio import AsyncIOMotorClient
from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
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

# Modèle des données envoyées par le formulaire de contact
class EmailRequest(BaseModel):
    name: str
    email: str
    message: str


# Fonction d'envoi du mail
def send_mail(name: str, email: str, message: str):
    sender_email = os.getenv("SMTP_USER")
    receiver_email = "yoannklt@gmail.com"
    password = os.getenv("SMTP_PASSWORD")

    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = receiver_email
    msg["Subject"] = "Nouveau message depuis le portfolio!"

    body = f"Nom: {name}\nEmail: {email}\n\nMessage:\n{message}"
    msg.attach(MIMEText(body, "plain"))

    try:
        server = smtplib.SMTP(os.getenv("SMTP_SERVER"), os.getenv("SMTP_PORT"))
        server.starttls()
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, msg.as_string())
        server.quit()
    except Exception as e: 
        print(f"Erreur lors de l'envoi de l'email: {e}")
    
@app.post("/send-email")
async def send_email_request(request: EmailRequest, background_tasks: BackgroundTasks):
    try:
        background_tasks.add_task(send_mail, request.name, request.email, request.message)
        return {"message": "Email envoyé avec succès!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
