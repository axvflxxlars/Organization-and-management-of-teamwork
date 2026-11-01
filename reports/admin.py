from django.contrib import admin
from .models import FakeReport, Refutation

admin.site.register(FakeReport)
admin.site.register(Refutation)