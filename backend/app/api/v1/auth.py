from fastapi import APIRouter

from app.models.schemas import AuthResponse, LoginRequest, UserCreate, UserResponse
from app.services.auth_service import authenticate_user, build_token, create_user

router = APIRouter()


@router.post("/signup", response_model=AuthResponse)
async def signup(payload: UserCreate):
    created = create_user(payload)
    token = build_token(created)
    return AuthResponse(access_token=token, user=UserResponse(**created))


@router.post("/login", response_model=AuthResponse)
async def login(payload: LoginRequest):
    user = authenticate_user(payload)
    token = build_token(user)
    return AuthResponse(access_token=token, user=UserResponse(**user))
