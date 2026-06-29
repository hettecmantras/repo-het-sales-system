from typing import List

from fastapi import APIRouter

from app.models.schemas import Stat
from app.services.dashboard_service import get_dashboard_stats, get_dashboard_updates

router = APIRouter()


@router.get("/stats", response_model=List[Stat])
async def stats():
    return get_dashboard_stats()


@router.get("/updates", response_model=List[str])
async def updates():
    return get_dashboard_updates()
