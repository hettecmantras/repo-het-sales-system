from typing import List

from app.models.schemas import Plan


def get_payment_plans() -> List[Plan]:
    return [
        Plan(
            title='Monthly',
            price='$29',
            cadence='Billed monthly',
            benefits=['Unlimited products', 'Basic analytics', 'Email support'],
        ),
        Plan(
            title='Yearly',
            price='$299',
            cadence='Billed annually (save 15%)',
            benefits=['Everything in Monthly', 'Priority onboarding', '1:1 optimization workshops'],
        ),
    ]
