from django.urls import path

from . import views

app_name = "reports"

urlpatterns = [
    path("submit/", views.submit, name="submit"),
    path("api/reports/", views.create_report, name="create"),
]
