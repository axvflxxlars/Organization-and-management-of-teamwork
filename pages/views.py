from django.shortcuts import render

from reports.models import FakeReport, Refutation


def home(request):
    refutations = Refutation.objects.select_related("fake_report").filter(
        fake_report__status=FakeReport.Status.APPROVED
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
            "text": r.text,
        }
        for r in refutations
    ]
    return render(
        request,
        "pages/home.html",
        {"refutations": refutations, "modal_data": modal_data},
    )
