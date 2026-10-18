import json
import mimetypes
import ssl
from pathlib import Path
from urllib.error import URLError
from urllib.request import Request, urlopen

import certifi
from django.core.files.base import ContentFile
from django.core.management.base import BaseCommand
from django.db import transaction

from reports.models import FakeReport, Refutation
from users.models import User

SEED_FILE = Path(__file__).resolve().parents[2] / "seed" / "refutations.json"
SSL_CONTEXT = ssl.create_default_context(cafile=certifi.where())


class Command(BaseCommand):
    help = (
        "Create demo fake reports with refutations. Existing ones are skipped; "
        "missing images are downloaded again."
    )

    def handle(self, *args, **options):
        items = json.loads(SEED_FILE.read_text(encoding="utf-8"))
        reviewer = User.objects.order_by("created_at").first()

        for item in reversed(items):
            label = item["title"][:60]
            refutation = Refutation.objects.filter(title=item["title"]).first()

            if refutation and refutation.image:
                self.stdout.write(f"{label}: already exists, skipped")
                continue

            if refutation:
                if self.attach_image(refutation, item["image_url"]):
                    refutation.save()
                    self.stdout.write(self.style.SUCCESS(f"{label}: image added"))
                continue

            with transaction.atomic():
                report = FakeReport.objects.create(
                    description=item["fake_text"],
                    status=FakeReport.Status.FAKE,
                    reviewed_by=reviewer,
                )
                refutation = Refutation(
                    fake_report=report,
                    title=item["title"],
                    category=item["category"],
                    source=item["source"],
                    summary=item["summary"],
                    link=item["link"],
                    text=item["text"],
                )
                self.attach_image(refutation, item["image_url"])
                refutation.save()

            self.stdout.write(self.style.SUCCESS(f"{label}: created"))

    def attach_image(self, refutation, url):
        try:
            request = Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urlopen(request, timeout=15, context=SSL_CONTEXT) as response:
                content_type = response.headers.get_content_type()
                data = response.read()
        except (URLError, TimeoutError, ValueError) as e:
            self.stderr.write(self.style.WARNING(f"Could not download {url}: {e}"))
            return False

        extension = mimetypes.guess_extension(content_type) or ".jpg"
        refutation.image.save(f"refutation{extension}", ContentFile(data), save=False)
        return True
