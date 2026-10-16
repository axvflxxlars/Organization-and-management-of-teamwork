from django.urls import include, path

urlpatterns = [
    path("", include("pages.urls")),
    path("", include("reports.urls")),
]
