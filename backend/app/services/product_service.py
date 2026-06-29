from typing import List

from app.models.schemas import Product


def get_featured_products() -> List[Product]:
    return [
        Product(
            name='Pro CRM Suite',
            price='$199/mo',
            category='Sales Automation',
            description='Automates pipelines, tasks, and relationship scoring so reps can close confidently.',
        ),
        Product(
            name='Retail POS',
            price='$149/mo',
            category='Point of Sale',
            description='Omnichannel checkout, inventory syncing, and intelligent receipts for high-volume retailers.',
        ),
        Product(
            name='Enterprise Insights',
            price='$399/mo',
            category='Analytics',
            description='Executive dashboards, forecasting, and cohort analysis for multi-region teams.',
        ),
    ]
