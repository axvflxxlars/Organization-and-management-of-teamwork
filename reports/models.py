from django.conf import settings
from django.db import models


class FakeReport(models.Model):
    class Status(models.TextChoices):
        PENDING = "pending", "Pending"
        APPROVED = "approved", "Approved"
        REJECTED = "rejected", "Rejected"

    link = models.URLField(max_length=2048, blank=True)
    description = models.TextField()
    reporter = models.CharField(max_length=255, blank=True)
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


class Refutation(models.Model):
    fake_report = models.OneToOneField(
        FakeReport, on_delete=models.CASCADE, related_name="refutation"
    )
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    source = models.CharField(max_length=255)
    summary = models.CharField(max_length=500)
    link = models.URLField(max_length=2048)
    image = models.ImageField(upload_to="refutations/")
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "refutations"
        ordering = ["-created_at"]

    def __str__(self):
        return self.title
