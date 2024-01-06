from fastapi import APIRouter
from sympy.parsing.latex import parse_latex
from sympy import simplify, latex
from models.models import Solution

simplify_router = APIRouter()


@simplify_router.get("/simplify", response_model=Solution)
def simplify_equation(equation: str):
    try:
        solution = latex(simplify(parse_latex(equation)))
        return Solution(solution=solution, error="")
    except Exception as e:
        return Solution(solution="", error=str(e))
