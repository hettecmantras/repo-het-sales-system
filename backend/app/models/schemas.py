from typing import List

from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    username: str
    email: EmailStr


class AuthResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse


class Stat(BaseModel):
    label: str
    value: str
    detail: str


class Product(BaseModel):
    name: str
    price: str
    category: str
    description: str


class Plan(BaseModel):
    title: str
    price: str
    cadence: str
    benefits: List[str]
