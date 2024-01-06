from pydantic import BaseModel
from typing import List


class Solution(BaseModel):
    solution: str
    error: str
