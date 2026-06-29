from typing import List

from fastapi import APIRouter

from app.models.schemas import Product
from app.services.product_service import get_featured_products

router = APIRouter()


@router.get("", response_model=List[Product])
async def list_products():
    return get_featured_products()
