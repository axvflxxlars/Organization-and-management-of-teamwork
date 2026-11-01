from django.core.management.base import BaseCommand

from users.models import User

ADMINS = [
    ("admin1", "AHAuPTS3UGSR36"),
    ("admin2", "ptNnMJldrh8JVL"),
]


class Command(BaseCommand):
    help = "Create the default admin users (skips ones that already exist)."

    def handle(self, *args, **options):
        for username, password in ADMINS:
            if User.objects.filter(username=username).exists():
                self.stdout.write(f"{username}: already exists, skipped")
                continue

            User.objects.create_superuser(username=username, password=password)
            self.stdout.write(self.style.SUCCESS(f"{username}: created"))
