from typing import Dict

from fastapi import HTTPException, status

from app.db.fake_db import fake_users
from app.models.schemas import LoginRequest, UserCreate


def create_user(payload: UserCreate) -> Dict[str, str]:
    existing = next((user for user in fake_users if user["email"] == payload.email), None)
    if existing:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered.")

    record = {
        "username": payload.username,
        "email": payload.email,
        "password": payload.password,
    }
    fake_users.append(record)
    return {"username": record["username"], "email": record["email"]}


def authenticate_user(payload: LoginRequest) -> Dict[str, str]:
    user = next(
        (doc for doc in fake_users if doc["email"] == payload.email and doc["password"] == payload.password),
        None,
    )
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials.")
    return {"username": user["username"], "email": user["email"]}


def build_token(user: Dict[str, str]) -> str:
    return f"token-{user['username']}-{user['email']}"
