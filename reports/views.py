import json

from django.core.exceptions import ValidationError
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from .models import FakeReport


def submit(request):
    return render(request, "reports/submit.html")


# Anonymous public endpoint: no session auth involved, so CSRF protection is not needed.
@csrf_exempt
@require_POST
def create_report(request):
    try:
        data = json.loads(request.body)
    except (json.JSONDecodeError, UnicodeDecodeError):
        return JsonResponse({"error": "Invalid JSON"}, status=400)
    if not isinstance(data, dict):
        return JsonResponse({"error": "Invalid JSON"}, status=400)

    report = FakeReport(
        link=str(data.get("link", "")).strip(),
        description=str(data.get("description", "")).strip(),
        author=str(data.get("author", "")).strip(),
    )
    try:
        report.full_clean(exclude=["status", "reviewed_by"])
    except ValidationError as e:
        return JsonResponse({"errors": e.message_dict}, status=400)

    report.save()
    return JsonResponse({"id": report.pk}, status=201)
