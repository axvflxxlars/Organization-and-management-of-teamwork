from django.shortcuts import render

from reports.models import FakeReport, Refutation


def home(request):
    refutations = Refutation.objects.select_related("fake_report__reviewed_by").filter(
        fake_report__status=FakeReport.Status.FAKE
    )
    modal_data = [
        {
            "id": r.pk,
            "title": r.title,
            "category": r.category,
            "source": r.source,
            "link": r.link,
            "image": r.image.url if r.image else "",
            "fakeText": r.fake_report.description,
            "reporter": r.fake_report.reporter or "Анонімно",
            "reviewer": r.fake_report.reviewed_by.username if r.fake_report.reviewed_by else "—",
            "text": r.text,
        }
        for r in refutations
    ]
    return render(
        request,
        "pages/home.html",
        {"refutations": refutations, "modal_data": modal_data},
    )
