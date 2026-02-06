from pathlib import Path
import os
from flask import Flask, render_template

BASE_DIR = Path(__file__).resolve().parent.parent  # weather-service-frontend/

app = Flask(
    __name__,
    template_folder=str(BASE_DIR / "templates"),
    static_folder=str(BASE_DIR / "static"),
)

@app.get("/")
def home():
    backend_url = os.getenv("BACKEND_URL", "http://127.0.0.1:5000")
    return render_template("index.html", backend_url=backend_url)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
