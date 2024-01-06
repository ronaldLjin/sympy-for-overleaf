from fastapi import FastAPI
from models.models import Solution
from fastapi.middleware.cors import CORSMiddleware
from api.solve_router import solve_router
from api.simplify_router import simplify_router

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(solve_router)
app.include_router(simplify_router)
