from django.conf import settings
from django.urls import path, re_path
from django.views.static import serve

from reports.views import create_report

urlpatterns = [
    path("api/reports/", create_report, name="create-report"),
]

# Serve the static frontend (index.html, submit.html, style.css, script.js)
# from the project root during development.
if settings.DEBUG:
    urlpatterns += [
        path("", serve, {"path": "index.html", "document_root": settings.BASE_DIR}),
        re_path(
            r"^(?P<path>[\w-]+\.(?:html|css|js))$",
            serve,
            {"document_root": settings.BASE_DIR},
        ),
    ]
