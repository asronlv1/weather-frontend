# Weather Dashboard Frontend (Phase 1)

## Config
Frontend calls backend via `BACKEND_URL`.
Default: http://127.0.0.1:5000

## Run locally
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

export BACKEND_URL="http://127.0.0.1:5000"
python app/app.py

