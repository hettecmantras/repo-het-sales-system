from fastapi import FastAPI

from app.core.config import API_PREFIX
from app.api.v1 import auth, dashboard, products, payments

app = FastAPI(
    title='Het Sales System API',
    description='API for authentication, dashboard stats, product listings, and payment plans.',
    version='0.1.0',
)

app.include_router(auth.router, prefix=f"{API_PREFIX}/auth", tags=['Authentication'])
app.include_router(dashboard.router, prefix=f"{API_PREFIX}/dashboard", tags=['Dashboard'])
app.include_router(products.router, prefix=f"{API_PREFIX}/products", tags=['Products'])
app.include_router(payments.router, prefix=f"{API_PREFIX}/payments", tags=['Payments'])


@app.get('/health', summary='Health check')
async def health_check():
    return {'status': 'ok'}
