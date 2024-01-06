from sympy import simplify, latex
from sympy.parsing.latex import parse_latex


def simplify_equation(equation: str):
    return latex(simplify(parse_latex(equation)))
