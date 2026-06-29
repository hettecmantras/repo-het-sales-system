from typing import List

from app.models.schemas import Stat


def get_dashboard_stats() -> List[Stat]:
    return [
        Stat(label='Revenue', value='$128K', detail='+12% MoM'),
        Stat(label='Win Rate', value='42%', detail='Target 37%'),
        Stat(label='Sales Cycle', value='18 days', detail='Down 3 days'),
    ]


def get_dashboard_updates() -> List[str]:
    return [
        'Sales team closed 32 deals this month.',
        'Product bundle upsells contributed 28% of revenue.',
        'New integrations launched for payment reconciliation.',
    ]
