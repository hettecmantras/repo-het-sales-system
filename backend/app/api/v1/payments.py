from typing import List

from fastapi import APIRouter

from app.models.schemas import Plan
from app.services.payment_service import get_payment_plans

router = APIRouter()


@router.get("/plans", response_model=List[Plan])
async def plans():
    return get_payment_plans()
