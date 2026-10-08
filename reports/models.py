from django.conf import settings
from django.db import models


class FakeReport(models.Model):
    """A user-submitted report of suspicious information or a possible fake."""

    class Status(models.TextChoices):
        PENDING = "pending", "Pending"
        APPROVED = "approved", "Approved"
        REJECTED = "rejected", "Rejected"

    link = models.URLField(max_length=2048, blank=True)
    description = models.TextField()
    author = models.CharField(max_length=255, blank=True)
    status = models.CharField(
        max_length=16, choices=Status.choices, default=Status.PENDING
    )
    reviewed_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="reviewed_reports",
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "fake_reports"
        ordering = ["-created_at"]

    def __str__(self):
        return f"#{self.pk} {self.description[:50]}"
