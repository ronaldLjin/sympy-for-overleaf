from fastapi import APIRouter
from sympy import latex
from sympy.parsing.latex import parse_latex
from sympy.solvers import solve
from models.models import Solution

solve_router = APIRouter()


@solve_router.get("/solve")
def solve_equation(equation: str):
    try:
        solution = latex(solve(parse_latex(equation)))
        return Solution(solution=solution, error="")
    except Exception as e:
        return Solution(solution="", error=str(e))
